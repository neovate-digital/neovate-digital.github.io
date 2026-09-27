import type { Dictionary } from './en';

const cs: Dictionary = {
  meta: {
    title: 'Neovate — softwarové studio v Praze',
    description:
      'Neovate vyvíjí blockchainové, fintech a AI produkty, webové aplikace, landing page a design. Tři full-time inženýři, QA a design in-house, sídlíme v Praze.',
  },
  nav: {
    services: 'Co děláme',
    work: 'Práce',
    team: 'Tým',
    process: 'Jak pracujeme',
    contact: 'Kontakt',
    language: 'Jazyk',
    skip: 'Přeskočit na obsah',
  },
  hero: {
    title: 'Navrhujeme, vyvíjíme a testujeme software, od smart kontraktů po landing page.',
    lead: 'Neovate je softwarové studio v Praze. Tři full-time inženýři, QA testeři a design in-house dovedou váš produkt od prvního nápadu do provozu a zůstanou, aby fungoval dál.',
    primary: 'Začít projekt',
    secondary: 'Podívat se na naši práci',
  },
  services: {
    title: 'Co děláme',
    lead: 'Prošli jsme si dost oborů na to, abychom věděli, kde projekty selhávají. Většina naší práce spadá do šesti oblastí.',
    items: [
      {
        name: 'Blockchain a web3',
        text: 'Smart kontrakty, DeFi protokoly, peněženky a dApps. Nasadili jsme index-token protokol na Uniswap V4, od kontraktů po obchodní rozhraní.',
        tags: ['Solidity', 'EVM', 'Uniswap V4', 'wagmi / viem', 'Subgraphs'],
      },
      {
        name: 'Bankovnictví a fintech',
        text: 'Platební toky, přehledy účtů a integrace s bankami a účetními systémy. Software, kde musí sedět každé číslo.',
        tags: ['Bankovní API', 'Platby', 'Rekonciliace', 'Reporting'],
      },
      {
        name: 'AI produkty a automatizace',
        text: 'Funkce s jazykovými modely přímo ve vašem produktu, agenti, kteří přebírají rutinní práci, a vyhledávání napříč vašimi vlastními dokumenty.',
        tags: ['LLM APIs', 'Agenti', 'RAG', 'Automatizace'],
      },
      {
        name: 'Webové aplikace a landing page',
        text: 'Od jednostránkového launch webu po plnou platformu s účty, administrací a real-time funkcemi.',
        tags: ['React', 'TypeScript', 'Node.js', 'Bun'],
      },
      {
        name: 'Design produktu a rozhraní',
        text: 'Research, uživatelské flow, design rozhraní a design systémy, dělané lidmi, kteří sedí hned vedle kódu.',
        tags: ['Figma', 'Design systémy', 'Prototypy'],
      },
      {
        name: 'QA a testování',
        text: 'Dedikovaní testeři kontrolují každý release ručně i pomocí automatizovaných testů, než se dostane k vašim uživatelům.',
        tags: ['Manuální QA', 'End-to-end testy', 'Regrese'],
      },
    ],
  },
  ai: {
    title: 'AI ve vašem produktu i v tom, jak pracujeme',
    product: {
      name: 'Ve vašem produktu',
      text: 'Asistenti, kteří znají vaše data, automatické zpracování dokumentů a faktur, klasifikace, chytré vyhledávání a agenti, kteří samostatně dokončí vícekrokové úkoly.',
    },
    work: {
      name: 'V tom, jak vyvíjíme',
      text: 'AI zrychluje naše programování, testování a research, takže malý tým funguje jako větší. Každý řádek, který jde do provozu, projde inženýrem a QA ho otestuje jako každý jiný kód.',
    },
  },
  work: {
    title: 'Vybrané projekty',
    lead: 'Pár projektů, které můžeme ukázat veřejně. Mnohem víc jich je pod NDA, zeptejte se nás na ně.',
    visit: 'Otevřít',
    items: [
      {
        kind: 'DeFi protokol',
        text: 'Index-token protokol postavený na likviditních pozicích Uniswap V4. Postavili jsme smart kontrakty, obchodní aplikaci, admin dashboard i indexovací vrstvu.',
      },
      {
        kind: 'Puzzle zážitek',
        text: 'Dvě záhadné krabičky a jedno sdílené tajemství: offline kooperativní puzzle experiment.',
      },
      {
        kind: 'Živá kvízová platforma',
        text: 'Vytvořte kvíz, spusťte ho naživo a nechte všechny hrát z telefonu pomocí šestimístného kódu.',
      },
    ],
    more: 'A mnohem víc pod NDA: bankovní nástroje, interní platformy, web3 produkty a landing page.',
  },
  team: {
    title: 'S kým budete pracovat',
    lead: 'Mezi vámi a lidmi, kteří práci dělají, nejsou žádní account manažeři. Mluvíte přímo s inženýry.',
    items: [
      {
        name: 'Tři full-time inženýři',
        text: 'Zkušení vývojáři napříč frontendem, backendem a smart kontrakty. Stejní lidé jsou s vámi od kickoffu až po launch.',
      },
      {
        name: 'QA testeři',
        text: 'Otestují každý release, než ho uvidíte, a napíšou automatizované testy, které ho udrží funkční i potom.',
      },
      {
        name: 'Design',
        text: 'Rozhraní, prototypy a práce na značce vznikají in-house, hned vedle kódu.',
      },
    ],
  },
  process: {
    title: 'Jak pracujeme',
    steps: [
      { name: 'Rozhovor', text: 'Nezávazný hovor o tom, co potřebujete. Upřímně vám řekneme, jestli jsme ten správný tým.' },
      { name: 'Zadání', text: 'Písemný plán s milníky, odhadem a jasně daným prvním releasem.' },
      { name: 'Vývoj', text: 'Funkční software, kterým si můžete proklikat každý týden, ne jen status reporty.' },
      { name: 'Test a spuštění', text: 'QA dá zelenou, nasadíme a hlídáme první dny v provozu.' },
      { name: 'Podpora', text: 'Zůstáváme, abychom opravovali, vylepšovali a škálovali to, co jsme postavili.' },
    ],
  },
  contact: {
    title: 'Řekněte nám, co stavíte',
    lead: 'Napište pár řádků o svém projektu. Obvykle odpovíme do jednoho pracovního dne.',
    email: 'Napište nám',
    company: 'Údaje o firmě',
    country: 'Česká republika',
    idLabel: 'IČO',
  },
  footer: {
    rights: 'Všechna práva vyhrazena.',
  },
  notFound: {
    title: 'Tato stránka neexistuje',
    text: 'Odkaz může být starý nebo špatně napsaný.',
    home: 'Přejít na domovskou stránku',
  },
};

export default cs;
