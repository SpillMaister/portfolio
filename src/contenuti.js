/* ============================================================================

   CONTENUTI DEL SITO — è l'unico file da modificare.

   ── BILINGUE ────────────────────────────────────────────────────────────
   I testi tradotti si scrivono così:   { it: 'ciao', en: 'hello' }
   Quello che NON si traduce (nomi di aziende, luoghi, numeri) resta
   una stringa semplice:                'Conceria Tempesti'

   ── IMMAGINI ────────────────────────────────────────────────────────────
   1. Carica il file nella cartella  public/
   2. Scrivi il nome con la barra davanti:   file: '/tempesti-post-1.jpg'

   ── VIDEO (Vimeo) ───────────────────────────────────────────────────────
   1. Carica il video su Vimeo, impostalo su "Non elencato"
   2. Copia il numero dall'indirizzo:  vimeo.com/1234567890  →  1234567890
   3. Scrivilo qui:   vimeo: '1234567890'

   ============================================================================ */

export const ANAGRAFICA = {
  cognome: 'Intelisano',
  nome: 'Giuseppe',
  ruolo: ['Social Media Manager', '& Content Producer'],

  intro: {
    it: 'Gestisco la presenza digitale di aziende dalla strategia alla pubblicazione, su volumi alti e tempi stretti, con rapporto diretto con il cliente. Dirigo la produzione visiva quando serve: script, shooting, montaggio.',
    en: 'I run the digital presence of companies from strategy to publishing, at high volume and on tight deadlines, working directly with the client. I direct the visual production when needed: script, shooting, editing.',
  },

  luogo: 'San Miniato ⇄ Milano',
  mail: 'spillmaister@gmail.com',
  telefono: '+39 392 233 8527',
  linkedin: 'https://www.linkedin.com/in/giuseppe-intelisano-633421212/',

  ritratto: { formato: '3-4', file: '/ritratto.jpg', alt: 'Giuseppe Intelisano', etichetta: 'Ritratto duotone' },

  cv: '',
}

/* Parole dell'interfaccia */
export const INTERFACCIA = {
  scrivimi: { it: 'Scrivimi', en: 'Get in touch' },
  parliamone: { it: 'Parliamone', en: 'Let’s talk' },
  saltaAlContenuto: { it: 'Vai al contenuto', en: 'Skip to content' },
  ingrandisci: { it: 'Ingrandisci', en: 'Enlarge' },
  scaricaCv: { it: 'Scarica il CV', en: 'Download CV' },
  profiloLinkedin: {
    it: 'Profilo LinkedIn (si apre in una nuova scheda)',
    en: 'LinkedIn profile (opens in a new tab)',
  },
}

/* ==========================================================================
   1 — SOCIAL MEDIA MANAGEMENT
   ========================================================================== */

export const SOCIAL = {
  titolo: { it: ['Social media', 'management'], en: ['Social media', 'management'] },

  testo: {
    it: [
      'Gestisco la comunicazione online delle aziende dall’inizio alla fine.',
      'Divido i contenuti per format, ognuno con un compito diverso: c’è quello che racconta la storia dell’azienda, quello che spiega una tecnologia, quello che porta avanti il prodotto. Messi insieme coprono tutti i punti che il brand deve presidiare, invece di ripetere sempre lo stesso messaggio.',
      'Penso i concept creativi dei format e dirigo gli shooting. La pubblicazione è automatizzata: programmo i piani editoriali su Metricool con Claude, e uso agenti GPT istruiti sul singolo cliente per scrivere caption e articoli nel suo tono di voce.',
      'Sulle campagne Meta costruisco la strategia partendo dal budget e dagli obiettivi: studio le user persona, imposto il funnel, scelgo i formati. E automatizzo anche il controllo: con Claude programmo routine che ogni mattina scaricano i contatti in Excel e mi avvisano quando budget o performance escono dalla strategia.',
    ],
    en: [
      'I handle a company’s online communication from beginning to end.',
      'I split content into formats, each with its own job: one tells the company’s story, one explains a technology, one pushes the product. Together they cover every point the brand needs to hold, instead of repeating the same message over and over.',
      'I come up with the creative concepts behind the formats and direct the shoots. Publishing is automated: I schedule editorial plans on Metricool with Claude, and I use GPT agents trained on each individual client to write captions and articles in their tone of voice.',
      'For Meta campaigns I build the strategy from the budget and the goals: I study the user personas, set up the funnel, choose the formats. I automate the monitoring too: with Claude I schedule routines that pull leads into Excel every morning and alert me when budget or performance drift away from the plan.',
    ],
  },

  profili: [
    {
      nome: 'Conceria Tempesti',
      settore: { it: 'Pelle conciata al vegetale dal 1946', en: 'Vegetable-tanned leather since 1946' },
      video: [{ vimeo: '1220505084', etichetta: 'Reel Tempesti' }],
      feed: { formato: '9-16', file: '/tempesti-feed.jpg', alt: 'Feed Instagram Conceria Tempesti', etichetta: 'Feed Tempesti' },
      post: [
        { formato: '1-1', file: '/tempesti-1.jpg', alt: 'Format 1, Conceria Tempesti', etichetta: 'Format 1' },
        { formato: '1-1', file: '/tempesti-2.jpg', alt: 'Format 2, Conceria Tempesti', etichetta: 'Format 2' },
        { formato: '1-1', file: '/tempesti-3.jpg', alt: 'Format 3, Conceria Tempesti', etichetta: 'Format 3' },
      ],
    },
    {
      nome: 'Fibel Group',
      settore: { it: 'Luxury metal accessories for leather goods', en: 'Luxury metal accessories for leather goods' },
      video: [{ vimeo: '1220502907', etichetta: 'Reel Fibel Group' }],
      feed: { formato: '9-16', file: '/fibel-feed.jpg', alt: 'Feed Instagram Fibel Group', etichetta: 'Feed Fibel Group' },
      post: [
        { formato: '1-1', file: '/fibel-1.jpg', alt: 'Format 1, Fibel Group', etichetta: 'Format 1' },
        { formato: '1-1', file: '/fibel-2.jpg', alt: 'Format 2, Fibel Group', etichetta: 'Format 2' },
        { formato: '1-1', file: '/fibel-3.jpg', alt: 'Format 3, Fibel Group', etichetta: 'Format 3' },
      ],
    },
    {
      nome: 'Harris Shoes 1913',
      settore: { it: 'Unique artisan shoes, handmade in Italy since 1913', en: 'Unique artisan shoes, handmade in Italy since 1913' },
      video: [{ vimeo: '1220503029', etichetta: 'Reel Harris Shoes' }],
      feed: { formato: '9-16', file: '/harris-feed.jpg', alt: 'Feed Instagram Harris Shoes', etichetta: 'Feed Harris Shoes' },
      post: [
        { formato: '1-1', file: '/harris-1.jpg', alt: 'Format 1, Harris Shoes', etichetta: 'Format 1' },
        { formato: '1-1', file: '/harris-2.jpg', alt: 'Format 2, Harris Shoes', etichetta: 'Format 2' },
        { formato: '1-1', file: '/harris-3.jpg', alt: 'Format 3, Harris Shoes', etichetta: 'Format 3' },
      ],
    },
  ],

  progetto: {
    titolo: 'PiùMe',
    ruolo: {
      it: 'Project management della campagna influencer',
      en: 'Project management of the influencer campaign',
    },
    testo: {
      it: 'Ho coordinato 16 creator e il piano editoriale su sei mesi, con la campagna scandita sui momenti dell’anno: rientro a scuola, Black Friday, Natale. Il lavoro vero è stato tenere insieme due esigenze opposte: la voce dei creator, che funziona solo se non suona pubblicitaria, e i messaggi che il cliente doveva vedere passare. Ogni script è passato da lì prima di andare in produzione. Il canale TikTok l’abbiamo aperto e gestito da zero.',
      en: 'I coordinated 16 creators and the editorial plan across six months, with the campaign built around the moments of the year: back to school, Black Friday, Christmas. The real work was holding together two opposite needs: the creators’ voice, which only works if it doesn’t sound like advertising, and the messages the client needed to see land. Every script went through me before going into production. We opened and ran the brand’s TikTok channel from scratch.',
    },
    board: { formato: '16-9', file: '/board-piume.jpg', alt: 'Board del progetto PiùMe', etichetta: 'Board PiùMe', ingrandibile: true },
    reel: [
      { vimeo: '1220516374', formato: '9-16', etichetta: 'Reel PiùMe 1' },
      { vimeo: '1220516397', formato: '9-16', etichetta: 'Reel PiùMe 2' },
      { vimeo: '1220516359', formato: '9-16', etichetta: 'Reel PiùMe 3' },
    ],
  },
}

/* ==========================================================================
   2 — LIVE CONTENT CREATION
   ========================================================================== */

export const LIVE = {
  titolo: { it: ['Live content', 'creation'], en: ['Live content', 'creation'] },

  testo: {
    it: [
      'Durante eventi e fiere quello che succede va raccontato mentre succede, non tre giorni dopo.',
      'Giro con telefono o camera, monto in CapCut sul posto e pubblico in pochi minuti: il contenuto esce mentre le persone sono ancora lì.',
    ],
    en: [
      'At events and trade fairs, what happens has to be told while it is happening, not three days later.',
      'I shoot on a phone or a camera, edit in CapCut on the spot and publish within minutes: the content goes out while people are still there.',
    ],
  },

  video: [
    { vimeo: '1220506291', etichetta: 'Live 1' },
    { vimeo: '1220506338', etichetta: 'Live 2' },
  ],
}

/* ==========================================================================
   3 — CREATIVE DIRECTION
   ========================================================================== */

export const CREATIVE = {
  titolo: { it: ['Creative', 'direction'], en: ['Creative', 'direction'] },

  testo: {
    it: ['Progetti che nascono e si chiudono. Penso il concept, scrivo lo script, scelgo i professionisti e dirigo la produzione.'],
    en: ['Projects with a beginning and an end. I come up with the concept, write the script, pick the professionals and direct the production.'],
  },

  progetti: [
    {
      titolo: 'Organazoto',
      sottotitolo: {
        it: 'Video corporate per il lancio della linea liquida',
        en: 'Corporate film for the launch of the liquid range',
      },
      testo: {
        it: 'Un’azienda che dal 1972 produce fertilizzanti doveva presentare una nuova linea. Ho scelto di non usare il linguaggio del settore, niente grafici né rese né formule, e ho scritto il video come una lettera del CEO agli agricoltori. Il lancio del prodotto arriva solo alla fine, come conseguenza di quello che gli agricoltori hanno insegnato all’azienda in cinquant’anni.',
        en: 'A company making fertilisers since 1972 had to introduce a new range. I chose not to use the language of the industry, no charts, no yields, no formulas, and wrote the film as a letter from the CEO to the farmers. The product launch only arrives at the end, as a consequence of what farmers have taught the company over fifty years.',
      },
      ruolo: {
        it: 'Concept, script, selezione di videomaker e voce, direzione della produzione. Prodotto anche in inglese e spagnolo.',
        en: 'Concept, script, casting of filmmaker and voice-over, production direction. Also produced in English and Spanish.',
      },
      video: { vimeo: '1220499621', formato: '16-9', etichetta: 'Video Organazoto' },
    },
    {
      titolo: 'Italven Pelli',
      sottotitolo: {
        it: 'La bellezza dell’imperfezione',
        en: 'The beauty of imperfection',
      },
      testo: {
        it: 'Le pelli non sono mai identiche tra loro. È un limite se le guardi come un prodotto industriale, è il motivo per cui sono uniche se cambi il punto di vista. Ho costruito il video su un parallelismo con le cose che ammiriamo proprio perché imperfette: la Torre di Pisa, la Sagrada Família, il kintsugi giapponese che ripara le ceramiche rotte con l’oro invece di nascondere la crepa.',
        en: 'No two hides are ever the same. That is a flaw if you look at them as an industrial product; it is exactly what makes them unique if you shift the point of view. I built the film around a parallel with the things we admire precisely because they are imperfect: the Leaning Tower of Pisa, the Sagrada Família, the Japanese kintsugi that mends broken ceramics with gold instead of hiding the crack.',
      },
      ruolo: {
        it: 'Concept, script, direzione della produzione.',
        en: 'Concept, script, production direction.',
      },
      video: { vimeo: '1220501401', formato: '16-9', etichetta: 'Video Italven Pelli' },
    },
    {
      titolo: 'Learning of Fashion',
      sottotitolo: {
        it: 'Chiusura e lancio del progetto',
        en: 'Closing and launching the project',
      },
      testo: {
        it: 'Ho seguito la fase finale: ultime riprese delle videolezioni, messa online della piattaforma, stesura dei quiz di verifica. Poi l’evento di lancio, il presskit e il rapporto con le testate.',
        en: 'I ran the final phase: last shoots of the video lessons, taking the platform live, writing the assessment quizzes. Then the launch event, the press kit and the relationship with the media.',
      },
      ruolo: '',
      link: { testo: 'learningoffashion.com', url: 'https://learningoffashion.com' },
      board: { formato: '16-9', file: '/board-lof.jpg', alt: 'Board del progetto Learning of Fashion', etichetta: 'Board Learning of Fashion', ingrandibile: true },
    },
    {
      titolo: 'Mangiare dev’essere un piacere',
      sottotitolo: {
        it: 'Campagna di sensibilizzazione, BB&C Group',
        en: 'Awareness campaign, BB&C Group',
      },
      testo: {
        it: 'Le campagne sulle malattie rare hanno quasi tutte lo stesso tono grave. Questa parte dal presupposto opposto: l’esofagite eosinofila si racconta meglio facendo ridere. Edoardo Mecca, comico radiofonico, mette in scena quello che chi ne soffre fa davvero: frullare il cibo, annegarlo nelle salse. Bubu, finalista di MasterChef Italia, costruisce un menu pensato per la patologia. Le video-pillole dei medici e dell’associazione pazienti ESEO reggono la parte scientifica.',
        en: 'Campaigns about rare diseases almost all share the same solemn tone. This one starts from the opposite premise: eosinophilic esophagitis is better told by making people laugh. Radio comedian Edoardo Mecca acts out what patients actually do: blending their food, drowning it in sauces. Bubu, a MasterChef Italia finalist, builds a menu designed around the condition. Short videos from doctors and from the ESEO patient association carry the scientific side.',
      },
      ruolo: {
        it: 'Ho supportato il team lungo tutto il progetto: proposte di casting per il comico e per lo chef, scrittura delle scenette, coordinamento con la casa di produzione e presenza sul set durante le riprese. Ho disegnato il logo della campagna e scritto parte dei testi.',
        en: 'I supported the team throughout the project: casting proposals for the comedian and the chef, writing the sketches, coordinating with the production company and being on set during the shoot. I designed the campaign logo and wrote part of the copy.',
      },
      link: { testo: 'mangiaredevessereunpiacere.it', url: 'https://mangiaredevessereunpiacere.it' },
      media: { formato: '16-9', file: '/mangiare.jpg', alt: 'Campagna Mangiare dev’essere un piacere', etichetta: 'Campagna Mangiare dev’essere un piacere' },
    },
  ],
}

/* ==========================================================================
   4 — NUMERI
   ========================================================================== */

export const TRAGUARDI = {
  social: [
    { numero: '+12', etichetta: { it: 'Aziende seguite nella comunicazione online', en: 'Companies whose online communication I run' } },
    { numero: 'B2C e B2B', etichetta: { it: 'Due mercati, due linguaggi', en: 'Two markets, two languages' } },
    { numero: 'AI', etichetta: { it: 'Ottimizzazione dei processi di lavoro', en: 'Workflow optimisation' } },
  ],

  live: [
    { numero: { it: '15 min', en: '15 min' }, etichetta: { it: 'Montaggio di una storia', en: 'To edit a story' } },
    { numero: { it: '1 ora', en: '1 hour' }, etichetta: { it: 'Montaggio di un reel', en: 'To edit a reel' } },
    { numero: 'CapCut AI', etichetta: { it: 'Automontaggio', en: 'Automated editing' } },
  ],

  creative: [],

  piume: [
    { numero: '16', etichetta: { it: 'Creator coordinati', en: 'Creators coordinated' } },
    { numero: { it: '264 mln', en: '264M' }, etichetta: { it: 'Visualizzazioni della campagna', en: 'Campaign impressions' } },
    { numero: { it: '6 mesi', en: '6 months' }, etichetta: { it: 'Di campagna continuativa', en: 'Of continuous campaign' } },
  ],
}
