/* ============================================================================

   CONTENUTI DEL SITO

   Questo è l'UNICO file che devi modificare.
   Non serve aprire gli altri.

   COME INSERIRE UN MATERIALE
   1. Metti il file nella cartella  public/
   2. Qui sotto, cerca la voce  file: ''  del punto giusto
   3. Scrivi il nome del file con la barra davanti, per esempio:
         file: '/piume.jpg'
         file: '/live-1.mp4'

   Immagini e video vengono riconosciuti in automatico dall'estensione.
   Finché  file  resta vuoto, al suo posto compare un riquadro tratteggiato.

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

  // Ritratto della testata. Usa la versione duotone del CV.
  ritratto: { formato: '3-4', file: '/ritratto.jpg', alt: 'Giuseppe Intelisano', etichetta: 'Ritratto duotone' },

  // CV in PDF. Metti il file in public/ e scrivi qui il nome.
  // Lascia '' se non vuoi il link di download.
  cv: '',
}

export const SEZIONI = [
  /* ------------------------------------------------------------------ */
  {
    id: 'social',
    titolo: ['Social media', 'management'],
    nota:
      'Seguo in parallelo i canali di oltre dodici aziende, tra concerie, industria, retail e servizi. Definisco il tono di voce e il posizionamento insieme al cliente, costruisco il piano editoriale, produco i contenuti e gestisco le campagne Meta leggendo i risultati per correggere la rotta.',

    // ATTENZIONE: nei prima/dopo copri i nomi dei clienti.
    // Scrivi il settore, non il marchio.
    colonne: 'tre',
    media: [
      { formato: '4-5', file: '', alt: '', etichetta: 'Prima / dopo — settore 1' },
      { formato: '4-5', file: '', alt: '', etichetta: 'Prima / dopo — settore 2' },
      { formato: '4-5', file: '', alt: '', etichetta: 'Prima / dopo — settore 3' },
    ],

    progetti: [
      {
        titolo: 'PiùMe',
        ruolo: 'Project Manager — campagna influencer',
        testo:
          'Coordinamento di 16 creator e del piano editoriale su sei mesi: date di uscita, approvazione degli script, mediazione con il cliente. Canale TikTok aperto e gestito da zero, dentro un riposizionamento del brand verso la Generazione Z.',
        numeri: ['264 mln visualizzazioni', '23 mln copertura', '+80% traffico al sito'],
        media: { formato: '16-9', file: '', alt: '', etichetta: 'Contenuti campagna PiùMe' },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'live',
    titolo: ['Live content', 'creation'],
    nota:
      'Giro con il telefono e monto sul posto: il contenuto esce mentre l’evento è ancora in corso, non tre giorni dopo. È il formato in cui sono più veloce ed è quello che preferisco.',

    colonne: 'tre',
    media: [
      { formato: '9-16', file: '', alt: '', etichetta: 'Video live 1' },
      { formato: '9-16', file: '', alt: '', etichetta: 'Video live 2' },
      { formato: '9-16', file: '', alt: '', etichetta: 'Video live 3' },
    ],

    progetti: [],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'direzione',
    titolo: ['Direzione', 'creativa'],
    nota:
      'Progetti che nascono e si chiudono: scrivo lo script, scelgo i professionisti, dirigo la produzione e rispondo del risultato finale.',

    colonne: 'due',
    media: [],

    progetti: [
      {
        titolo: 'Organazoto',
        ruolo: 'Direzione creativa — video corporate',
        testo:
          'Lancio della linea liquida di fertilizzanti raccontato senza il linguaggio dei numeri: il video è scritto come una lettera del CEO agli agricoltori. Script, casting di videomaker e voce, direzione della produzione. Prodotto anche in inglese e spagnolo per i mercati esteri.',
        numeri: [],
        media: { formato: '16-9', file: '', alt: '', etichetta: 'Video corporate Organazoto' },
      },
      {
        titolo: 'Learning of Fashion',
        ruolo: 'Chiusura e lancio del progetto',
        testo:
          'Piattaforma di formazione gratuita che trasmette il sapere artigianale della moda italiana alle nuove generazioni, finanziata da UE e Ministero della Cultura. Ultime riprese, messa online della piattaforma, stesura dei quiz di verifica. Evento di lancio, presskit e rapporto con le testate.',
        numeri: ['10+ ore di lezioni', '14 professionisti'],
        media: { formato: '3-4', file: '', alt: '', etichetta: 'Presskit Learning of Fashion' },
        link: { testo: 'learningoffashion.com', url: 'https://learningoffashion.com' },
      },
    ],
  },
]
