import type { Dictionary } from './en.ts';

const es: Dictionary = {
  meta: {
    title: 'Neovate — estudio de software en Praga',
    description:
      'Neovate crea productos blockchain, fintech y de IA, aplicaciones web, landing pages y diseños. Tres ingenieros a tiempo completo con QA y diseño propios, con base en Praga.',
  },
  nav: {
    services: 'Qué hacemos',
    work: 'Trabajos',
    team: 'Equipo',
    process: 'Cómo trabajamos',
    contact: 'Contacto',
    language: 'Idioma',
    skip: 'Saltar al contenido',
  },
  hero: {
    title: 'Diseñamos, construimos y probamos software, desde contratos inteligentes hasta landing pages.',
    lead: 'Neovate es un estudio de software en Praga. Tres ingenieros a tiempo completo, especialistas en QA y diseñadores de nuestro equipo llevan tu producto desde el primer boceto hasta producción, y se quedan para mantenerlo funcionando.',
    primary: 'Empezar un proyecto',
    secondary: 'Ver nuestro trabajo',
  },
  services: {
    title: 'Qué hacemos',
    lead: 'Hemos desarrollado software en suficientes sectores para saber dónde fallan los proyectos. La mayor parte de nuestro trabajo se concentra en seis áreas.',
    items: [
      {
        name: 'Blockchain y web3',
        text: 'Contratos inteligentes, protocolos DeFi, monederos y dApps. Lanzamos un protocolo de tokens de índice en Uniswap V4, desde los contratos hasta la interfaz de trading.',
        tags: ['Solidity', 'EVM', 'Uniswap V4', 'wagmi / viem', 'Subgraphs'],
      },
      {
        name: 'Banca y fintech',
        text: 'Flujos de pago, paneles de cuentas e integraciones con bancos y sistemas contables. Software donde cada número tiene que cuadrar.',
        tags: ['APIs bancarias', 'Pagos', 'Conciliación', 'Informes'],
      },
      {
        name: 'Productos de IA y automatización',
        text: 'Funciones basadas en modelos de lenguaje dentro de tu producto, agentes que asumen el trabajo rutinario y búsqueda en tus propios documentos.',
        tags: ['LLM APIs', 'Agentes', 'RAG', 'Automatización'],
      },
      {
        name: 'Aplicaciones web y landing pages',
        text: 'Desde un sitio de lanzamiento de una sola página hasta una plataforma completa con cuentas, paneles de administración y funciones en tiempo real.',
        tags: ['React', 'TypeScript', 'Node.js', 'Bun'],
      },
      {
        name: 'Diseño de producto e interfaz',
        text: 'Investigación, flujos de usuario, diseño de interfaz y sistemas de diseño, creados por personas que trabajan codo a codo con los desarrolladores.',
        tags: ['Figma', 'Sistemas de diseño', 'Prototipos'],
      },
      {
        name: 'QA y pruebas',
        text: 'Nuestro equipo de QA revisa cada versión de forma manual y con pruebas automatizadas antes de que llegue a tus usuarios.',
        tags: ['QA manual', 'Pruebas de extremo a extremo', 'Pruebas de regresión'],
      },
    ],
  },
  ai: {
    title: 'IA en tu producto y en cómo trabajamos',
    product: {
      name: 'En tu producto',
      text: 'Asistentes que conocen tus datos, procesamiento automático de documentos y facturas, clasificación, búsqueda inteligente y agentes que completan tareas de varios pasos por su cuenta.',
    },
    work: {
      name: 'En cómo construimos',
      text: 'La IA acelera el desarrollo, las pruebas y la investigación, de modo que un equipo pequeño trabaja como uno más grande. Un ingeniero revisa cada línea antes del lanzamiento y QA la prueba como cualquier otro código.',
    },
  },
  work: {
    title: 'Trabajos seleccionados',
    lead: 'Algunos proyectos que podemos mostrar en público. Muchos más están bajo NDA, así que pregúntanos por ellos.',
    visit: 'Abrir',
    items: [
      {
        kind: 'Protocolo DeFi',
        text: 'Un protocolo de tokens de índice construido sobre posiciones de liquidez de Uniswap V4. Construimos los contratos inteligentes, la app de trading, el panel de administración y la capa de indexación.',
      },
      {
        kind: 'Herramientas para desarrolladores web3',
        text: 'Herramientas gratuitas para desarrolladores de contratos inteligentes: decodifica calldata, conéctate a cualquier dApp como cualquier dirección y revisa las aprobaciones de tokens. Funciona en el navegador, sin cuenta.',
      },
      {
        kind: 'Experiencia de acertijos',
        text: 'Dos cajas misteriosas y un secreto compartido: un experimento cooperativo de acertijos sin conexión.',
      },
      {
        kind: 'Plataforma de quiz en vivo',
        text: 'Crea un quiz, preséntalo en vivo y deja que todos jueguen desde su teléfono con un código de seis dígitos.',
      },
    ],
    more: 'Y muchos más bajo NDA: herramientas bancarias, plataformas internas, productos web3 y landing pages.',
  },
  team: {
    title: 'Con quién vas a trabajar',
    lead: 'No hay gestores de cuentas entre tú y las personas que hacen el trabajo. Hablas directamente con los ingenieros.',
    items: [
      {
        name: 'Tres ingenieros a tiempo completo',
        text: 'Desarrolladores experimentados en frontend, backend y contratos inteligentes. Las mismas personas te acompañan desde el arranque hasta el lanzamiento.',
      },
      {
        name: 'Especialistas en QA',
        text: 'Prueban cada versión antes de que la veas y crean las pruebas automatizadas que garantizan que siga funcionando después.',
      },
      {
        name: 'Diseño',
        text: 'Interfaces, prototipos y trabajo de marca creados por nuestro equipo, en estrecha colaboración con los desarrolladores.',
      },
    ],
  },
  process: {
    title: 'Cómo trabajamos',
    steps: [
      { name: 'Hablar', text: 'Una llamada gratuita sobre lo que necesitas. Te diremos con honestidad si somos el equipo indicado.' },
      { name: 'Definir alcance', text: 'Un plan escrito con hitos, una estimación y una primera versión bien definida.' },
      { name: 'Construir', text: 'Software funcional que puedes probar cada semana, no solo informes de estado.' },
      { name: 'Probar y lanzar', text: 'QA da su aprobación, desplegamos y vigilamos los primeros días en producción.' },
      { name: 'Soporte', text: 'Nos quedamos para corregir, mejorar y escalar lo que construimos.' },
    ],
  },
  contact: {
    title: 'Cuéntanos qué estás construyendo',
    lead: 'Escribe unas líneas sobre tu proyecto. Solemos responder dentro de un día hábil.',
    email: 'Escríbenos',
    company: 'Datos de la empresa',
    country: 'República Checa',
    idLabel: 'ID de empresa',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
  notFound: {
    title: 'Esta página no existe',
    text: 'El enlace puede estar desactualizado o mal escrito.',
    home: 'Ir a la página de inicio',
  },
};

export default es;
