import { useMemo } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getGameBySlug } from '../data/games'
import ScrollReveal from '../components/ScrollReveal'

export default function ProductDetail() {
  const { slug } = useParams()
  const game = useMemo(() => getGameBySlug(slug), [slug])

  if (!game) {
    return <Navigate to="/tienda" replace />
  }

  return (
    <main className="pt-5 mt-5 product-detail px-3 px-md-4 pb-5">
      <div className="container py-4">
        <ScrollReveal variant="fadeUpSoft" className="mb-3">
          <Link
            to="/tienda"
            className="text-decoration-none product-detail-back"
          >
            ← Volver al catálogo
          </Link>
        </ScrollReveal>

        <div className="row g-4 align-items-start">
          <ScrollReveal
            variant="slideInLeft"
            className="col-12 col-lg-5"
            transitionPreset="soft"
          >
            <div className="product-detail-media rounded-3 overflow-hidden border border-secondary product-detail-frame">
              <div className="product-detail-image-wrap">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fadeUp"
            delay={0.08}
            className="col-12 col-lg-7"
            transitionPreset="smooth"
          >
            <p className="text-uppercase small text-readable mb-2 product-detail-kicker">
              Ficha del producto
            </p>
            <h1 className="display-5 text-white mb-3 section-heading-readable">
              {game.title}
            </h1>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {game.tags.map((t) => (
                <span key={t} className="product-detail-tag">
                  {t}
                </span>
              ))}
            </div>
            <p className="lead text-readable mb-4 product-detail-desc">
              {game.description ??
                `${game.title}: experiencia destacada en ${game.tags.join(', ')}.`}
            </p>
            <div className="d-flex flex-wrap align-items-baseline gap-3 mb-4 product-detail-prices">
              <span className="product-detail-discount">{game.discount}</span>
              <span className="product-detail-old">{game.oldPrice}</span>
              <span className="product-detail-new">{game.newPrice}</span>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <button type="button" className="btn product-detail-cta px-4 py-2">
                Agregar al carrito
              </button>
              <Link
                to="/tienda"
                className="btn btn-outline-light px-4 py-2 product-detail-secondary"
              >
                Seguir comprando
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
