import type { Dictionary } from './en.ts';

const de: Dictionary = {
  meta: {
    title: 'Neovate — Software-Studio in Prag',
    description:
      'Neovate entwickelt Blockchain-, Fintech- und KI-Produkte, Web-Apps, Landingpages und Designs. Drei Vollzeitentwickler mit QA und Design im Haus, ansässig in Prag.',
  },
  nav: {
    services: 'Leistungen',
    work: 'Projekte',
    team: 'Team',
    process: 'Arbeitsweise',
    contact: 'Kontakt',
    language: 'Sprache',
    skip: 'Zum Inhalt springen',
  },
  hero: {
    title: 'Wir entwerfen, bauen und testen Software, vom Smart Contract bis zur Landingpage.',
    lead: 'Neovate ist ein Software-Studio in Prag. Drei Vollzeitentwickler, QA-Tester und unsere eigenen Designer begleiten Ihr Produkt von der ersten Skizze bis in die Produktion — und bleiben, damit es läuft.',
    primary: 'Projekt starten',
    secondary: 'Projekte ansehen',
  },
  services: {
    title: 'Leistungen',
    lead: 'Wir haben Software für genügend Branchen entwickelt, um zu wissen, wo Projekte scheitern. Der Großteil unserer Arbeit fällt in sechs Bereiche.',
    items: [
      {
        name: 'Blockchain und Web3',
        text: 'Smart Contracts, DeFi-Protokolle, Wallets und dApps. Wir haben ein Index-Token-Protokoll auf Uniswap V4 umgesetzt, vom Contract bis zum Trading-Interface.',
        tags: ['Solidity', 'EVM', 'Uniswap V4', 'wagmi / viem', 'Subgraphs'],
      },
      {
        name: 'Banking und Fintech',
        text: 'Zahlungsabläufe, Konto-Dashboards und Anbindungen an Banken und Buchhaltungssysteme. Software, bei der jede Zahl stimmen muss.',
        tags: ['Bank-APIs', 'Zahlungen', 'Kontenabstimmung', 'Berichte'],
      },
      {
        name: 'KI-Produkte und Automatisierung',
        text: 'Sprachmodell-Funktionen in Ihrem Produkt, Agenten, die Routinearbeit übernehmen, und eine Suche in Ihren eigenen Dokumenten.',
        tags: ['LLM APIs', 'Agenten', 'RAG', 'Automatisierung'],
      },
      {
        name: 'Web-Apps und Landingpages',
        text: 'Von der einseitigen Launch-Site bis zur vollständigen Plattform mit Konten, Admin-Bereichen und Echtzeit-Funktionen.',
        tags: ['React', 'TypeScript', 'Node.js', 'Bun'],
      },
      {
        name: 'Produkt- und Interface-Design',
        text: 'Recherche, User Flows, Interface-Design und Designsysteme — von Menschen, die eng mit unseren Entwicklern zusammenarbeiten.',
        tags: ['Figma', 'Designsysteme', 'Prototypen'],
      },
      {
        name: 'QA und Testing',
        text: 'Dedizierte Tester prüfen jedes Release von Hand und mit automatisierten Tests, bevor es Ihre Nutzer erreicht.',
        tags: ['Manuelle QA', 'End-to-End-Tests', 'Regressionstests'],
      },
    ],
  },
  ai: {
    title: 'KI in Ihrem Produkt — und in unserer Arbeitsweise',
    product: {
      name: 'In Ihrem Produkt',
      text: 'Assistenten, die Ihre Daten kennen, automatische Verarbeitung von Dokumenten und Rechnungen, Klassifizierung, smarte Suche und Agenten, die mehrstufige Aufgaben eigenständig erledigen.',
    },
    work: {
      name: 'In unserer Arbeitsweise',
      text: 'KI beschleunigt unsere Entwicklung, Tests und Recherche, sodass ein kleines Team wie ein größeres arbeitet. Ein Entwickler prüft jede Zeile vor dem Release, und QA testet sie wie jeden anderen Code.',
    },
  },
  work: {
    title: 'Ausgewählte Projekte',
    lead: 'Ein paar Projekte, die wir öffentlich zeigen dürfen. Viele weitere unterliegen NDAs — fragen Sie uns gern danach.',
    visit: 'Öffnen',
    items: [
      {
        kind: 'DeFi-Protokoll',
        text: 'Ein Index-Token-Protokoll auf Basis von Uniswap-V4-Liquiditätspositionen. Wir haben die Smart Contracts, die Trading-App, das Admin-Dashboard und die Indexierungsschicht gebaut.',
      },
      {
        kind: 'Toolkit für Web3-Entwickler',
        text: 'Kostenlose Tools für Smart-Contract-Entwickler: Calldata dekodieren, sich mit jeder dApp als beliebige Adresse verbinden und Token-Freigaben prüfen. Läuft im Browser, ohne Konto.',
      },
      {
        kind: 'Rätsel-Erlebnis',
        text: 'Zwei rätselhafte Boxen und ein gemeinsames Geheimnis: ein Offline-Kooperationsrätsel als Experiment.',
      },
      {
        kind: 'Live-Quiz-Plattform',
        text: 'Erstellen Sie ein Quiz, führen Sie es live durch und lassen Sie alle per Handy mit einem sechsstelligen Code mitspielen.',
      },
    ],
    more: 'Und viele weitere unter NDA: Banking-Tools, interne Plattformen, Web3-Produkte und Landingpages.',
  },
  team: {
    title: 'Mit wem Sie zusammenarbeiten',
    lead: 'Zwischen Ihnen und den Leuten, die die Arbeit machen, sitzen keine Account-Manager. Sie sprechen direkt mit den Entwicklern.',
    items: [
      {
        name: 'Drei Vollzeitentwickler',
        text: 'Erfahrene Entwickler für Frontend, Backend und Smart Contracts. Dieselben Leute bleiben vom Kickoff bis zum Launch an Ihrer Seite.',
      },
      {
        name: 'QA-Tester',
        text: 'Sie testen jedes Release, bevor Sie es sehen, und schreiben die automatisierten Tests, die es danach am Laufen halten.',
      },
      {
        name: 'Design',
        text: 'Interfaces, Prototypen und Markenarbeit — intern, in enger Zusammenarbeit mit unseren Entwicklern.',
      },
    ],
  },
  process: {
    title: 'Arbeitsweise',
    steps: [
      { name: 'Gespräch', text: 'Ein kostenloses Gespräch über Ihr Vorhaben. Wir sagen Ihnen ehrlich, ob wir das richtige Team sind.' },
      { name: 'Projektumfang', text: 'Ein schriftlicher Plan mit Meilensteinen, einer Schätzung und einem klar definierten ersten Release.' },
      { name: 'Umsetzung', text: 'Funktionierende Software, die Sie jede Woche durchklicken können — keine bloßen Statusberichte.' },
      { name: 'Test und Launch', text: 'QA gibt frei, wir deployen und beobachten die ersten Tage im Produktivbetrieb.' },
      { name: 'Support', text: 'Wir bleiben an Bord, um das Gebaute zu pflegen, zu verbessern und zu skalieren.' },
    ],
  },
  contact: {
    title: 'Erzählen Sie uns, was Sie bauen',
    lead: 'Schreiben Sie ein paar Zeilen zu Ihrem Projekt. Wir antworten meist innerhalb eines Arbeitstags.',
    email: 'Schreiben Sie uns',
    company: 'Firmendaten',
    country: 'Tschechische Republik',
    idLabel: 'Firmen-ID',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  },
  notFound: {
    title: 'Diese Seite existiert nicht',
    text: 'Der Link ist möglicherweise veraltet oder falsch eingegeben.',
    home: 'Zur Startseite',
  },
};

export default de;
