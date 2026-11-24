import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Moon, Search, Sun, X } from 'lucide-react'
import { MegaMenuPanel } from '@/components/layout/MegaMenuPanel'
import { SearchDiscoveryModal } from '@/components/layout/SearchDiscoveryModal'
import { AppLink } from '@/components/ui/AppLink'
import { MEGA_MENU_CATEGORIES } from '@/data/navigation'
import { useTheme } from '@/hooks'
import { AASU_EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { isDark, toggleTheme } = useTheme()
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  // Official logos swapped natively (no CSS filter inversion)
  const logoSrc = isDark
    ? '/images/brand/aasu-logo-white.png'
    : '/images/brand/aasu-logo-black.png'

  return (
    <>
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
              ? 'max-w-none rounded-none border-b border-border-subtle bg-surface/96 shadow-sm backdrop-blur-md'
              : 'max-w-[1320px] rounded-full border border-white/60 bg-aasu-white/92 shadow-[0_12px_36px_rgba(16,17,20,0.22)] backdrop-blur-md dark:border-white/15 dark:bg-[#181A1F]/92',
          )}
        >
          <nav
            aria-label="Primary Navigation"
            className={cn(
              'mx-auto flex items-center justify-between gap-4 transition-all duration-300',
              scrolled
                ? 'h-16 max-w-[1320px] px-4 sm:px-6 lg:px-8'
                : 'h-16 px-4 sm:h-[68px] sm:px-7',
            )}
          >
            {/* Official AASU Logo: compact width, exact proportions, links to Home */}
            <AppLink
              href="/"
              onClick={closeMegaMenu}
              className="flex shrink-0 items-center"
              aria-label="All-Africa Students Union (AASU) Home"
            >
              <img
                src={logoSrc}
                alt="All-Africa Students Union (AASU)"
                className={cn(
                  'w-auto shrink-0 object-contain transition-all duration-300',
                  scrolled ? 'h-8 sm:h-9' : 'h-8 sm:h-9',
                )}
              />
            </AppLink>

            {/* Desktop & Large Tablet Navigation (lg+, 1024px+): 4 spacious single-line categories */}
            <ul className="hidden items-center gap-2 font-display lg:flex xl:gap-4">
              {MEGA_MENU_CATEGORIES.map((category) => {
                const isOpen = activeCategoryId === category.id
                return (
                  <li key={category.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      aria-expanded={isOpen}
                      aria-controls={`mega-menu-${category.id}`}
                      className={cn(
                        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-medium tracking-normal transition-colors xl:text-sm cursor-pointer',
                        isOpen
                          ? 'bg-ink text-surface'
                          : 'text-ink hover:bg-ink/5 hover:text-aasu-red',
                      )}
                    >
                      <span>{category.label}</span>
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 shrink-0 transition-transform duration-200',
                          isOpen && 'rotate-180 text-aasu-red',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Right Action Controls: Search + Theme Toggle + Contact CTA + Mobile/Tablet Menu */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              <button
                ref={searchTriggerRef}
                type="button"
                onClick={openSearch}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-card text-ink transition-colors hover:border-aasu-red hover:text-aasu-red cursor-pointer"
                aria-label="Open search and discovery"
                aria-haspopup="dialog"
                aria-expanded={searchOpen}
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-card text-ink transition-colors hover:border-aasu-red hover:text-aasu-red cursor-pointer"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </button>

              <AppLink
                href="/contact"
                onClick={closeMegaMenu}
                className="hidden shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-aasu-red px-5 py-2.5 font-display text-[13.5px] font-medium tracking-tight text-aasu-white transition-colors hover:bg-aasu-red-dark md:inline-flex"
              >
                Contact
              </AppLink>

              <button
                type="button"
                onClick={() => {
                  setActiveCategoryId(null)
                  setMobileOpen((prev) => !prev)
                }}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-card text-ink transition-colors hover:border-ink lg:hidden cursor-pointer"
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

        {/* Expandable Rounded Mega-Menu Panel (Desktop 1024px+) */}
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
            className="fixed inset-0 z-40 bg-aasu-black/30 backdrop-blur-[1px]"
          />
        )}
      </AnimatePresence>

      {/* Accessible Full-Screen Mobile & Tablet Menu (< 1024px) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="region"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: AASU_EASE }}
            className="fixed inset-0 z-50 flex flex-col bg-surface lg:hidden"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border-subtle px-4 sm:px-6">
              <a
                href="#top"
                onClick={() => setMobileOpen(false)}
                aria-label="All-Africa Students Union Home"
              >
                <img
                  src={logoSrc}
                  alt="All-Africa Students Union (AASU)"
                  className="h-8 w-auto object-contain"
                />
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={openSearch}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-ink hover:border-aasu-red hover:text-aasu-red cursor-pointer"
                  aria-label="Open search"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-ink hover:border-aasu-red hover:text-aasu-red cursor-pointer"
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? (
                    <Sun className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Moon className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-ink hover:border-ink cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <ul className="divide-y divide-border-subtle border-y border-border-subtle">
                <li>
                  <AppLink
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 font-display text-base font-medium text-ink hover:text-aasu-red"
                  >
                    Home
                  </AppLink>
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
                        className="flex w-full items-center justify-between py-4 text-left font-display text-base font-medium text-ink hover:text-aasu-red cursor-pointer"
                      >
                        <span>{category.label}</span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 text-ink-muted transition-transform duration-200',
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
                                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                                    {group.heading}
                                  </p>
                                  <ul className="mt-1.5 space-y-1">
                                    {group.links.map((link) => (
                                      <li key={link.label}>
                                        <AppLink
                                          href={link.href}
                                          external={link.external}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-1.5 text-sm font-normal text-ink-secondary hover:text-aasu-red"
                                        >
                                          {link.label}
                                        </AppLink>
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
                <AppLink
                  href="/membership"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-ink px-5 py-3 font-display text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-surface"
                >
                  Explore Membership
                </AppLink>
                <AppLink
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-aasu-red px-5 py-3 font-display text-sm font-medium text-aasu-white transition-colors hover:bg-aasu-red-dark"
                >
                  Contact AASU
                </AppLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mastercard-Inspired Discovery Search Modal */}
      <AnimatePresence>
        {searchOpen && <SearchDiscoveryModal onClose={closeSearch} />}
      </AnimatePresence>
    </>
  )
}
