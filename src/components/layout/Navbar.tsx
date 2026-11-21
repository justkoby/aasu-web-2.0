import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { MegaMenuPanel } from '@/components/layout/MegaMenuPanel'
import { SearchDiscoveryModal } from '@/components/layout/SearchDiscoveryModal'
import { MEGA_MENU_CATEGORIES } from '@/data/navigation'
import { AASU_EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

const TABLET_CATEGORY_IDS = new Set(['about', 'what-we-do', 'membership', 'knowledge-hub'])

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null)

  const headerWrapperRef = useRef<HTMLDivElement>(null)
  const searchTriggerRef = useRef<HTMLButtonElement>(null)

  const activeCategory =
    MEGA_MENU_CATEGORIES.find((cat) => cat.id === activeCategoryId) ?? null

  const closeMegaMenu = useCallback(() => {
    setActiveCategoryId(null)
  }, [])

  const closeSearch = useCallback(() => {
    setSearchOpen(false)
    requestAnimationFrame(() => {
      searchTriggerRef.current?.focus()
    })
  }, [])

  const openSearch = useCallback(() => {
    setActiveCategoryId(null)
    setMobileOpen(false)
    setSearchOpen(true)
  }, [])

  // Track scroll position for floating pill -> compact sticky white bar transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mega-menu or mobile drawer on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeCategoryId) setActiveCategoryId(null)
        if (mobileOpen) setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [activeCategoryId, mobileOpen])

  // Close mega-menu on outside pointer click
  useEffect(() => {
    if (!activeCategoryId) return
    const onPointerDown = (e: MouseEvent) => {
      if (
        headerWrapperRef.current &&
        !headerWrapperRef.current.contains(e.target as Node)
      ) {
        setActiveCategoryId(null)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [activeCategoryId])

  // Lock body scroll when mobile full-screen menu is open
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const toggleCategory = (id: string) => {
    setActiveCategoryId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      {/* Fixed Overlay Navigation Shell — zero layout shift */}
      <div
        ref={headerWrapperRef}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'px-0 pt-0' : 'px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8',
        )}
      >
        <header
          className={cn(
            'mx-auto w-full transition-all duration-300',
            scrolled
              ? 'max-w-none rounded-none border-b border-neutral-200 bg-aasu-white/98 shadow-sm backdrop-blur-md'
              : 'max-w-7xl rounded-full border border-white/60 bg-aasu-white/90 shadow-[0_12px_36px_rgba(18,18,18,0.22)] backdrop-blur-md',
          )}
        >
          <nav
            aria-label="Primary Navigation"
            className={cn(
              'mx-auto flex items-center justify-between gap-3 transition-all duration-300',
              scrolled
                ? 'h-16 max-w-7xl px-4 sm:px-6 lg:px-8'
                : 'h-16 px-4 sm:h-[68px] sm:px-6',
            )}
          >
            {/* Official AASU Logo */}
            <a
              href="#top"
              onClick={closeMegaMenu}
              className="flex shrink-0 items-center"
              aria-label="All-Africa Students Union (AASU) Home"
            >
              <img
                src="/images/brand/aasu-logo-black.png"
                alt="All-Africa Students Union (AASU)"
                className={cn(
                  'w-auto transition-all duration-300',
                  scrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-11',
                )}
              />
            </a>

            {/* Desktop Navigation (xl+): All 9 sitemap destinations (Home + 7 expandable categories + Contact CTA) */}
            <ul className="hidden items-center gap-0.5 xl:flex">
              <li>
                <a
                  href="#top"
                  onClick={closeMegaMenu}
                  className="inline-flex items-center rounded-full px-3 py-2 text-[13px] font-semibold text-aasu-black transition-colors hover:bg-aasu-black/5 hover:text-aasu-red"
                >
                  Home
                </a>
              </li>

              {MEGA_MENU_CATEGORIES.map((category) => {
                const isOpen = activeCategoryId === category.id
                return (
                  <li key={category.id}>
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      aria-expanded={isOpen}
                      aria-controls={`mega-menu-${category.id}`}
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors cursor-pointer',
                        isOpen
                          ? 'bg-aasu-black text-aasu-white'
                          : 'text-aasu-black hover:bg-aasu-black/5 hover:text-aasu-red',
                      )}
                    >
                      <span>{category.label}</span>
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          isOpen && 'rotate-180 text-aasu-red',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Tablet Simplified Navigation (md to xl) */}
            <ul className="hidden items-center gap-1 md:flex xl:hidden">
              {MEGA_MENU_CATEGORIES.filter((cat) =>
                TABLET_CATEGORY_IDS.has(cat.id),
              ).map((category) => {
                const isOpen = activeCategoryId === category.id
                return (
                  <li key={category.id}>
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      aria-expanded={isOpen}
                      aria-controls={`mega-menu-${category.id}`}
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition-colors cursor-pointer',
                        isOpen
                          ? 'bg-aasu-black text-aasu-white'
                          : 'text-aasu-black hover:bg-aasu-black/5 hover:text-aasu-red',
                      )}
                    >
                      <span>{category.label}</span>
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          isOpen && 'rotate-180 text-aasu-red',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Right Controls: Circular Search + Red Contact CTA + Mobile/Tablet Menu */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <button
                ref={searchTriggerRef}
                type="button"
                onClick={openSearch}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-aasu-white text-aasu-black transition-colors hover:border-aasu-red hover:text-aasu-red cursor-pointer"
                aria-label="Open search and discovery"
                aria-haspopup="dialog"
                aria-expanded={searchOpen}
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#footer"
                onClick={closeMegaMenu}
                className="hidden items-center justify-center rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-bold tracking-tight text-aasu-white transition-colors hover:bg-aasu-red-dark sm:inline-flex"
              >
                Contact
              </a>

              <button
                type="button"
                onClick={() => {
                  setActiveCategoryId(null)
                  setMobileOpen((prev) => !prev)
                }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-aasu-white text-aasu-black transition-colors hover:border-aasu-black xl:hidden cursor-pointer"
                aria-label={
                  mobileOpen ? 'Close navigation menu' : 'Open navigation menu'
                }
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Menu className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </header>

        {/* Expandable Rounded Mega-Menu Panel (Desktop & Tablet) */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <MegaMenuPanel
              key={activeCategory.id}
              category={activeCategory}
              onClose={closeMegaMenu}
              scrolled={scrolled}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Subtle Dim Backdrop when Mega-Menu is Open */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeMegaMenu}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-aasu-black/25 backdrop-blur-[1px]"
          />
        )}
      </AnimatePresence>

      {/* Accessible Full-Screen Mobile & Tablet Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="region"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: AASU_EASE }}
            className="fixed inset-0 z-50 flex flex-col bg-aasu-white xl:hidden"
          >
            {/* Mobile Drawer Top Bar */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-200 px-4 sm:px-6">
              <a
                href="#top"
                onClick={() => setMobileOpen(false)}
                aria-label="All-Africa Students Union Home"
              >
                <img
                  src="/images/brand/aasu-logo-black.png"
                  alt="All-Africa Students Union (AASU)"
                  className="h-9 w-auto"
                />
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={openSearch}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-aasu-black hover:border-aasu-red hover:text-aasu-red cursor-pointer"
                  aria-label="Open search"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-aasu-black hover:border-aasu-black cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Mobile Sitemap Accordions */}
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
                <li>
                  <a
                    href="#top"
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 font-display text-base font-bold text-aasu-black hover:text-aasu-red"
                  >
                    Home
                  </a>
                </li>

                {MEGA_MENU_CATEGORIES.map((category) => {
                  const isExpanded = mobileExpandedId === category.id
                  return (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpandedId(isExpanded ? null : category.id)
                        }
                        aria-expanded={isExpanded}
                        className="flex w-full items-center justify-between py-4 text-left font-display text-base font-bold text-aasu-black hover:text-aasu-red cursor-pointer"
                      >
                        <span>{category.label}</span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 text-neutral-500 transition-transform duration-200',
                            isExpanded && 'rotate-180 text-aasu-red',
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: AASU_EASE }}
                            className="overflow-hidden"
                          >
                            <div className="mb-4 space-y-4 border-l-2 border-aasu-red pl-4">
                              {category.groups.map((group) => (
                                <div key={group.heading}>
                                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                    {group.heading}
                                  </p>
                                  <ul className="mt-1.5 space-y-1">
                                    {group.links.map((link) => (
                                      <li key={link.label}>
                                        <a
                                          href={link.href}
                                          target={
                                            link.external ? '_blank' : undefined
                                          }
                                          rel={
                                            link.external
                                              ? 'noopener noreferrer'
                                              : undefined
                                          }
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-1.5 text-sm font-medium text-neutral-700 hover:text-aasu-red"
                                        >
                                          {link.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#membership"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full border border-aasu-black px-5 py-3 font-display text-sm font-bold text-aasu-black transition-colors hover:bg-aasu-black hover:text-aasu-white"
                >
                  Explore Membership
                </a>
                <a
                  href="#footer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-aasu-red px-5 py-3 font-display text-sm font-bold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                >
                  Contact AASU
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mastercard-Inspired Discovery Search Modal (with Focus Trap) */}
      <AnimatePresence>
        {searchOpen && <SearchDiscoveryModal onClose={closeSearch} />}
      </AnimatePresence>
    </>
  )
}
