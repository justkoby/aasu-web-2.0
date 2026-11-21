import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import type { MegaMenuCategory } from '@/data/navigation'
import { AASU_EASE } from '@/lib/motion'

interface MegaMenuPanelProps {
  category: MegaMenuCategory
  onClose: () => void
  scrolled: boolean
}

export function MegaMenuPanel({
  category,
  onClose,
  scrolled,
}: MegaMenuPanelProps) {
  return (
    <motion.div
      id={`mega-menu-${category.id}`}
      role="region"
      aria-label={`${category.label} navigation menu`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: AASU_EASE }}
      className={
        scrolled
          ? 'mx-auto mt-2 w-full max-w-7xl px-4 sm:px-6 lg:px-8'
          : 'mx-auto mt-3 w-full max-w-7xl'
      }
    >
      <div className="overflow-hidden rounded-[28px] border border-neutral-200/90 bg-[#F7F7F7] shadow-[0_24px_60px_rgba(18,18,18,0.18)]">
        {/* Subtle AASU Red Accent Bar */}
        <div className="h-1 w-full bg-aasu-red" />

        <div className="p-6 sm:p-8 lg:p-10">
          {/* Panel Header */}
          <div className="flex items-center justify-between gap-4 border-b border-neutral-200/90 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-aasu-red" aria-hidden="true" />
              <span className="font-display text-lg font-extrabold tracking-tight text-aasu-black">
                {category.label}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-aasu-white text-aasu-black transition-colors hover:border-aasu-black hover:bg-aasu-black hover:text-aasu-white cursor-pointer"
              aria-label={`Close ${category.label} menu`}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Two-Part Layout: Grouped Sitemap Links + Featured Content */}
          <div className="mt-7 grid gap-8 lg:grid-cols-12">
            {/* Grouped Navigation Columns */}
            <div
              className={
                category.groups.length > 1
                  ? 'grid gap-8 sm:grid-cols-2 lg:col-span-7'
                  : 'lg:col-span-6'
              }
            >
              {category.groups.map((group) => (
                <div key={group.heading}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {group.heading}
                  </h3>
                  <ul className="mt-4 space-y-1">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          onClick={onClose}
                          className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-aasu-white"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-display text-sm font-bold text-aasu-black transition-colors group-hover:text-aasu-red">
                              {link.label}
                            </span>
                            <ArrowUpRight
                              className="h-3.5 w-3.5 shrink-0 text-neutral-400 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red group-hover:opacity-100"
                              aria-hidden="true"
                            />
                          </div>
                          {link.description && (
                            <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">
                              {link.description}
                            </p>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Content Column */}
            <div
              className={
                category.groups.length > 1
                  ? 'lg:col-span-5'
                  : 'lg:col-span-6'
              }
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Featured Content
              </h3>
              <div className="mt-4 space-y-3.5">
                {category.featured.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    onClick={onClose}
                    className="group block rounded-2xl border border-neutral-200/80 bg-aasu-white p-5 transition-all duration-200 hover:border-aasu-black/25 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-aasu-red">
                          {card.tag}
                        </span>
                        <h4 className="mt-1.5 font-display text-base font-bold leading-snug text-aasu-black transition-colors group-hover:text-aasu-red">
                          {card.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
                          {card.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
