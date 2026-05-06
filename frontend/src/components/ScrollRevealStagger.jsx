import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, viewportDefaults, transitions } from '../motion/revealConfig'

/**
 * Fila o bloque que anima hijos con motion + variants staggerItem / staggerItemSlideLeft.
 */
export default function ScrollRevealStagger({
  children,
  className,
  variants = staggerContainer,
  once = viewportDefaults.once,
  amount = viewportDefaults.amount,
  margin = viewportDefaults.margin,
  transitionPreset = 'smooth',
  style,
  ...rest
}) {
  const reduce = useReducedMotion()
  const base = transitions[transitionPreset] ?? transitions.smooth

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
      transition={base}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
