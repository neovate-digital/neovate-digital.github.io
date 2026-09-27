# neovate.dev

Company website of Neovate s.r.o. — static [Vite](https://vite.dev) site in seven languages, deployed to GitHub Pages.

## Develop

Uses [Bun](https://bun.sh).

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # static output in dist/
bun run check    # typecheck
```

Pages are rendered at build time from TypeScript templates in `src/pages/` (a small `html` tagged template in
`src/lib/html.ts` escapes values). The plugin in `vite.config.ts` maps each route to its template, writes
`<route>/index.html`, `404.html` and `sitemap.xml`, and serves the same routes from the dev server. The only
client JavaScript is `src/main.ts`, plus the inline first-visit redirect on the English page.

## Languages

Copy lives in `src/i18n/<code>.ts`, one file per language. `en.ts` is the source of truth and defines the
`Dictionary` type, so a missing or extra key in any other language fails the build.

| Code | URL |
|---|---|
| en | `/` |
| cs | `/cs/` |
| de | `/de/` |
| es | `/es/` |
| pl | `/pl/` |
| uk | `/uk/` |
| ru | `/ru/` |

To add a language: create `src/i18n/<code>.ts` typed as `Dictionary`, then add it to the `locales` list in
`src/i18n/index.ts`. Pages, the language menu, `hreflang` tags and the sitemap pick it up automatically.

On the first visit to `/`, visitors whose browser language is supported are sent to that version once;
picking a language from the menu is remembered.

Portfolio links (domain + name) are in `src/pages/home.ts`; their descriptions are in the dictionaries,
in the same order.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

Custom domain `neovate.dev`:

1. DNS at the registrar, apex domain:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` → `CNAME` → `neovate-digital.github.io`
2. Repo → Settings → Pages → Custom domain: `neovate.dev`, then tick **Enforce HTTPS** once the certificate is issued.
3. Recommended: verify the domain for the org (Org settings → Pages → Add a domain) so nobody else can claim it.

## Logo

Files in `brand/logo/`, all outlined paths (no font needed):

| File | Use |
|---|---|
| `wordmark-paper.svg` / `wordmark-ink.svg` / `wordmark-cobalt.svg` | Wordmark on dark, light or white backgrounds |
| `logo-cobalt.svg` | Presentation lockup with clear space |
| `mark.svg` | Rounded "n" mark — favicon, app icon |
| `mark-square.svg`, `mark-180.png` | Full-bleed mark for avatars that crop to a circle |

Wordmark: Geologica, weight 800, sharpness 100, tracking −0.028 em. Colours: cobalt `#2437D6`, paper `#EEF1F5`,
ink `#15171F`. Rebuild with `python brand/logo/build.py` (needs `fonttools[woff]`, `brotli`, `skia-pathops`).
