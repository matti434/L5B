import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="pt-5 mt-5 static-page px-3 px-md-4 pb-5">
      <div className="container py-4" style={{ maxWidth: '40rem' }}>
        <ScrollReveal variant="fadeUpSoft" className="d-block">
          <h1 className="display-4 text-white mb-3 section-heading-readable">
            Contacto
          </h1>
          <p className="text-readable mb-4">
            Escribinos y te respondemos a la brevedad. Este formulario es una
            demostración: en producción conectarías tu backend o servicio de email.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.08} className="d-block">
          {sent ? (
            <p className="text-readable static-page-card p-4 rounded-3 mb-0">
              ¡Gracias! Tu mensaje fue registrado (simulación).
            </p>
          ) : (
            <form
              className="static-page-card p-4 rounded-3"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="contact-name" className="form-label text-readable">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-control bg-dark text-light border-secondary catalog-search-input"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact-email" className="form-label text-readable">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-control bg-dark text-light border-secondary catalog-search-input"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact-msg" className="form-label text-readable">
                  Mensaje
                </label>
                <textarea
                  id="contact-msg"
                  className="form-control bg-dark text-light border-secondary catalog-search-input"
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn product-detail-cta px-4">
                Enviar
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </main>
  )
}
