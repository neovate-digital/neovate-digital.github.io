import { locales, localePath } from '../i18n/index.ts';
import { html } from '../lib/html.ts';
import { logo } from '../components/logo.ts';

export function renderNotFound(): string {
  return html`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>404 — Neovate</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/src/styles/not-found.css" />
  </head>
  <body class="blue">
    <main class="wrap notfound">
      <a class="logo" href="/" aria-label="Neovate">${logo}</a>
      <p class="notfound-code" aria-hidden="true">404</p>${locales.map(
        (l) => html`
      <section lang="${l.code}" class="notfound-row">
        <h1>${l.dict.notFound.title}</h1>
        <p>${l.dict.notFound.text} <a href="${localePath(l.code)}">${l.dict.notFound.home}</a></p>
      </section>`,
      )}
    </main>
  </body>
</html>
`.value;
}
