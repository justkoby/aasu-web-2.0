import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { AppLink } from '@/components/ui/AppLink'
import {
  AFRICA_REGIONS,
  FEATURED_NEWS,
  FEATURED_PROGRAMMES,
  OFFICIAL_STATEMENTS,
  RECENT_NEWS,
  STRATEGIC_PRIORITIES,
  VERIFIED_OPPORTUNITIES,
} from '@/data/homepage'
import {
  getPublicPublications,
  PRIORITY_LABELS,
} from '@/data/publications'
import {
  DISCOVERY_FEATURED,
  DISCOVERY_QUICK_GROUPS,
  MEGA_MENU_CATEGORIES,
} from '@/data/navigation'
import { AASU_EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface SearchDiscoveryModalProps {
  onClose: () => void
}

interface IndexedItem {
  id: string
  category: string
  title: string
  subtitle?: string
  searchText?: string
  href: string
  external?: boolean
}

const SUGGESTED_QUERIES = [
  'Education Financing',
  'Green Skills',
  'Student Rights',
  'NELS',
  'Annual Report',
]

export function SearchDiscoveryModal({ onClose }: SearchDiscoveryModalProps) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const dialogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const indexedItems = useMemo<IndexedItem[]>(() => {
    const sitemapItems: IndexedItem[] = MEGA_MENU_CATEGORIES.flatMap((cat) =>
      cat.groups.flatMap((g) =>
        g.links.map((l) => ({
          id: `sitemap-${cat.id}-${l.label}`,
          category: cat.label,
          title: l.label,
          subtitle: l.description,
          href: l.href,
          external: l.external,
        })),
      ),
    )

    const priorityItems: IndexedItem[] = STRATEGIC_PRIORITIES.map((p) => ({
      id: `priority-${p.number}`,
      category: 'Strategic Priority',
      title: `${p.number}. ${p.title}`,
      subtitle: p.shortDescription,
      href: p.href,
    }))

    const programmeItems: IndexedItem[] = FEATURED_PROGRAMMES.map((p) => ({
      id: `programme-${p.id}`,
      category: 'Programme',
      title: p.title,
      subtitle: p.shortDescription,
      href: p.href,
    }))

    const newsItems: IndexedItem[] = [FEATURED_NEWS, ...RECENT_NEWS].map((n) => ({
      id: `news-${n.id}`,
      category: 'News & Media',
      title: n.title,
      subtitle: `${n.date} · ${n.category}`,
      href: n.href,
    }))

    const statementItems: IndexedItem[] = OFFICIAL_STATEMENTS.map((s) => ({
      id: `stmt-${s.id}`,
      category: 'Official Statement',
      title: s.title,
      subtitle: `${s.refNumber} · ${s.date}`,
      href: s.href,
    }))

    const oppItems: IndexedItem[] = VERIFIED_OPPORTUNITIES.map((o) => ({
      id: `opp-${o.id}`,
      category: o.type,
      title: o.title,
      subtitle: `${o.dateLabel} · ${o.locationOrMeta}`,
      href: o.href,
      external: o.external,
    }))

    const pubItems: IndexedItem[] = getPublicPublications().map((pub) => ({
      id: `pub-${pub.id}`,
      category: `Knowledge Hub · ${pub.subcategory}`,
      title: `${pub.title} (${pub.year})`,
      subtitle: pub.summary,
      searchText: [
        pub.keywords.join(' '),
        pub.publisher,
        pub.language,
        pub.relatedPriorityIds.map((id) => PRIORITY_LABELS[id] ?? id).join(' '),
      ].join(' '),
      href: `/knowledge-hub/publications/${pub.slug}`,
    }))

    const unionItems: IndexedItem[] = AFRICA_REGIONS.flatMap((region) =>
      region.unions.map((u) => ({
        id: `union-${region.id}-${u.name}`,
        category: `Member Union · ${region.name}`,
        title: u.name,
        subtitle: `${u.country} · ${u.membershipType}`,
        href: '#regional-explorer',
      })),
    )

    return [
      ...programmeItems,
      ...pubItems,
      ...newsItems,
      ...statementItems,
      ...oppItems,
      ...priorityItems,
      ...sitemapItems,
      ...unionItems,
    ]
  }, [])

  const trimmedQuery = query.trim().toLowerCase()

  const searchResults = useMemo(() => {
    if (!trimmedQuery) return []
    const tokens = trimmedQuery.split(/\s+/).filter(Boolean)
    return indexedItems
      .filter((item) => {
        const hay = `${item.title} ${item.category} ${item.subtitle ?? ''} ${item.searchText ?? ''}`.toLowerCase()
        return tokens.every((token) => hay.includes(token))
      })
      .slice(0, 8)
  }, [indexedItems, trimmedQuery])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!trimmedQuery || searchResults.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % searchResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) =>
        prev <= 0 ? searchResults.length - 1 : prev - 1,
      )
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      const selected = searchResults[activeIndex]
      if (selected) {
        if (selected.external || selected.href.endsWith('.pdf')) {
          window.open(selected.href, '_blank', 'noopener,noreferrer')
        } else {
          navigate(selected.href.startsWith('#') ? `/${selected.href}` : selected.href)
        }
        onClose()
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-aasu-black/65 px-3 py-4 backdrop-blur-xs sm:px-6 sm:py-8"
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="aasu-search-dialog-title"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.24, ease: AASU_EASE }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-border-subtle bg-surface-elevated shadow-[0_28px_70px_rgba(0,0,0,0.32)]"
      >
        <h2 id="aasu-search-dialog-title" className="sr-only">
          Search All-Africa Students Union
        </h2>

        {/* Top Mastercard-Inspired Search Bar */}
        <div className="flex items-center gap-3 border-b border-border-subtle bg-surface-card px-4 py-4 sm:gap-5 sm:px-8 sm:py-5">
          <a
            href="#top"
            onClick={onClose}
            className="hidden shrink-0 items-center sm:flex"
            aria-label="All-Africa Students Union Home"
          >
            <img
              src="/images/brand/aasu-symbol.png"
              alt="AASU"
              className="h-9 w-9 object-contain"
            />
          </a>

          <div className="relative flex flex-1 items-center rounded-full border-2 border-aasu-red bg-surface px-4 py-2.5 shadow-2xs focus-within:ring-2 focus-within:ring-aasu-red/25 sm:px-5 sm:py-3">
            <Search
              className="mr-3 h-4 w-4 shrink-0 text-aasu-red sm:h-5 sm:w-5"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIndex(-1)
              }}
              onKeyDown={handleInputKeyDown}
              placeholder="How can we help you today?"
              aria-label="Search AASU content"
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none sm:text-base"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActiveIndex(-1)
                  inputRef.current?.focus()
                }}
                className="ml-2 rounded-full p-1 text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink cursor-pointer"
                aria-label="Clear search query"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-card text-ink transition-colors hover:border-ink hover:bg-ink hover:text-surface cursor-pointer"
            aria-label="Close search"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Honest Local Prototype Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle bg-surface-alt px-5 py-2.5 text-[11px] text-ink-secondary sm:px-8">
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-aasu-red" aria-hidden="true" />
            <span>
              Local search prototype: searches verified AASU homepage, sitemap,
              member unions and 2026 publications.
            </span>
          </span>
          <span className="hidden text-ink-muted sm:inline">
            Press Esc to close
          </span>
        </div>

        {/* Discovery Body */}
        <div className="grid max-h-[72vh] gap-8 overflow-y-auto p-5 sm:p-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            {!trimmedQuery ? (
              <div>
                <h3 className="font-display text-sm font-semibold text-ink-muted">
                  What are you looking for?
                </h3>

                <div className="mt-5 space-y-6">
                  {DISCOVERY_QUICK_GROUPS.map((group) => (
                    <div key={group.category}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aasu-red">
                        {group.category}
                      </p>
                      <ul className="mt-2.5 space-y-1">
                        {group.links.map((item) => (
                          <li key={item.label}>
                            <AppLink
                              href={item.href}
                              external={item.external}
                              onClick={onClose}
                              className="block rounded-lg px-2.5 py-2 font-display text-sm font-semibold text-ink transition-colors hover:bg-surface-card hover:text-aasu-red"
                            >
                              {item.label}
                            </AppLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-sm font-semibold text-ink-muted">
                  {searchResults.length > 0
                    ? `Local matches (${searchResults.length})`
                    : 'No local matches found'}
                </h3>

                {searchResults.length === 0 ? (
                  <div className="mt-4 rounded-2xl border border-border-subtle bg-surface-card p-6">
                    <p className="font-display text-sm font-bold text-ink">
                      No indexed AASU items match &ldquo;{query}&rdquo;.
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
                      Try one of these verified AASU topics:
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {SUGGESTED_QUERIES.map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => {
                            setQuery(term)
                            setActiveIndex(-1)
                            inputRef.current?.focus()
                          }}
                          className="rounded-full border border-border-subtle px-3 py-1 text-xs font-medium text-ink transition-colors hover:border-aasu-red hover:text-aasu-red cursor-pointer"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ul
                    role="listbox"
                    aria-label="Search results"
                    className="mt-4 space-y-2"
                  >
                    {searchResults.map((item, idx) => (
                      <li
                        key={item.id}
                        role="option"
                        aria-selected={idx === activeIndex}
                      >
                        <AppLink
                          href={item.href}
                          external={item.external}
                          onClick={onClose}
                          className={cn(
                            'group block rounded-xl border p-3.5 transition-colors',
                            idx === activeIndex
                              ? 'border-aasu-red bg-surface-card'
                              : 'border-transparent bg-surface-card/85 hover:border-border-subtle hover:bg-surface-card',
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-aasu-red">
                                {item.category}
                              </span>
                              <p className="mt-0.5 font-display text-sm font-bold leading-snug text-ink group-hover:text-aasu-red">
                                {item.title}
                              </p>
                              {item.subtitle && (
                                <p className="mt-0.5 line-clamp-2 text-xs text-ink-secondary">
                                  {item.subtitle}
                                </p>
                              )}
                            </div>
                            <ArrowUpRight
                              className="mt-1 h-4 w-4 shrink-0 text-ink-muted group-hover:text-aasu-red"
                              aria-hidden="true"
                            />
                          </div>
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-display text-sm font-semibold text-ink-muted">
              Featured Content
            </h3>
            <div className="mt-4 space-y-4">
              {DISCOVERY_FEATURED.map((card) => (
                <AppLink
                  key={card.title}
                  href={card.href}
                  external={card.external}
                  onClick={onClose}
                  className="group block rounded-2xl border border-border-subtle bg-surface-card p-6 shadow-2xs transition-all duration-200 hover:border-ink/25 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-aasu-red">
                        {card.tag}
                      </span>
                      <h4 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                        {card.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                        {card.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                      aria-hidden="true"
                    />
                  </div>
                </AppLink>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
