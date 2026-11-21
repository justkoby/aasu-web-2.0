import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AASU_EASE, defaultViewport } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.45, delay, ease: AASU_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
