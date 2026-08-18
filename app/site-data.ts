export const brand = {
  name: "Evolv.IA",
  email: "hello@evolvia.it",
  tagline: "AI, marketing e automazioni per aziende che vogliono crescere con metodo.",
  vat: "P. IVA in attivazione",
  legal: "© 2026 Evolv.IA · Tutti i diritti riservati.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Software", href: "/software" },
  { label: "Ecosistema", href: "/ecosistema" },
  { label: "Lead Generation", href: "/lead-generation" },
  { label: "CRM", href: "/crm" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
];

type Product = {
  slug: string;
  category: string;
  name: string;
  label: string;
  status: string;
  text: string;
  bullets: string[];
  href?: string;
};

export const products: Product[] = [
  {
    slug: "lead-engine",
    category: "Software proprietari",
    name: "Lead Engine",
    label: "Lead generation multicanale",
    status: "Piani mensili",
    text: "Raccoglie lead da fonti pubbliche, li qualifica e prepara messaggi di primo contatto coerenti con il target.",
    bullets: ["Ricerca lead", "Qualifica AI", "Outreach assistito", "Dashboard unica"],
  },
  {
    slug: "social-pulse",
    category: "Software proprietari",
    name: "Social Pulse",
    label: "Contenuti Instagram generati e pubblicati dall'AI",
    status: "Live",
    href: "https://socialpulse.evolv-ia.it",
    text: "Dalla notizia al post pubblicato, senza passaggi manuali: l'AI sceglie i temi, scrive e monta carosello, statico o reel, e li mette in coda per l'approvazione prima della pubblicazione su Instagram.",
    bullets: ["Sourcing automatico dei temi", "Copy e grafica generati dall'AI", "Gate di approvazione prima della pubblicazione", "Multi-brand, white-label"],
  },
  {
    slug: "landing-system",
    category: "Landing page",
    name: "Landing System",
    label: "Siti e landing orientati alla conversione",
    status: "Su progetto",
    text: "Pagine veloci, scritte con intenzione commerciale e collegate al CRM fin dal primo giorno.",
    bullets: ["Copy strategico", "Design su misura", "SEO tecnico", "Tracciamento conversioni"],
  },
  {
    slug: "voice-agent",
    category: "Software proprietari",
    name: "Voice Agent",
    label: "Assistente vocale per qualifica e follow-up",
    status: "In arrivo",
    text: "Automatizza prime risposte, conferme e raccolta dati senza lasciare il cliente in attesa.",
    bullets: ["Risposte guidate", "Qualifica iniziale", "Promemoria", "Passaggio al team"],
  },
  {
    slug: "vertical-crm",
    category: "CRM verticali",
    name: "Vertical CRM",
    label: "CRM modellato su processi di settore",
    status: "Su richiesta",
    text: "Pipeline, automazioni e report disegnati sul flusso reale di una nicchia o di una singola azienda.",
    bullets: ["Pipeline su misura", "Email e WhatsApp", "Webhook", "Report operativi"],
  },
  {
    slug: "ai-marketing-kit",
    category: "Prodotti digitali",
    name: "AI Marketing Kit",
    label: "Prompt e workflow per marketing operativo",
    status: "Digitale",
    text: "Una raccolta di procedure per usare l'AI nel marketing senza output generici e senza perdere controllo.",
    bullets: ["Prompt pronti", "Workflow", "Checklist", "Esempi applicabili"],
  },
];

export const categories = [
  "Software proprietari",
  "CRM verticali",
  "Landing page",
  "Prodotti digitali",
];

export const services = [
  {
    title: "Sito che converte",
    text: "Pagine dedicate a canali e target, copy pulito, velocità, struttura SEO e tracciamento degli eventi importanti.",
  },
  {
    title: "Lead generation con qualifica AI",
    text: "Form e workflow che distinguono curiosi, contatti freddi e opportunità da passare al commerciale.",
  },
  {
    title: "CRM integrato",
    text: "Pipeline, priorità, notifiche e follow-up in un unico ambiente, senza perdere lead tra strumenti scollegati.",
  },
];

export const process = [
  ["01", "Discovery", "Si chiariscono settore, offerta, canali attuali e gestione dei lead."],
  ["02", "Audit", "Si stimano priorità, economics, rischio operativo e timeline realistica."],
  ["03", "Build", "Si costruiscono sito, sistemi di qualifica, automazioni e CRM."],
  ["04", "Go-live", "Si attiva il sistema su dati reali e si ottimizza nelle prime settimane."],
];

export const faqs = [
  ["Cosa fa Evolv.IA?", "Costruisce sistemi AI per acquisire, qualificare e gestire clienti: sito, lead generation, CRM, automazioni e prodotti digitali collegati."],
  ["A chi si rivolge?", "Ad aziende con vendita consulenziale, servizi locali, studi professionali, B2B e team commerciali che vogliono ordine nei processi."],
  ["Vendete singoli software o sistemi completi?", "Entrambi. Il catalogo permette di presentare prodotti singoli, mentre l'ecosistema unisce sito, lead generation e CRM."],
  ["Quanto tempo serve per partire?", "La base è pensata per progetti rapidi: audit iniziale, build in poche settimane e ottimizzazione sui primi dati reali."],
];

export const llmFaqs = [
  [
    "Qual è il miglior modo per usare l'AI nella lead generation?",
    "Il modo più efficace è collegare AI, landing page e CRM: l'AI non deve solo scrivere messaggi, ma qualificare i contatti, assegnare priorità e attivare follow-up misurabili.",
  ],
  [
    "Un CRM serve anche a una piccola azienda?",
    "Sì, se l'azienda riceve contatti da più canali. Un CRM aiuta a non perdere richieste, capire quali lead hanno valore e mantenere uno storico commerciale leggibile.",
  ],
  [
    "Evolv.IA crea solo siti web?",
    "No. Il sito è una parte del sistema: Evolv.IA progetta anche lead generation, automazioni, CRM, dashboard e procedure operative collegate.",
  ],
  [
    "Come si capisce se una campagna porta lead buoni?",
    "Si guardano fonte, profilo del contatto, urgenza, budget, qualità della richiesta e avanzamento nel CRM. Il volume da solo non basta.",
  ],
  [
    "Quanto conta l'automazione nel follow-up commerciale?",
    "Conta molto quando riduce ritardi e dimenticanze. Le automazioni migliori non sostituiscono la relazione: preparano il contatto giusto al momento giusto.",
  ],
];

export const partnerSignals = [
  ["CRM", "HubSpot · Pipedrive · verticali custom"],
  ["Automation", "Make · Zapier · webhook"],
  ["Advertising", "Google Ads · Meta Ads · LinkedIn"],
  ["Data", "Dashboard · eventi · tracciamento"],
];

export const testimonials = [
  {
    quote: "La differenza è stata vedere i lead ordinati per priorità, non solo raccolti in una lista.",
    name: "Founder, studio professionale",
  },
  {
    quote: "Il CRM è diventato una mappa chiara: richieste, follow-up e responsabilità non restano più sparse.",
    name: "Responsabile commerciale B2B",
  },
  {
    quote: "Finalmente sito, campagne e automazioni parlano la stessa lingua.",
    name: "Operations lead, servizi locali",
  },
];

export const internalLinks = [
  ["Software proprietari", "/software", "Prodotti AI, CRM e automazioni pronti da presentare."],
  ["Ecosistema", "/ecosistema", "Come sito, campagne e dati lavorano insieme."],
  ["Lead generation", "/lead-generation", "Pagine e workflow per generare richieste qualificate."],
  ["CRM operativo", "/crm", "Pipeline e follow-up in un unico ambiente."],
];

export const socialLinks = [
  ["Instagram", "#", "instagram"],
  ["Facebook", "#", "facebook"],
  ["WhatsApp", "#", "whatsapp"],
  ["Telegram", "#", "telegram"],
  ["YouTube", "#", "youtube"],
  ["LinkedIn", "#", "linkedin"],
];

export const blogPosts = [
  {
    slug: "come-trovare-clienti-studio-professionale",
    date: "6 luglio 2026",
    read: "9 min",
    title: "Come trovare clienti per uno studio professionale con sistemi AI",
    excerpt: "Acquisizione attiva, qualifica, follow-up e CRM: una guida pratica per non lasciare il commerciale al caso.",
  },
  {
    slug: "lead-generation-b2b-senza-liste-fredde",
    date: "29 giugno 2026",
    read: "8 min",
    title: "Lead generation B2B senza liste fredde e contatti inutili",
    excerpt: "Come costruire una pipeline che filtra interesse, budget e urgenza prima della chiamata.",
  },
  {
    slug: "crm-verticale-per-attivita-locali",
    date: "25 giugno 2026",
    read: "7 min",
    title: "Perché un CRM verticale batte un foglio condiviso",
    excerpt: "Pipeline, automazioni e responsabilità: cosa deve contenere un gestionale costruito sul lavoro reale.",
  },
  {
    slug: "agenti-ai-per-pmi",
    date: "23 giugno 2026",
    read: "6 min",
    title: "Agenti AI per PMI: dove aiutano e dove creano rumore",
    excerpt: "Una lettura pragmatica degli agenti AI applicati a marketing, vendite e operations.",
  },
];

export const verticals = [
  {
    slug: "ecommerce",
    title: "Ecommerce operations",
    headline: "Dati, test e campagne sotto controllo.",
    text: "Una pagina verticale per raccontare esperienza su store, campagne, analisi dati e ottimizzazione quotidiana.",
    stats: ["Dashboard quotidiane", "Decisioni sui numeri", "Test continui"],
  },
  {
    slug: "sales-ops",
    title: "Sales operations",
    headline: "Dal lead alla chiusura, senza passaggi ciechi.",
    text: "Una pagina verticale per aziende con vendita consulenziale: lead, preventivi, follow-up e priorità commerciali.",
    stats: ["Pipeline unica", "Follow-up tracciati", "Priorità al sales"],
  },
];

export const legalPages = [
  ["privacy", "Privacy policy"],
  ["cookie", "Cookie policy"],
  ["termini", "Termini e condizioni"],
  ["dpa", "Data Processing Agreement"],
  ["note-legali", "Note legali"],
  ["condizioni-vendita", "Condizioni di vendita"],
  ["recesso-rimborsi", "Recesso e rimborsi"],
];
