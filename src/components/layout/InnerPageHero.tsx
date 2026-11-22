import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { AppLink } from '@/components/ui/AppLink'
import { AASU_EASE } from '@/lib/motion'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroImageItem {
  src: string
  alt: string
}

interface InnerPageHeroProps {
  title: string
  subtitle: string
  breadcrumbs: BreadcrumbItem[]
  images: HeroImageItem[]
}

export function InnerPageHero({
  title,
  subtitle,
  breadcrumbs,
  images,
}: InnerPageHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const [imageIdx, setImageIdx] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return
    const timer = window.setInterval(() => {
      setImageIdx((prev) => (prev + 1) % images.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [prefersReducedMotion, images.length])

  const activeImage = images[imageIdx] ?? images[0]

  return (
    <section className="relative flex min-h-[54vh] items-end overflow-hidden bg-[#101114] text-aasu-white lg:min-h-[60vh]">
      {activeImage && (
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={activeImage.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.85,
              ease: AASU_EASE,
            }}
            className="absolute inset-0"
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="h-full w-full object-cover object-top"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#101114]/92 via-[#101114]/70 to-[#101114]/35"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/25 to-[#101114]/45"
              aria-hidden="true"
            />
          </motion.div>
        </AnimatePresence>
      )}

      <Container className="relative z-10 pb-12 pt-32 sm:pb-16 sm:pt-36">
        {/* Accessible Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-neutral-300">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1
              return (
                <li key={crumb.label} className="inline-flex items-center gap-1.5">
                  {idx > 0 && (
                    <ChevronRight
                      className="h-3.5 w-3.5 text-neutral-500"
                      aria-hidden="true"
                    />
                  )}
                  {isLast || !crumb.href ? (
                    <span
                      aria-current={isLast ? 'page' : undefined}
                      className="text-aasu-white"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <AppLink
                      href={crumb.href}
                      className="transition-colors hover:text-aasu-white"
                    >
                      {crumb.label}
                    </AppLink>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: AASU_EASE }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-aasu-white sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
            {subtitle}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
