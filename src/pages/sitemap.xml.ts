import { locales, localePath } from '../i18n';

const site = 'https://neovate.dev';

export function GET() {
  const alternates = locales
    .map((l) => `<xhtml:link rel="alternate" hreflang="${l.code}" href="${site}${localePath(l.code)}"/>`)
    .join('');
  const urls = locales
    .map((l) => `<url><loc>${site}${localePath(l.code)}</loc>${alternates}</url>`)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
