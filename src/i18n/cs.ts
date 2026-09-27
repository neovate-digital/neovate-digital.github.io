import type { Dictionary } from './en.ts';

const cs: Dictionary = {
  meta: {
    title: 'Neovate — softwarové studio v Praze',
    description:
      'Neovate vyvíjí blockchainové, fintech a AI produkty, webové aplikace a vstupní stránky a tvoří design. Tři vývojáři na plný úvazek, vlastní QA a design, sídlo v Praze.',
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
    title: 'Navrhujeme, vyvíjíme a testujeme software, od smart kontraktů po vstupní stránky.',
    lead: 'Neovate je softwarové studio v Praze. Tři vývojáři na plný úvazek, QA testeři a vlastní designéři dovedou váš produkt od prvního náčrtu do provozu a zajistí, aby fungoval dál.',
    primary: 'Začít projekt',
    secondary: 'Podívat se na naši práci',
  },
  services: {
    title: 'Co děláme',
    lead: 'Prošli jsme si dost oborů na to, abychom věděli, kde projekty selhávají. Většina naší práce spadá do šesti oblastí.',
    items: [
      {
        name: 'Blockchain a web3',
        text: 'Smart kontrakty, DeFi protokoly, peněženky a dApps. Nasadili jsme protokol indexových tokenů na Uniswap V4, od kontraktů po obchodní rozhraní.',
        tags: ['Solidity', 'EVM', 'Uniswap V4', 'wagmi / viem', 'Subgraphs'],
      },
      {
        name: 'Bankovnictví a fintech',
        text: 'Platební toky, přehledy účtů a integrace s bankami a účetními systémy. Software, kde musí sedět každé číslo.',
        tags: ['Bankovní API', 'Platby', 'Rekonciliace', 'Výkaznictví'],
      },
      {
        name: 'AI produkty a automatizace',
        text: 'Funkce s jazykovými modely přímo ve vašem produktu, agenti, kteří přebírají rutinní práci, a vyhledávání napříč vašimi vlastními dokumenty.',
        tags: ['LLM APIs', 'Agenti', 'RAG', 'Automatizace'],
      },
      {
        name: 'Webové aplikace a vstupní stránky',
        text: 'Od jednostránkového webu pro uvedení produktu po plnohodnotnou platformu s účty, administrací a funkcemi v reálném čase.',
        tags: ['React', 'TypeScript', 'Node.js', 'Bun'],
      },
      {
        name: 'Design produktu a rozhraní',
        text: 'Výzkum, uživatelské scénáře, design rozhraní a designové systémy od lidí, kteří pracují bok po boku s vývojáři.',
        tags: ['Figma', 'Designové systémy', 'Prototypy'],
      },
      {
        name: 'QA a testování',
        text: 'Naši QA testeři kontrolují každou verzi ručně i pomocí automatizovaných testů, než se dostane k vašim uživatelům.',
        tags: ['Manuální QA', 'End-to-end testy', 'Regresní testy'],
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
      text: 'AI zrychluje naše programování, testování a výzkum, takže malý tým funguje jako větší. Každý řádek kódu před nasazením zkontroluje vývojář a QA ho otestuje jako každý jiný kód.',
    },
  },
  work: {
    title: 'Vybrané projekty',
    lead: 'Pár projektů, které můžeme ukázat veřejně. Mnohem víc jich je pod NDA, zeptejte se nás na ně.',
    visit: 'Otevřít',
    items: [
      {
        kind: 'DeFi protokol',
        text: 'Protokol indexových tokenů postavený na likviditních pozicích Uniswap V4. Postavili jsme smart kontrakty, obchodní aplikaci, administrační panel i indexovací vrstvu.',
      },
      {
        kind: 'Nástroje pro web3 vývojáře',
        text: 'Bezplatné nástroje pro vývojáře smart kontraktů: dekódování calldata, připojení k libovolné dApp pod libovolnou adresou a přehled schválení tokenů. Běží v prohlížeči, bez registrace.',
      },
      {
        kind: 'Zážitková hlavolamová hra',
        text: 'Dvě záhadné krabičky a jedno společné tajemství: kooperativní experiment s hlavolamy bez internetu.',
      },
      {
        kind: 'Platforma pro živé kvízy',
        text: 'Vytvořte kvíz, spusťte ho naživo a nechte všechny hrát z telefonu pomocí šestimístného kódu.',
      },
    ],
    more: 'A mnohem víc pod NDA: bankovní nástroje, interní platformy, web3 produkty a vstupní stránky.',
  },
  team: {
    title: 'S kým budete pracovat',
    lead: 'Mezi vámi a lidmi, kteří práci dělají, nejsou žádní account manažeři. Mluvíte přímo s vývojáři.',
    items: [
      {
        name: 'Tři vývojáři na plný úvazek',
        text: 'Zkušení vývojáři napříč frontendem, backendem a smart kontrakty. Stejní lidé jsou s vámi od zahájení až po spuštění.',
      },
      {
        name: 'QA testeři',
        text: 'Otestují každou verzi, než ji uvidíte, a napíšou automatizované testy, které zajistí její funkčnost i potom.',
      },
      {
        name: 'Design',
        text: 'Rozhraní, prototypy a práce na značce vznikají u nás, v úzké spolupráci s vývojáři.',
      },
    ],
  },
  process: {
    title: 'Jak pracujeme',
    steps: [
      { name: 'Rozhovor', text: 'Bezplatný hovor o tom, co potřebujete. Upřímně vám řekneme, jestli jsme ten správný tým.' },
      { name: 'Zadání', text: 'Písemný plán s milníky, odhadem a jasně vymezenou první verzí.' },
      { name: 'Vývoj', text: 'Funkční software, který si můžete každý týden proklikat, ne jen zprávy o průběhu.' },
      { name: 'Test a spuštění', text: 'QA dá zelenou, nasadíme a hlídáme první dny v provozu.' },
      { name: 'Podpora', text: 'Zůstáváme, abychom opravovali, vylepšovali a škálovali to, co jsme postavili.' },
    ],
  },
  contact: {
    title: 'Řekněte nám, co vyvíjíte',
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
