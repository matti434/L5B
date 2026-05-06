import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerItem } from '../motion/revealConfig'
import ScrollReveal from './ScrollReveal'

const containerClass = (variant) =>
  variant === 'tall' ? 'image-container2' : 'image-container'

/** Compatibilidad: objeto `game` del catálogo o props explícitas. */
function resolveProps(raw) {
  if (raw.game) {
    const g = raw.game
    return {
      id: g.id,
      slug: g.id,
      title: g.title,
      image: g.image,
      hoverGif: g.hoverGif,
      hoverClass: g.hoverClass,
      imageVariant: g.imageVariant ?? 'default',
      tags: g.tags ?? [],
      discount: g.discount,
      oldPrice: g.oldPrice,
      newPrice: g.newPrice,
      revealDelay: raw.revealDelay ?? 0,
      stagger: raw.stagger ?? false,
    }
  }
  return {
    id: raw.id,
    slug: raw.slug ?? raw.id,
    title: raw.title,
    image: raw.image,
    hoverGif: raw.hoverGif,
    hoverClass: raw.hoverClass,
    imageVariant: raw.imageVariant ?? 'default',
    tags: raw.tags ?? [],
    discount: raw.discount,
    oldPrice: raw.oldPrice,
    newPrice: raw.newPrice,
    revealDelay: raw.revealDelay ?? 0,
    stagger: raw.stagger ?? false,
  }
}

export default function GameCard(props) {
  const reduce = useReducedMotion()
  const {
    id,
    slug,
    title,
    image,
    hoverGif,
    hoverClass,
    imageVariant,
    tags,
    discount,
    oldPrice,
    newPrice,
    revealDelay,
    stagger,
  } = resolveProps(props)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const colClass = 'col-6 col-sm-4 col-md-3 col-lg-2'
  const productPath = `/producto/${encodeURIComponent(slug || id)}`

  const hoverLayerClass = hoverGif
    ? 'hover-video hover-video--gif'
    : `hover-video ${hoverClass ?? ''}`.trim()

  const hoverLayerStyle = hoverGif
    ? {
        backgroundImage: `url('${hoverGif}')`,
      }
    : undefined

  const inner = (
    <Link
      to={productPath}
      className="game-card-link text-decoration-none"
      aria-label={`Ver detalle: ${title}`}
    >
      <article className="game-card h-100">
        <div className={containerClass(imageVariant)}>
          <img
            src={image}
            alt={title}
            className="main-image"
            loading="lazy"
          />
          <div
            className={hoverLayerClass}
            style={hoverLayerStyle}
            aria-hidden
          />
        </div>
        <div className="game-info">
          <h5>{title}</h5>
          <div className="tags">
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="price-section">
            <button
              type="button"
              className="btn-cart"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
            <span className="discount">{discount}</span>
            <span className="old-price">{oldPrice}</span>
            <span className="new-price">{newPrice}</span>
          </div>
        </div>
      </article>
    </Link>
  )

  if (stagger && !reduce) {
    return (
      <motion.div className={colClass} variants={staggerItem}>
        {inner}
      </motion.div>
    )
  }

  return (
    <ScrollReveal className={colClass} delay={revealDelay} variant="fadeUp">
      {inner}
    </ScrollReveal>
  )
}
