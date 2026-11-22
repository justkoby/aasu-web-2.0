import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { STRATEGIC_PRIORITIES } from '@/data/homepage'
import { AASU_EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function StrategicPrioritiesSection() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [photoIndex, setPhotoIndex] = useState(0)

  const activePriority =
    STRATEGIC_PRIORITIES[selectedIndex] ?? STRATEGIC_PRIORITIES[0]
  const activePhoto =
    activePriority.photos[photoIndex] ?? activePriority.photos[0]

  const handleSelectPriority = (idx: number) => {
    setSelectedIndex(idx)
    setPhotoIndex(0)
  }

  return (
    <section
      id="priorities"
      aria-labelledby="priorities-heading"
      className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="priorities-heading"
            title="Seven Priorities Guiding Our Continental Work."
            description="Select a priority area to explore how AASU advances student rights, leadership and policy across Africa."
          />
        </Reveal>

        {/* Mobile & Tablet Horizontal Selector (< lg) */}
        <div
          role="tablist"
          aria-label="AASU Strategic Priorities"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:hidden"
        >
          {STRATEGIC_PRIORITIES.map((priority, idx) => {
            const isSelected = idx === selectedIndex
            return (
              <button
                key={priority.number}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectPriority(idx)}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 font-display text-xs font-medium transition-colors cursor-pointer',
                  isSelected
                    ? 'border-aasu-red bg-aasu-red text-aasu-white'
                    : 'border-border-subtle bg-surface-card text-ink hover:border-ink/40',
                )}
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aasu-white p-0.5">
                  <img
                    src={priority.iconPath}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="whitespace-nowrap">
                  {priority.number}. {priority.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Balanced Split Editorial Layout */}
        <div className="mt-6 grid items-start gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-8">
          {/* Desktop Selectable List of All 7 Official Priorities */}
          <div
            role="tablist"
            aria-label="AASU Strategic Priorities"
            className="hidden space-y-2 lg:col-span-5 lg:block"
          >
            {STRATEGIC_PRIORITIES.map((priority, idx) => {
              const isSelected = idx === selectedIndex
              return (
                <button
                  key={priority.number}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectPriority(idx)}
                  className={cn(
                    'group flex w-full items-center gap-3.5 rounded-2xl border px-4 py-3 text-left transition-all duration-200 cursor-pointer',
                    isSelected
                      ? 'border-aasu-red bg-surface-card shadow-xs'
                      : 'border-transparent bg-transparent hover:border-border-subtle hover:bg-surface-card/60',
                  )}
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-aasu-white p-1">
                    <img
                      src={priority.iconPath}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <span
                      className={cn(
                        'block font-display text-[11px] font-semibold tracking-[0.14em]',
                        isSelected ? 'text-aasu-red' : 'text-ink-muted',
                      )}
                    >
                      {priority.number}
                    </span>
                    <span
                      className={cn(
                        'mt-0.5 block font-display text-sm font-semibold leading-snug',
                        isSelected
                          ? 'text-aasu-red'
                          : 'text-ink-secondary group-hover:text-ink',
                      )}
                    >
                      {priority.title}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={cn(
                      'h-4 w-4 shrink-0 transition-all duration-200',
                      isSelected
                        ? 'text-aasu-red'
                        : 'text-ink-muted opacity-0 group-hover:opacity-100',
                    )}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>

          {/* Featured Photograph & Priority Detail Stage (Proportioned to Match Left Column) */}
          <div
            role="tabpanel"
            aria-label={activePriority.title}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-card shadow-xs">
              {/* Featured Photograph with Compact Overlay Thumbnails */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#101114]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activePriority.number}-${activePhoto.src}`}
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.4,
                      ease: AASU_EASE,
                    }}
                    className="h-full w-full object-cover object-top"
                  />
                </AnimatePresence>

                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101114]/90 via-[#101114]/40 to-transparent px-5 pb-3.5 pt-14"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-4 bottom-3.5 flex items-end justify-between gap-4 sm:inset-x-5">
                  <p className="line-clamp-1 text-xs font-medium text-neutral-200">
                    {activePhoto.caption}
                  </p>

                  {activePriority.photos.length > 1 && (
                    <div className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#101114]/70 p-1 backdrop-blur-xs">
                      {activePriority.photos.map((photo, idx) => {
                        const isCurrent = idx === photoIndex
                        return (
                          <button
                            key={photo.src}
                            type="button"
                            onClick={() => setPhotoIndex(idx)}
                            aria-label={`View photo ${idx + 1} for ${activePriority.title}`}
                            aria-pressed={isCurrent}
                            className={cn(
                              'h-9 w-12 overflow-hidden rounded-lg border-2 transition-all cursor-pointer',
                              isCurrent
                                ? 'border-aasu-red opacity-100'
                                : 'border-transparent opacity-65 hover:opacity-100',
                            )}
                          >
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="h-full w-full object-cover object-top"
                              loading="lazy"
                            />
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Compact Priority Detail Body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-aasu-white p-1">
                    <img
                      src={activePriority.iconPath}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <span className="font-display text-xs font-semibold tracking-[0.14em] text-aasu-red">
                      Priority {activePriority.number}
                    </span>
                    <h3 className="mt-0.5 font-display text-lg font-bold leading-snug text-ink sm:text-xl">
                      {activePriority.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {activePriority.shortDescription}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3.5">
                  <AppLink
                    href={activePriority.futureRoute}
                    className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink transition-colors hover:text-aasu-red"
                  >
                    <span>Explore {activePriority.title}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-aasu-red"
                      aria-hidden="true"
                    />
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
