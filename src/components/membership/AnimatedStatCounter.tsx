import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface AnimatedStatCounterProps {
  value: number
  suffix?: string
}

export function AnimatedStatCounter({
  value,
  suffix = '',
}: AnimatedStatCounterProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [displayValue, setDisplayValue] = useState(
    prefersReducedMotion ? value : 0,
  )

  useEffect(() => {
    if (!isInView) return
    if (prefersReducedMotion) {
      setDisplayValue(value)
      return
    }

    const durationMs = 900
    const start = performance.now()
    let frameId = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(value * eased))
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [isInView, prefersReducedMotion, value])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}
