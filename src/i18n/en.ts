const en = {
  meta: {
    title: 'Neovate — software studio in Prague',
    description:
      'Neovate builds blockchain, fintech and AI products, web apps, landing pages and designs. Three full-time engineers with QA and design in-house, based in Prague.',
  },
  nav: {
    services: 'What we do',
    work: 'Work',
    team: 'Team',
    process: 'How we work',
    contact: 'Contact',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    title: 'We design, build and test software, from smart contracts to landing pages.',
    lead: 'Neovate is a software studio in Prague. Three full-time engineers, QA testers and in-house design take your product from the first sketch to production, and stay to keep it running.',
    primary: 'Start a project',
    secondary: 'See our work',
  },
  services: {
    title: 'What we do',
    lead: 'We have built across enough fields to know where projects break. Most of our work falls into six areas.',
    items: [
      {
        name: 'Blockchain and web3',
        text: 'Smart contracts, DeFi protocols, wallets and dApps. We shipped an index-token protocol on Uniswap V4, from the contracts to the trading interface.',
        tags: ['Solidity', 'EVM', 'Uniswap V4', 'wagmi / viem', 'Subgraphs'],
      },
      {
        name: 'Banking and fintech',
        text: 'Payment flows, account dashboards and integrations with banks and accounting systems. Software where every number has to add up.',
        tags: ['Bank APIs', 'Payments', 'Reconciliation', 'Reporting'],
      },
      {
        name: 'AI products and automation',
        text: 'Language-model features inside your product, agents that take over routine work, and search across your own documents.',
        tags: ['LLM APIs', 'Agents', 'RAG', 'Automation'],
      },
      {
        name: 'Web apps and landing pages',
        text: 'From a one-page launch site to a full platform with accounts, admin panels and real-time features.',
        tags: ['React', 'TypeScript', 'Node.js', 'Bun'],
      },
      {
        name: 'Product and interface design',
        text: 'Research, user flows, interface design and design systems, made by people who sit next to the code.',
        tags: ['Figma', 'Design systems', 'Prototypes'],
      },
      {
        name: 'QA and testing',
        text: 'Dedicated testers check every release by hand and with automated tests before it reaches your users.',
        tags: ['Manual QA', 'End-to-end tests', 'Regression'],
      },
    ],
  },
  ai: {
    title: 'AI in your product, and in how we work',
    product: {
      name: 'In your product',
      text: 'Assistants that know your data, automatic processing of documents and invoices, classification, smart search, and agents that finish multi-step tasks on their own.',
    },
    work: {
      name: 'In how we build',
      text: 'AI speeds up our coding, testing and research, so a small team moves like a bigger one. An engineer reviews every line that ships, and QA tests it like any other code.',
    },
  },
  work: {
    title: 'Selected work',
    lead: 'A few projects we can show in public. Many more sit behind NDAs, so ask us about them.',
    visit: 'Open',
    items: [
      {
        kind: 'DeFi protocol',
        text: 'An index-token protocol built on Uniswap V4 liquidity positions. We built the smart contracts, the trading app, the admin dashboard and the indexing layer.',
      },
      {
        kind: 'Puzzle experience',
        text: 'Two mysterious boxes and one shared secret: an offline cooperative puzzle experiment.',
      },
      {
        kind: 'Live quiz platform',
        text: 'Build a quiz, run it live, and let everyone play from their phone with a six-digit code.',
      },
    ],
    more: 'And many more under NDA: banking tools, internal platforms, web3 products and landing pages.',
  },
  team: {
    title: 'Who you will work with',
    lead: 'There are no account managers between you and the people doing the work. You talk to the engineers directly.',
    items: [
      {
        name: 'Three full-time engineers',
        text: 'Experienced developers across frontend, backend and smart contracts. The same people stay with you from kickoff to launch.',
      },
      {
        name: 'QA testers',
        text: 'They test every release before you see it, and write the automated checks that keep it working afterwards.',
      },
      {
        name: 'Design',
        text: 'Interfaces, prototypes and brand work done in-house, right next to the code.',
      },
    ],
  },
  process: {
    title: 'How we work',
    steps: [
      { name: 'Talk', text: 'A free call about what you need. We will tell you honestly whether we are the right team.' },
      { name: 'Scope', text: 'A written plan with milestones, an estimate and a clear first release.' },
      { name: 'Build', text: 'Working software you can click through every week, not just status reports.' },
      { name: 'Test and launch', text: 'QA signs off, we deploy, and we watch the first days in production.' },
      { name: 'Support', text: 'We stay on to fix, improve and scale what we built.' },
    ],
  },
  contact: {
    title: 'Tell us what you are building',
    lead: 'Write a few lines about your project. We usually reply within one business day.',
    email: 'Write to us',
    company: 'Company details',
    country: 'Czech Republic',
    idLabel: 'Company ID',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'This page does not exist',
    text: 'The link may be old or mistyped.',
    home: 'Go to the home page',
  },
};

export default en;
export type Dictionary = typeof en;
