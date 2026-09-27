import { locales, getDict, localePath, defaultLocale, type Locale } from '../i18n/index.ts';
import { html } from '../lib/html.ts';
import { logo } from '../components/logo.ts';

const site = 'https://neovate.dev';
const email = 'info@neovate.cz';

// Public portfolio. Copy lives in the dictionaries, in the same order.
const projects = [
  { domain: 'findex.io', name: 'Findex' },
  { domain: 'bckit.cc', name: 'BCkit' },
  { domain: 'unbox.quest', name: 'Unbox Quest' },
  { domain: 'qanda.fun', name: 'QandA' },
];

// First visit to the English root: send people to their browser language once.
const redirectScript = html`
    <script data-locales="${locales.map((l) => l.code).join(',')}">
      (function () {
        try {
          if (localStorage.getItem('lang')) return;
          var supported = document.currentScript.dataset.locales.split(',');
          var langs = navigator.languages || [navigator.language];
          for (var i = 0; i < langs.length; i++) {
            var code = (langs[i] || '').slice(0, 2).toLowerCase();
            if (code === 'en') return;
            if (supported.indexOf(code) !== -1) {
              localStorage.setItem('lang', code);
              location.replace('/' + code + '/' + location.hash);
              return;
            }
          }
        } catch (e) {}
      })();
    </script>`;

function langLinks(lang: Locale) {
  return locales.map(
    (l) => html`
            <li>
              <a href="${localePath(l.code)}" hreflang="${l.code}" lang="${l.code}" data-lang="${l.code}"${l.code === lang && html` aria-current="page"`}>${l.name}</a>
            </li>`,
  );
}

export function renderHome(lang: Locale): string {
  const t = getDict(lang);
  const current = locales.find((l) => l.code === lang)!;

  return html`<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${t.meta.title}</title>
    <meta name="description" content="${t.meta.description}" />
    <link rel="canonical" href="${site}${localePath(lang)}" />${locales.map(
      (l) => html`
    <link rel="alternate" hreflang="${l.code}" href="${site}${localePath(l.code)}" />`,
    )}
    <link rel="alternate" hreflang="x-default" href="${site}/" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="theme-color" content="#2437D6" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Neovate" />
    <meta property="og:title" content="${t.meta.title}" />
    <meta property="og:description" content="${t.meta.description}" />
    <meta property="og:url" content="${site}${localePath(lang)}" />
    <meta property="og:image" content="${site}/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="/src/styles/global.css" />${lang === defaultLocale && redirectScript}
    <script type="module" src="/src/main.ts"></script>
  </head>
  <body>
    <a class="skip" href="#main">${t.nav.skip}</a>

    <div class="blue">
      <header class="bar wrap">
        <a class="logo" href="${localePath(lang)}" aria-label="Neovate">${logo}</a>
        <nav class="nav" aria-label="Main">
          <a href="#services">${t.nav.services}</a>
          <a href="#work">${t.nav.work}</a>
          <a href="#team">${t.nav.team}</a>
          <a href="#process">${t.nav.process}</a>
          <a href="#contact">${t.nav.contact}</a>
        </nav>
        <details class="lang">
          <summary aria-label="${t.nav.language}">
            <span>${current.code.toUpperCase()}</span>
          </summary>
          <ul>${langLinks(lang)}
          </ul>
        </details>
      </header>

      <section class="hero wrap" aria-labelledby="hero-title">
        <h1 id="hero-title">${t.hero.title}</h1>
        <div class="hero-side">
          <p class="lead">${t.hero.lead}</p>
          <p class="actions">
            <a class="btn btn-light" href="#contact">${t.hero.primary}</a>
            <a class="btn btn-line" href="#work">${t.hero.secondary}</a>
          </p>
        </div>
      </section>

      <p class="wordmark" aria-hidden="true">neovate</p>
    </div>

    <main id="main">
      <section id="services" class="section wrap split" aria-labelledby="services-title">
        <div class="split-head">
          <h2 id="services-title">${t.services.title}</h2>
          <p class="section-lead">${t.services.lead}</p>
        </div>
        <ul class="services">${t.services.items.map(
          (s) => html`
          <li>
            <h3>${s.name}</h3>
            <p>${s.text}</p>
            <p class="tags">${s.tags.join(', ')}</p>
          </li>`,
        )}
        </ul>
      </section>

      <section class="ai" aria-labelledby="ai-title">
        <div class="wrap ai-inner">
          <h2 id="ai-title">${t.ai.title}</h2>
          <div class="ai-cols">
            <div>
              <h3>${t.ai.product.name}</h3>
              <p>${t.ai.product.text}</p>
            </div>
            <div>
              <h3>${t.ai.work.name}</h3>
              <p>${t.ai.work.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="section wrap" aria-labelledby="work-title">
        <h2 id="work-title">${t.work.title}</h2>
        <p class="section-lead">${t.work.lead}</p>
        <ul class="projects">${projects.map(
          (p, i) => html`
          <li>
            <a class="project" href="https://${p.domain}" target="_blank" rel="noopener">
              <span class="project-domain">${p.domain}</span>
              <span class="project-info">
                <span class="project-kind">${p.name}. ${t.work.items[i].kind}</span>
                <span class="project-text">${t.work.items[i].text}</span>
              </span>
            </a>
          </li>`,
        )}
        </ul>
        <p class="more">${t.work.more}</p>
      </section>

      <section id="team" class="section wrap" aria-labelledby="team-title">
        <h2 id="team-title">${t.team.title}</h2>
        <p class="section-lead">${t.team.lead}</p>
        <ul class="team">${t.team.items.map(
          (m) => html`
          <li>
            <h3>${m.name}</h3>
            <p>${m.text}</p>
          </li>`,
        )}
        </ul>
      </section>

      <section id="process" class="section wrap" aria-labelledby="process-title">
        <h2 id="process-title">${t.process.title}</h2>
        <ol class="steps">${t.process.steps.map(
          (s) => html`
          <li>
            <h3>${s.name}</h3>
            <p>${s.text}</p>
          </li>`,
        )}
        </ol>
      </section>
    </main>

    <footer id="contact" class="blue contact" aria-labelledby="contact-title">
      <div class="wrap contact-inner">
        <h2 id="contact-title">${t.contact.title}</h2>
        <p class="lead">${t.contact.lead}</p>
        <p>
          <a class="mail" href="mailto:${email}">${email}</a>
        </p>
        <div class="contact-foot">
          <address>
            <strong>Neovate s.r.o.</strong><br />
            ${t.contact.idLabel}: 23036028<br />
            Branická 213/53, 147 00 Praha 4<br />
            ${t.contact.country}
          </address>
          <ul class="foot-langs" aria-label="${t.nav.language}">${langLinks(lang)}
          </ul>
          <p class="copy">© ${new Date().getFullYear()} Neovate s.r.o. ${t.footer.rights}</p>
        </div>
      </div>
    </footer>
  </body>
</html>
`.value;
}
