/**
 * Configuración central de scroll-reveal para el sitio.
 * Variantes coherentes: fade-up y slide-in con easing premium.
 */

export const viewportDefaults = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -10% 0px',
}

export const transitions = {
  /** Curva tipo “expo out” suave para reveals */
  smooth: {
    duration: 0.58,
    ease: [0.22, 1, 0.36, 1],
  },
  snappy: {
    duration: 0.42,
    ease: [0.4, 0, 0.2, 1],
  },
  soft: {
    duration: 0.72,
    ease: [0.16, 1, 0.3, 1],
  },
}

/** Variantes nombradas para <motion.* variants={...} /> */
export const revealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 44 },
    visible: { opacity: 1, y: 0 },
  },
  fadeUpSoft: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -52 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 52 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
}

/** Contenedor con stagger para listas (tarjetas, categorías) */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const staggerItemSlideLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
}

const variantKeys = new Set(Object.keys(revealVariants))

export function getRevealVariant(name) {
  if (variantKeys.has(name)) return revealVariants[name]
  return revealVariants.fadeUp
}

export const revealVariantNames = [
  'fadeUp',
  'fadeUpSoft',
  'slideInLeft',
  'slideInRight',
  'scaleIn',
]
