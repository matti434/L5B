import { useReducedMotion } from 'framer-motion'
import {
  getRevealVariant,
  viewportDefaults,
  transitions,
} from '../motion/revealConfig'

/**
 * Devuelve props listos para spread en <motion.* /> o indica motion reducido.
 * @param {object} options
 * @param {'fadeUp'|'fadeUpSoft'|'slideInLeft'|'slideInRight'|'scaleIn'} [options.variant]
 * @param {number} [options.delay]
 * @param {boolean} [options.once]
 * @param {number|'some'|'all'} [options.amount]
 * @param {string} [options.margin]
 * @param {'smooth'|'snappy'|'soft'} [options.transitionPreset]
 */
export function useScrollReveal(options = {}) {
  const reduce = useReducedMotion()
  const {
    variant = 'fadeUp',
    delay = 0,
    once = viewportDefaults.once,
    amount = viewportDefaults.amount,
    margin = viewportDefaults.margin,
    transitionPreset = 'smooth',
  } = options

  if (reduce) {
    return { reducedMotion: true, motionProps: null }
  }

  const base = transitions[transitionPreset] ?? transitions.smooth

  return {
    reducedMotion: false,
    motionProps: {
      variants: getRevealVariant(variant),
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once, amount, margin },
      transition: { ...base, delay },
    },
  }
}
