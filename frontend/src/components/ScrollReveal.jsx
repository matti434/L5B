import { motion, useReducedMotion } from 'framer-motion'
import {
  getRevealVariant,
  viewportDefaults,
  transitions,
} from '../motion/revealConfig'

/**
 * Contenedor reutilizable: reveal al entrar en viewport (Framer Motion whileInView).
 */
export default function ScrollReveal({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  once = viewportDefaults.once,
  amount = viewportDefaults.amount,
  margin = viewportDefaults.margin,
  transitionPreset = 'smooth',
  style,
  ...rest
}) {
  const reduce = useReducedMotion()
  const base = transitions[transitionPreset] ?? transitions.smooth
  const variants = getRevealVariant(variant)

  if (reduce) {
    return (
      <div className={className} style={style} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      transition={{ ...base, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
