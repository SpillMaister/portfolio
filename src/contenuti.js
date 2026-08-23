/* ============================================================================

   CONTENUTI DEL SITO — è l'unico file da modificare.

   ── IMMAGINI ────────────────────────────────────────────────────────────
   1. Carica il file nella cartella  public/
   2. Scrivi il nome con la barra davanti:   file: '/tempesti-post-1.jpg'

   ── VIDEO (Vimeo) ───────────────────────────────────────────────────────
   1. Carica il video su Vimeo, impostalo su "Non elencato"
   2. Copia il numero dall'indirizzo:  vimeo.com/1234567890  →  1234567890
   3. Scrivilo qui:   vimeo: '1234567890'

   Finché un campo resta vuoto compare un riquadro tratteggiato.

   ============================================================================ */

export const ANAGRAFICA = {
  cognome: 'Intelisano',
  nome: 'Giuseppe',
  ruolo: ['Social Media Manager', '& Content Producer'],

  intro:
    'Gestisco la presenza digitale di aziende dalla strategia alla pubblicazione, su volumi alti e tempi stretti, con rapporto diretto con il cliente. Dirigo la produzione visiva quando serve: script, shooting, montaggio.',

  luogo: 'San Miniato ⇄ Milano',
  mail: 'spillmaister@gmail.com',
  telefono: '+39 392 233 8527',
  linkedin: 'https://www.linkedin.com/in/giuseppe-intelisano-633421212/',

  ritratto: { formato: '3-4', file: '/ritratto.jpg', alt: 'Giuseppe Intelisano', etichetta: 'Ritratto duotone' },

  cv: '',
}

/* ==========================================================================
   1 — SOCIAL MEDIA MANAGEMENT
   ========================================================================== */

export const SOCIAL = {
  titolo: ['Social media', 'management'],

  testo: [
    'Gestisco la comunicazione online delle aziende dall’inizio alla fine.',
    'Divido i contenuti per format, ognuno con un compito diverso: c’è quello che racconta la storia dell’azienda, quello che spiega una tecnologia, quello che porta avanti il prodotto. Messi insieme coprono tutti i punti che il brand deve presidiare, invece di ripetere sempre lo stesso messaggio.',
    'Penso i concept creativi dei format e dirigo gli shooting. La pubblicazione è automatizzata: programmo i piani editoriali su Metricool con Claude, e uso agenti GPT istruiti sul singolo cliente per scrivere caption e articoli nel suo tono di voce.',
    'Sulle campagne Meta costruisco la strategia partendo dal budget e dagli obiettivi: studio le user persona, imposto il funnel, scelgo i formati. E automatizzo anche il controllo: con Claude programmo routine che ogni mattina scaricano i contatti in Excel e mi avvisano quando budget o performance escono dalla strategia.',
  ],

  profili: [
    {
      nome: 'Conceria Tempesti',
      settore: 'Pelle conciata al vegetale dal 1946',
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
      settore: 'Luxury metal accessories for leather goods',
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
      settore: 'Unique artisan shoes, handmade in Italy since 1913',
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
    ruolo: 'Project management della campagna influencer',
    testo:
      'Ho coordinato 16 creator e il piano editoriale su sei mesi, con la campagna scandita sui momenti dell’anno: rientro a scuola, Black Friday, Natale. Il lavoro vero è stato tenere insieme due esigenze opposte: la voce dei creator, che funziona solo se non suona pubblicitaria, e i messaggi che il cliente doveva vedere passare. Ogni script è passato da lì prima di andare in produzione. Il canale TikTok l’abbiamo aperto e gestito da zero.',
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
  titolo: ['Live content', 'creation'],

  testo: [
    'Durante eventi e fiere quello che succede va raccontato mentre succede, non tre giorni dopo.',
    'Giro con telefono o camera, monto in CapCut sul posto e pubblico in pochi minuti: il contenuto esce mentre le persone sono ancora lì.',
  ],

  video: [
    { vimeo: '1220506291', etichetta: 'Live 1' },
    { vimeo: '1220506338', etichetta: 'Live 2' },
  ],
}

/* ==========================================================================
   3 — CREATIVE DIRECTION
   ========================================================================== */

export const CREATIVE = {
  titolo: ['Creative', 'direction'],

  testo: [
    'Progetti che nascono e si chiudono. Penso il concept, scrivo lo script, scelgo i professionisti e dirigo la produzione.',
  ],

  progetti: [
    {
      titolo: 'Organazoto',
      sottotitolo: 'Video corporate per il lancio della linea liquida',
      testo:
        'Un’azienda che dal 1972 produce fertilizzanti doveva presentare una nuova linea. Ho scelto di non usare il linguaggio del settore, niente grafici né rese né formule, e ho scritto il video come una lettera del CEO agli agricoltori. Il lancio del prodotto arriva solo alla fine, come conseguenza di quello che gli agricoltori hanno insegnato all’azienda in cinquant’anni.',
      ruolo: 'Concept, script, selezione di videomaker e voce, direzione della produzione. Prodotto anche in inglese e spagnolo.',
      video: { vimeo: '1220499621', formato: '16-9', etichetta: 'Video Organazoto' },
    },
    {
      titolo: 'Italven Pelli',
      sottotitolo: 'La bellezza dell’imperfezione',
      testo:
        'Le pelli non sono mai identiche tra loro. È un limite se le guardi come un prodotto industriale, è il motivo per cui sono uniche se cambi il punto di vista. Ho costruito il video su un parallelismo con le cose che ammiriamo proprio perché imperfette: la Torre di Pisa, la Sagrada Família, il kintsugi giapponese che ripara le ceramiche rotte con l’oro invece di nascondere la crepa.',
      ruolo: 'Concept, script, direzione della produzione.',
      video: { vimeo: '1220501401', formato: '16-9', etichetta: 'Video Italven Pelli' },
    },
    {
      titolo: 'Learning of Fashion',
      sottotitolo: 'Chiusura e lancio del progetto',
      testo:
        'Ho seguito la fase finale: ultime riprese delle videolezioni, messa online della piattaforma, stesura dei quiz di verifica. Poi l’evento di lancio, il presskit e il rapporto con le testate.',
      ruolo: '',
      link: { testo: 'learningoffashion.com', url: 'https://learningoffashion.com' },
      board: { formato: '16-9', file: '/board-lof.jpg', alt: 'Board del progetto Learning of Fashion', etichetta: 'Board Learning of Fashion', ingrandibile: true },
    },
    {
      titolo: 'Mangiare dev’essere un piacere',
      sottotitolo: 'Campagna di sensibilizzazione, BB&C Group',
      testo:
        'Le campagne sulle malattie rare hanno quasi tutte lo stesso tono grave. Questa parte dal presupposto opposto: l’esofagite eosinofila si racconta meglio facendo ridere. Edoardo Mecca, comico radiofonico, mette in scena quello che chi ne soffre fa davvero: frullare il cibo, annegarlo nelle salse. Bubu, finalista di MasterChef Italia, costruisce un menu pensato per la patologia. Le video-pillole dei medici e dell’associazione pazienti ESEO reggono la parte scientifica.',
      ruolo:
        'Ho supportato il team lungo tutto il progetto: proposte di casting per il comico e per lo chef, scrittura delle scenette, coordinamento con la casa di produzione e presenza sul set durante le riprese. Ho disegnato il logo della campagna e scritto parte dei testi.',
      link: { testo: 'mangiaredevessereunpiacere.it', url: 'https://mangiaredevessereunpiacere.it' },
      media: { formato: '16-9', file: '/mangiare.jpg', alt: 'Campagna Mangiare dev’essere un piacere', etichetta: 'Campagna Mangiare dev’essere un piacere' },
    },
  ],
}

/* ==========================================================================
   4 — NUMERI
   Compaiono a destra del testo di sezione (sotto, su telefono).
   Se una voce ha solo `numero`, esce solo quello.
   ========================================================================== */

export const TRAGUARDI = {
  social: [
    { numero: '+12', etichetta: 'Aziende seguite nella comunicazione online' },
    { numero: 'B2C e B2B', etichetta: 'Due mercati, due linguaggi' },
    { numero: 'AI', etichetta: 'Ottimizzazione dei processi di lavoro' },
  ],

  live: [
    { numero: '15 min', etichetta: 'Montaggio di una storia' },
    { numero: '1 ora', etichetta: 'Montaggio di un reel' },
    { numero: 'CapCut AI', etichetta: 'Automontaggio' },
  ],

  creative: [],

  piume: [
    { numero: '16', etichetta: 'Creator coordinati' },
    { numero: '264 mln', etichetta: 'Visualizzazioni della campagna' },
    { numero: '6 mesi', etichetta: 'Di campagna continuativa' },
  ],
}
