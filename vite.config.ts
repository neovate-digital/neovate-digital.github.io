import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import { locales, localePath } from './src/i18n/index.ts';
import { renderHome } from './src/pages/home.ts';
import { renderNotFound } from './src/pages/not-found.ts';
import { renderSitemap } from './src/pages/sitemap.ts';

const root = fileURLToPath(new URL('.', import.meta.url));

// URL path -> HTML renderer. Each becomes <path>/index.html (or 404.html) in dist/.
const routes = new Map<string, () => string>([
  ...locales.map((l) => [localePath(l.code), () => renderHome(l.code)] as const),
  ['/404.html', renderNotFound],
]);

const fileFor = (path: string) => root + (path.endsWith('/') ? `${path.slice(1)}index.html` : path.slice(1));
const pages = new Map([...routes].map(([path, render]) => [fileFor(path), render]));

// Renders the pages from TypeScript templates, so no HTML files live in the repo.
function staticPages(): Plugin {
  return {
    name: 'neovate:pages',
    resolveId: (id) => (pages.has(id) ? id : undefined),
    load: (id) => pages.get(id)?.(),
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: renderSitemap() });
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = (req.url ?? '/').split(/[?#]/)[0];
        if (path === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml');
          return res.end(renderSitemap());
        }
        if (!path.endsWith('/') && !path.endsWith('.html')) return next();
        const render = routes.get(path);
        res.statusCode = render ? 200 : 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(await server.transformIndexHtml(path, (render ?? renderNotFound)()));
      });
    },
  };
}

export default defineConfig({
  root,
  appType: 'mpa',
  plugins: [staticPages()],
  build: {
    assetsDir: 'assets',
    rolldownOptions: { input: [...pages.keys()] },
  },
});
