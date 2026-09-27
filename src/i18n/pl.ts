import type { Dictionary } from './en';

const pl: Dictionary = {
  meta: {
    title: 'Neovate — studio programistyczne w Pradze',
    description:
      'Neovate tworzy produkty blockchain, fintech i AI, aplikacje webowe, strony docelowe i projekty graficzne. Trzech inżynierów na pełny etat, własne QA i projektowanie, siedziba w Pradze.',
  },
  nav: {
    services: 'Czym się zajmujemy',
    work: 'Projekty',
    team: 'Zespół',
    process: 'Jak pracujemy',
    contact: 'Kontakt',
    language: 'Język',
    skip: 'Do treści',
  },
  hero: {
    title: 'Projektujemy, budujemy i testujemy oprogramowanie — od smart kontraktów po strony docelowe.',
    lead: 'Neovate to studio programistyczne z Pragi. Trzech inżynierów na pełny etat, testerzy QA i własny zespół projektowy prowadzą produkt od pierwszego szkicu aż po wdrożenie — i zostają, by dbać o jego działanie.',
    primary: 'Rozpocznij projekt',
    secondary: 'Zobacz projekty',
  },
  services: {
    title: 'Czym się zajmujemy',
    lead: 'Tworzyliśmy oprogramowanie dla wystarczająco wielu branż, by wiedzieć, gdzie projekty napotykają problemy. Nasza praca mieści się głównie w sześciu obszarach.',
    items: [
      {
        name: 'Blockchain i web3',
        text: 'Smart kontrakty, protokoły DeFi, portfele i dApps. Wdrożyliśmy protokół tokenów indeksowych na Uniswap V4 — od kontraktów po interfejs handlowy.',
        tags: ['Solidity', 'EVM', 'Uniswap V4', 'wagmi / viem', 'Subgraphs'],
      },
      {
        name: 'Bankowość i fintech',
        text: 'Przepływy płatności, panele kont i integracje z bankami oraz systemami księgowymi. Oprogramowanie, w którym każda liczba musi się zgadzać.',
        tags: ['API bankowe', 'Płatności', 'Uzgadnianie', 'Raportowanie'],
      },
      {
        name: 'Produkty AI i automatyzacja',
        text: 'Funkcje oparte na modelach językowych w produkcie, agenci przejmujący rutynową pracę oraz wyszukiwanie we własnych dokumentach.',
        tags: ['LLM APIs', 'Agenci', 'RAG', 'Automatyzacja'],
      },
      {
        name: 'Aplikacje webowe i strony docelowe',
        text: 'Od jednostronicowej witryny na premierę produktu po pełną platformę z kontami, panelami administracyjnymi i funkcjami w czasie rzeczywistym.',
        tags: ['React', 'TypeScript', 'Node.js', 'Bun'],
      },
      {
        name: 'Projektowanie produktu i interfejsu',
        text: 'Badania, ścieżki użytkownika, projektowanie interfejsów i systemy projektowe — tworzone przez ludzi, którzy pracują ramię w ramię z programistami.',
        tags: ['Figma', 'Systemy projektowe', 'Prototypy'],
      },
      {
        name: 'QA i testowanie',
        text: 'Dedykowani testerzy sprawdzają każde wydanie ręcznie i za pomocą testów automatycznych, zanim trafi do użytkowników.',
        tags: ['Testy manualne', 'Testy end-to-end', 'Testy regresyjne'],
      },
    ],
  },
  ai: {
    title: 'AI w produkcie i w sposobie pracy',
    product: {
      name: 'W produkcie',
      text: 'Asystenci znający dane firmy, automatyczne przetwarzanie dokumentów i faktur, klasyfikacja, inteligentne wyszukiwanie oraz agenci samodzielnie kończący wieloetapowe zadania.',
    },
    work: {
      name: 'W sposobie pracy',
      text: 'AI przyspiesza programowanie, testowanie i badania, dzięki czemu mały zespół działa jak większy. Każdą linijkę kodu trafiającą na produkcję sprawdza inżynier, a QA testuje ją tak jak każdy inny kod.',
    },
  },
  work: {
    title: 'Wybrane projekty',
    lead: 'Kilka projektów, które możemy pokazać publicznie. Znacznie więcej obejmują umowy NDA — wystarczy zapytać.',
    visit: 'Otwórz',
    items: [
      {
        kind: 'Protokół DeFi',
        text: 'Protokół tokenów indeksowych zbudowany na pozycjach płynności Uniswap V4. Stworzyliśmy smart kontrakty, aplikację handlową, panel administracyjny oraz warstwę indeksującą.',
      },
      {
        kind: 'Narzędzia dla programistów web3',
        text: 'Darmowe narzędzia dla twórców smart kontraktów: dekodowanie calldata, łączenie z dowolną dApp jako dowolny adres i przegląd zatwierdzeń tokenów. Działa w przeglądarce, bez zakładania konta.',
      },
      {
        kind: 'Gra z zagadkami',
        text: 'Dwa tajemnicze pudełka i jeden wspólny sekret: kooperacyjny eksperyment offline w formie zagadki.',
      },
      {
        kind: 'Platforma quizów na żywo',
        text: 'Quiz można stworzyć, poprowadzić na żywo, a uczestnicy dołączają z telefonu za pomocą sześciocyfrowego kodu.',
      },
    ],
    more: 'I znacznie więcej pod NDA: narzędzia bankowe, platformy wewnętrzne, produkty web3 i strony docelowe.',
  },
  team: {
    title: 'Z kim się współpracuje',
    lead: 'Między zamawiającym a osobami wykonującymi pracę nie ma opiekunów klienta — rozmawia się bezpośrednio z inżynierami.',
    items: [
      {
        name: 'Trzech inżynierów na pełny etat',
        text: 'Doświadczeni programiści frontendu, backendu i smart kontraktów. Ci sami ludzie zostają przy projekcie od startu aż po wdrożenie.',
      },
      {
        name: 'Testerzy QA',
        text: 'Testują każde wydanie, zanim trafi do klienta, i piszą automatyczne testy, które później pilnują, żeby wszystko dalej działało.',
      },
      {
        name: 'Projektowanie',
        text: 'Interfejsy, prototypy i praca nad marką — tworzone przez nasz zespół, w ścisłej współpracy z programistami.',
      },
    ],
  },
  process: {
    title: 'Jak pracujemy',
    steps: [
      { name: 'Rozmowa', text: 'Bezpłatna rozmowa o potrzebach projektu. Szczerze powiemy, czy jesteśmy odpowiednim zespołem do tego zadania.' },
      { name: 'Zakres', text: 'Pisemny plan z kamieniami milowymi, szacunkową wyceną i jasno określonym pierwszym wydaniem.' },
      { name: 'Budowa', text: 'Działające oprogramowanie do przeklikania co tydzień, a nie tylko raporty z postępów.' },
      { name: 'Testy i wdrożenie', text: 'QA daje zielone światło, wdrażamy i obserwujemy pierwsze dni na produkcji.' },
      { name: 'Wsparcie', text: 'Zostajemy, żeby naprawiać, ulepszać i skalować to, co zbudowaliśmy.' },
    ],
  },
  contact: {
    title: 'Co powstaje?',
    lead: 'Wystarczy kilka zdań o projekcie. Zwykle odpowiadamy w ciągu jednego dnia roboczego.',
    email: 'Napisz do nas',
    company: 'Dane firmy',
    country: 'Czechy',
    idLabel: 'Numer firmy',
  },
  footer: {
    rights: 'Wszelkie prawa zastrzeżone.',
  },
  notFound: {
    title: 'Ta strona nie istnieje',
    text: 'Link może być nieaktualny albo błędnie wpisany.',
    home: 'Do strony głównej',
  },
};

export default pl;
