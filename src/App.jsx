import { useEffect, useRef, useState } from 'react'
import { ANAGRAFICA, SOCIAL, LIVE, CREATIVE, TRAGUARDI } from './contenuti.js'

/* ============================================================================
   Non serve modificare questo file: testi e materiali stanno in contenuti.js
   ============================================================================ */

const ESTENSIONI_VIDEO = /\.(mp4|webm|mov|m4v)$/i

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
      <button className="lente-chiudi" onClick={chiudi} aria-label="Chiudi">✕</button>
      <img src={file} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

/* Immagine, video locale, video Vimeo o segnaposto. */
function Media({ dato, className = '' }) {
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
          aria-label={`Ingrandisci: ${alt || etichetta}`}
        >
          <img src={file} alt={alt} loading="lazy" decoding="async" />
          <span className="lente-segno" aria-hidden="true">Ingrandisci</span>
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

function Traguardi({ dati }) {
  if (!dati || dati.length === 0) return null
  return (
    <Appare className="traguardi">
      {dati.map((d) => (
        <div className="traguardo" key={d.etichetta}>
          <strong>{d.numero}</strong>
          <span>{d.etichetta}</span>
          {d.nota && <em>{d.nota}</em>}
        </div>
      ))}
    </Appare>
  )
}

function TestaSezione({ titolo, testo }) {
  return (
    <Appare>
      <div className="sezione-testa">
        <span className="punto" aria-hidden="true" />
        <h2 className="sezione-titolo">
          {titolo.map((riga, i) => (
            <span key={i}>{riga}</span>
          ))}
        </h2>
      </div>
      <div className="sezione-nota">
        {testo.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Appare>
  )
}

/* Un profilo social: reel e feed in alto, tre format sotto. */
function Profilo({ dato }) {
  const verticali = [...dato.video.map((v) => ({ ...v, formato: '9-16' })), dato.feed]

  return (
    <Appare className="profilo">
      <div className="profilo-testa">
        <h3 className="profilo-nome">{dato.nome}</h3>
        {dato.settore && <p className="profilo-settore">{dato.settore}</p>}
      </div>

      <div className="fila-verticali">
        {verticali.map((m, i) => (
          <Media key={i} dato={m} />
        ))}
      </div>

      <div className="fila-post">
        {dato.post.map((m, i) => (
          <Media key={i} dato={m} />
        ))}
      </div>
    </Appare>
  )
}

/* Progetto con board o video accanto al testo. */
function Progetto({ dato }) {
  const visual = dato.video || dato.board || dato.media

  return (
    <Appare className="progetto">
      <div className="progetto-testo">
        <h3 className="progetto-titolo">{dato.titolo}</h3>
        {dato.sottotitolo && <p className="progetto-sottotitolo">{dato.sottotitolo}</p>}
        <p>{dato.testo}</p>
        {dato.ruolo && <p className="progetto-ruolo">{dato.ruolo}</p>}
        {dato.link && (
          <p className="progetto-link">
            <a href={dato.link.url} target="_blank" rel="noreferrer">
              {dato.link.testo}
            </a>
          </p>
        )}
      </div>
      <Media dato={visual} />
    </Appare>
  )
}

function Barra({ a }) {
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
        <a href={`mailto:${a.mail}`} tabIndex={mostra ? 0 : -1}>Scrivimi</a>
      </div>
    </div>
  )
}

export default function App() {
  const a = ANAGRAFICA
  const telPulito = a.telefono.replace(/[^\d+]/g, '')

  return (
    <>
      <a className="salta" href="#contenuto">Vai al contenuto</a>
      <Barra a={a} />

      <header className="testata" id="inizio">
        <div className="wrap">
          <div className="testata-alto">
            <div className="colonna-foto">
              <div className="foto-blocco">
                <Media dato={a.ritratto} />
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

              <p className="intro">{a.intro}</p>

              <div className="recapiti occhiello">
                <span>{a.luogo}</span>
                <a href={`mailto:${a.mail}`}>{a.mail}</a>
                <a href={`tel:${telPulito}`}>{a.telefono}</a>
                {a.cv && <a href={a.cv} download>Scarica il CV</a>}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="contenuto">
        <section className="sezione" id="social">
          <div className="wrap">
            <TestaSezione titolo={SOCIAL.titolo} testo={SOCIAL.testo} />
            <Traguardi dati={TRAGUARDI.social} />

            <div className="profili">
              {SOCIAL.profili.map((p) => (
                <Profilo key={p.nome} dato={p} />
              ))}
            </div>

            <div className="progetti">
              <Progetto
                dato={{
                  titolo: SOCIAL.progetto.titolo,
                  sottotitolo: SOCIAL.progetto.ruolo,
                  testo: SOCIAL.progetto.testo,
                  board: SOCIAL.progetto.board,
                }}
              />
              {SOCIAL.progetto.reel?.length > 0 && (
                <Appare className="fila-verticali larga sotto-progetto">
                  {SOCIAL.progetto.reel.map((r, i) => (
                    <Media key={i} dato={r} />
                  ))}
                </Appare>
              )}
            </div>
          </div>
        </section>

        <section className="sezione" id="live">
          <div className="wrap">
            <TestaSezione titolo={LIVE.titolo} testo={LIVE.testo} />
            <Traguardi dati={TRAGUARDI.live} />
            <div className="fila-verticali larga">
              {LIVE.video.map((v, i) => (
                <Media key={i} dato={{ ...v, formato: '9-16' }} />
              ))}
            </div>
          </div>
        </section>

        <section className="sezione" id="creative">
          <div className="wrap">
            <TestaSezione titolo={CREATIVE.titolo} testo={CREATIVE.testo} />
            <Traguardi dati={TRAGUARDI.creative} />
            <div className="progetti">
              {CREATIVE.progetti.map((p) => (
                <Progetto key={p.titolo} dato={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="piede">
        <div className="wrap">
          <Appare>
            <h2 className="piede-titolo">Parliamone</h2>
            <div className="piede-righe">
              <a href={`mailto:${a.mail}`}>{a.mail}</a>
              <a href={`tel:${telPulito}`}>{a.telefono}</a>
              <a href={a.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
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
