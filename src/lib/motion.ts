import type { Transition, Variants } from 'framer-motion'

export const AASU_EASE = [0.22, 1, 0.36, 1] as const

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: AASU_EASE,
}

export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}
