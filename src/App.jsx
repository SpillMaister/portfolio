import { useEffect, useId, useRef, useState } from 'react'
import { ANAGRAFICA, INTERFACCIA, SOCIAL, LIVE, CREATIVE, TRAGUARDI } from './contenuti.js'

/* ============================================================================
   Non serve modificare questo file: testi e materiali stanno in contenuti.js
   ============================================================================ */

const ESTENSIONI_VIDEO = /\.(mp4|webm|mov|m4v)$/i

/* Sceglie la lingua di un valore.
   Stringa semplice = uguale in entrambe le lingue (nomi, luoghi, numeri). */
function t(valore, lingua) {
  if (valore == null) return ''
  if (typeof valore === 'string' || Array.isArray(valore)) return valore
  return valore[lingua] ?? valore.it ?? ''
}

/* Marchio LinkedIn, apre il profilo in una scheda nuova. */
function LinkedIn({ url, testo, etichetta }) {
  return (
    <a className="linkedin" href={url} target="_blank" rel="noreferrer" aria-label={etichetta}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
      {testo && <span>{testo}</span>}
    </a>
  )
}

/* Sovrapposizione a tutto schermo per le board. */
function Ingrandimento({ file, alt, chiudi }) {
  useEffect(() => {
    const onTasto = (e) => { if (e.key === 'Escape') chiudi() }
    document.addEventListener('keydown', onTasto)
    const scorrimento = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onTasto)
      document.body.style.overflow = scorrimento
    }
  }, [chiudi])

  return (
    <div className="lente" role="dialog" aria-modal="true" aria-label={alt} onClick={chiudi}>
      <button className="lente-chiudi" onClick={chiudi} aria-label="×">✕</button>
      <img src={file} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

/* Immagine, video locale, video Vimeo o segnaposto. */
function Media({ dato, lingua, className = '' }) {
  const [aperto, setAperto] = useState(false)
  if (!dato) return null
  const { formato = '16-9', file, vimeo, alt = '', etichetta = 'Materiale', ingrandibile } = dato

  if (ingrandibile && file) {
    return (
      <>
        <button
          type="button"
          className={`media pieno ingrandibile ${className}`.trim()}
          data-ratio={formato}
          onClick={() => setAperto(true)}
          aria-label={`${t(INTERFACCIA.ingrandisci, lingua)}: ${alt || etichetta}`}
        >
          <img src={file} alt={alt} loading="lazy" decoding="async" />
          <span className="lente-segno" aria-hidden="true">{t(INTERFACCIA.ingrandisci, lingua)}</span>
        </button>
        {aperto && <Ingrandimento file={file} alt={alt} chiudi={() => setAperto(false)} />}
      </>
    )
  }

  if (vimeo) {
    return (
      <div className={`media pieno ${className}`.trim()} data-ratio={formato}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeo}?title=0&byline=0&portrait=0&dnt=1`}
          title={alt || etichetta}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    )
  }

  if (!file) {
    return (
      <div className={`media ${className}`.trim()} data-ratio={formato}>
        <span className="media-etichetta">
          {etichetta}
          <span className="media-formato">{formato.replace('-', ':')}</span>
        </span>
      </div>
    )
  }

  return (
    <div className={`media pieno ${className}`.trim()} data-ratio={formato}>
      {ESTENSIONI_VIDEO.test(file) ? (
        <video src={file} autoPlay muted loop playsInline preload="metadata" aria-label={alt} />
      ) : (
        <img src={file} alt={alt} loading="lazy" decoding="async" />
      )}
    </div>
  )
}

function Appare({ children, className = '', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('visibile')
      return
    }
    const osservatore = new IntersectionObserver(
      ([voce]) => {
        if (voce.isIntersecting) {
          el.classList.add('visibile')
          osservatore.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    )
    osservatore.observe(el)
    return () => osservatore.disconnect()
  }, [])

  return (
    <div ref={ref} className={`appare ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

function Traguardi({ dati, lingua, className = '' }) {
  if (!dati || dati.length === 0) return null
  return (
    <div className={`traguardi ${className}`.trim()}>
      {dati.map((d, i) => (
        <div className="traguardo" key={i}>
          <strong>{t(d.numero, lingua)}</strong>
          {d.etichetta && <span>{t(d.etichetta, lingua)}</span>}
        </div>
      ))}
    </div>
  )
}

function TestaSezione({ titolo, testo, numeri, lingua }) {
  return (
    <Appare>
      <div className="sezione-testa">
        <span className="punto" aria-hidden="true" />
        <h2 className="sezione-titolo">
          {t(titolo, lingua).map((riga, i) => (
            <span key={i}>{riga}</span>
          ))}
        </h2>
      </div>

      <div className="sezione-corpo">
        <div className="sezione-nota">
          {t(testo, lingua).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Traguardi dati={numeri} lingua={lingua} />
      </div>
    </Appare>
  )
}

function Profilo({ dato, lingua }) {
  const verticali = [...dato.video.map((v) => ({ ...v, formato: '9-16' })), dato.feed]

  return (
    <Appare className="profilo">
      <div className="profilo-testa">
        <h3 className="profilo-nome">{dato.nome}</h3>
        {dato.settore && <p className="profilo-settore">{t(dato.settore, lingua)}</p>}
      </div>

      <div className="fila-verticali">
        {verticali.map((m, i) => (
          <Media key={i} dato={m} lingua={lingua} />
        ))}
      </div>

      <div className="fila-post">
        {dato.post.map((m, i) => (
          <Media key={i} dato={m} lingua={lingua} />
        ))}
      </div>
    </Appare>
  )
}

function Progetto({ dato, lingua }) {
  const visual = dato.video || dato.board || dato.media

  return (
    <Appare className="progetto">
      <div className="progetto-testo">
        <h3 className="progetto-titolo">{dato.titolo}</h3>
        {dato.sottotitolo && <p className="progetto-sottotitolo">{t(dato.sottotitolo, lingua)}</p>}
        <p>{t(dato.testo, lingua)}</p>
        {dato.ruolo && <p className="progetto-ruolo">{t(dato.ruolo, lingua)}</p>}
        {dato.link && (
          <p className="progetto-link">
            <a href={dato.link.url} target="_blank" rel="noreferrer">{dato.link.testo}</a>
          </p>
        )}
      </div>
      <Media dato={visual} lingua={lingua} />
    </Appare>
  )
}

/* Bandiere per il cambio lingua */
function BandieraItalia() {
  return (
    <svg viewBox="0 0 3 2" aria-hidden="true" focusable="false">
      <rect width="1" height="2" fill="#008C45" />
      <rect x="1" width="1" height="2" fill="#F4F5F0" />
      <rect x="2" width="1" height="2" fill="#CD212A" />
    </svg>
  )
}

function BandieraRegnoUnito() {
  const id = useId()
  const bordo = `${id}-bordo`
  const spicchi = `${id}-spicchi`
  return (
    <svg viewBox="0 0 60 30" aria-hidden="true" focusable="false">
      <clipPath id={bordo}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={spicchi}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${bordo})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${spicchi})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#FFF" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  )
}

function Lingue({ lingua, cambia, className = '' }) {
  return (
    <div className={`lingue ${className}`.trim()} role="group" aria-label="Lingua / Language">
      <button
        type="button"
        onClick={() => cambia('it')}
        className={lingua === 'it' ? 'attiva' : ''}
        aria-pressed={lingua === 'it'}
        title="Italiano"
        aria-label="Italiano"
      >
        <BandieraItalia />
      </button>
      <button
        type="button"
        onClick={() => cambia('en')}
        className={lingua === 'en' ? 'attiva' : ''}
        aria-pressed={lingua === 'en'}
        title="English"
        aria-label="English"
      >
        <BandieraRegnoUnito />
      </button>
    </div>
  )
}

function Barra({ a, lingua, cambia }) {
  const [mostra, setMostra] = useState(false)

  useEffect(() => {
    const onScroll = () => setMostra(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`barra${mostra ? ' mostra' : ''}`} aria-hidden={!mostra}>
      <a href="#inizio" className="barra-nome" tabIndex={mostra ? 0 : -1}>
        {a.cognome} {a.nome}
      </a>
      <div className="barra-recapiti occhiello">
        <Lingue lingua={lingua} cambia={cambia} />
        <a href={`mailto:${a.mail}`} tabIndex={mostra ? 0 : -1}>{t(INTERFACCIA.scrivimi, lingua)}</a>
      </div>
    </div>
  )
}

export default function App() {
  const a = ANAGRAFICA

  /* All'apertura sceglie la lingua dal browser: italiano se il browser è
     italiano, inglese in tutti gli altri casi. Poi decide chi visita. */
  const [lingua, setLingua] = useState(() => {
    if (typeof navigator === 'undefined') return 'it'
    return navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lingua
    document.title =
      lingua === 'it'
        ? 'Giuseppe Intelisano — Social Media Manager & Content Producer'
        : 'Giuseppe Intelisano — Social Media Manager & Content Producer'
  }, [lingua])

  const telPulito = a.telefono.replace(/[^\d+]/g, '')

  return (
    <>
      <a className="salta" href="#contenuto">{t(INTERFACCIA.saltaAlContenuto, lingua)}</a>
      <Barra a={a} lingua={lingua} cambia={setLingua} />

      <header className="testata" id="inizio">
        <div className="wrap">
          <Lingue lingua={lingua} cambia={setLingua} className="in-testata" />

          <div className="testata-alto">
            <div className="colonna-foto">
              <div className="foto-blocco">
                <Media dato={a.ritratto} lingua={lingua} />
                <span className="punto" aria-hidden="true" />
              </div>
            </div>

            <div className="colonna-testo">
              <div className="nome-riga">
                <h1 className="nome">
                  <span>{a.cognome}</span>
                  <span>{a.nome}</span>
                </h1>
                <p className="ruolo">
                  {a.ruolo.map((riga, i) => (
                    <span key={i}>{riga}</span>
                  ))}
                </p>
              </div>

              <p className="intro">{t(a.intro, lingua)}</p>

              <div className="recapiti occhiello">
                <span>{a.luogo}</span>
                <a href={`mailto:${a.mail}`}>{a.mail}</a>
                <a href={`tel:${telPulito}`}>{a.telefono}</a>
                {a.cv && <a href={a.cv} download>{t(INTERFACCIA.scaricaCv, lingua)}</a>}
                <LinkedIn url={a.linkedin} etichetta={t(INTERFACCIA.profiloLinkedin, lingua)} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="contenuto">
        <section className="sezione" id="social">
          <div className="wrap">
            <TestaSezione titolo={SOCIAL.titolo} testo={SOCIAL.testo} numeri={TRAGUARDI.social} lingua={lingua} />

            <div className="profili">
              {SOCIAL.profili.map((p) => (
                <Profilo key={p.nome} dato={p} lingua={lingua} />
              ))}
            </div>

            <div className="progetti">
              <Progetto
                lingua={lingua}
                dato={{
                  titolo: SOCIAL.progetto.titolo,
                  sottotitolo: SOCIAL.progetto.ruolo,
                  testo: SOCIAL.progetto.testo,
                  board: SOCIAL.progetto.board,
                }}
              />
              {SOCIAL.progetto.reel?.length > 0 && (
                <Appare className="blocco-reel">
                  <div className="fila-verticali larga">
                    {SOCIAL.progetto.reel.map((r, i) => (
                      <Media key={i} dato={r} lingua={lingua} />
                    ))}
                  </div>
                  <Traguardi dati={TRAGUARDI.piume} lingua={lingua} className="accanto" />
                </Appare>
              )}
            </div>
          </div>
        </section>

        <section className="sezione" id="live">
          <div className="wrap">
            <TestaSezione titolo={LIVE.titolo} testo={LIVE.testo} numeri={TRAGUARDI.live} lingua={lingua} />
            <div className="fila-verticali larga">
              {LIVE.video.map((v, i) => (
                <Media key={i} dato={{ ...v, formato: '9-16' }} lingua={lingua} />
              ))}
            </div>
          </div>
        </section>

        <section className="sezione" id="creative">
          <div className="wrap">
            <TestaSezione titolo={CREATIVE.titolo} testo={CREATIVE.testo} numeri={TRAGUARDI.creative} lingua={lingua} />
            <div className="progetti">
              {CREATIVE.progetti.map((p) => (
                <Progetto key={p.titolo} dato={p} lingua={lingua} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="piede">
        <div className="wrap">
          <Appare>
            <h2 className="piede-titolo">{t(INTERFACCIA.parliamone, lingua)}</h2>
            <div className="piede-righe">
              <a href={`mailto:${a.mail}`}>{a.mail}</a>
              <a href={`tel:${telPulito}`}>{a.telefono}</a>
              <LinkedIn url={a.linkedin} testo="LinkedIn" etichetta={t(INTERFACCIA.profiloLinkedin, lingua)} />
            </div>
            <p className="piede-nota">
              © {new Date().getFullYear()} {a.nome} {a.cognome}
            </p>
          </Appare>
        </div>
      </footer>
    </>
  )
}
