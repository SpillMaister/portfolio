import { useEffect, useRef, useState } from 'react'
import { ANAGRAFICA, SEZIONI } from './contenuti.js'

/* ============================================================================
   Non serve modificare questo file: tutti i testi e i materiali stanno
   in  src/contenuti.js
   ============================================================================ */

const ESTENSIONI_VIDEO = /\.(mp4|webm|mov|m4v)$/i

/* Mostra un'immagine, un video o — se il campo file è vuoto — un segnaposto. */
function Media({ dato }) {
  if (!dato) return null
  const { formato = '16-9', file, alt = '', etichetta = 'Materiale' } = dato

  if (!file) {
    return (
      <div className="media" data-ratio={formato}>
        <span className="media-etichetta">
          {etichetta}
          <span className="media-formato">{formato.replace('-', ':')}</span>
        </span>
      </div>
    )
  }

  const isVideo = ESTENSIONI_VIDEO.test(file)

  return (
    <div className="media pieno" data-ratio={formato}>
      {isVideo ? (
        <video src={file} autoPlay muted loop playsInline preload="metadata" aria-label={alt} />
      ) : (
        <img src={file} alt={alt} loading="lazy" decoding="async" />
      )}
    </div>
  )
}

/* Comparsa graduale allo scorrimento. */
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
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

function Progetto({ dato }) {
  return (
    <Appare className="progetto">
      <div>
        <h3 className="progetto-titolo">{dato.titolo}</h3>
        <p className="progetto-ruolo">{dato.ruolo}</p>
        <p className="progetto-testo">{dato.testo}</p>

        {dato.link && (
          <p className="progetto-link">
            <a href={dato.link.url} target="_blank" rel="noreferrer">
              {dato.link.testo}
            </a>
          </p>
        )}

        {dato.numeri?.length > 0 && (
          <p className="numeri">
            {dato.numeri.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </p>
        )}
      </div>

      <Media dato={dato.media} />
    </Appare>
  )
}

function Sezione({ dato }) {
  return (
    <section className="sezione" id={dato.id}>
      <div className="wrap">
        <Appare>
          <div className="sezione-testa">
            <span className="punto" aria-hidden="true" />
            <h2 className="sezione-titolo">
              {dato.titolo.map((riga, i) => (
                <span key={i}>{riga}</span>
              ))}
            </h2>
          </div>
          <p className="sezione-nota">{dato.nota}</p>
        </Appare>

        {dato.media?.length > 0 && (
          <Appare className={`griglia-media ${dato.colonne}`}>
            {dato.media.map((m, i) => (
              <Media key={i} dato={m} />
            ))}
          </Appare>
        )}

        {dato.progetti?.length > 0 && (
          <div className="progetti">
            {dato.progetti.map((p) => (
              <Progetto key={p.titolo} dato={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* Barra fissa che compare dopo la testata. */
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
        <a href={`mailto:${a.mail}`} tabIndex={mostra ? 0 : -1}>
          Scrivimi
        </a>
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
        {SEZIONI.map((s) => (
          <Sezione key={s.id} dato={s} />
        ))}
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
