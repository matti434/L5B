import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function Nosotros() {
  return (
    <main className="pt-5 mt-5 static-page px-3 px-md-4 pb-5">
      <div className="container py-4" style={{ maxWidth: '48rem' }}>
        <ScrollReveal variant="fadeUpSoft" className="d-block">
          <h1 className="display-4 text-white mb-4 section-heading-readable">
            Nosotros
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.06} className="d-block">
          <p className="lead text-readable mb-4">
            En <strong className="text-white">Los 5 Bits</strong> reunimos ofertas
            de videojuegos con una curaduría pensada para jugadores que buscan
            calidad, buen precio y una experiencia de compra clara.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.1} className="d-block">
          <p className="text-readable mb-3">
            Nacimos con la idea de acercar títulos destacados y clásicos a la
            comunidad hispanohablante, con soporte cercano y catálogo actualizado.
          </p>
          <p className="text-readable mb-0">
            Si tenés consultas sobre pedidos o catálogo, podés escribirnos desde la
            sección de{' '}
            <Link to="/contacto" className="static-page-link">
              contacto
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </main>
  )
}
