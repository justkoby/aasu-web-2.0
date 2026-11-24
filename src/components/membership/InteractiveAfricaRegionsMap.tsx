import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { AppLink } from '@/components/ui/AppLink'
import {
  AFRICA_REGION_PROFILES,
  getUnionsByRegion,
  type RegionSlug,
} from '@/data/membership'
import { cn } from '@/lib/utils'

interface InteractiveAfricaRegionsMapProps {
  initialRegion?: RegionSlug
  /** When true, clicking a map pin navigates straight to /membership/regions/:slug */
  navigateOnPinClick?: boolean
  darkSurface?: boolean
}

export function InteractiveAfricaRegionsMap({
  initialRegion = 'west-africa',
  navigateOnPinClick = false,
  darkSurface = true,
}: InteractiveAfricaRegionsMapProps) {
  const navigate = useNavigate()
  const [selectedSlug, setSelectedSlug] = useState<RegionSlug>(initialRegion)

  const selectedRegion =
    AFRICA_REGION_PROFILES.find((r) => r.slug === selectedSlug) ??
    AFRICA_REGION_PROFILES[1]
  const selectedUnions = getUnionsByRegion(selectedRegion.slug)

  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl border',
        darkSurface
          ? 'border-white/12 bg-[#101114] text-aasu-white'
          : 'border-border-subtle bg-surface-card text-ink',
      )}
    >
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Left: Interactive Africa Map (Desktop & Tablet) */}
        <div className="hidden md:block lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[380px]">
            <img
              src="/images/brand/africa-map.svg"
              alt="Interactive regional map of Africa showing North, West, Central, East and Southern Africa"
              className={cn(
                'h-full w-full object-contain p-4',
                darkSurface ? 'opacity-85 invert' : 'opacity-20',
              )}
            />

            {AFRICA_REGION_PROFILES.map((region) => {
              const isSelected = region.slug === selectedSlug
              const count = getUnionsByRegion(region.slug).length
              return (
                <button
                  key={region.slug}
                  type="button"
                  onClick={() => {
                    setSelectedSlug(region.slug)
                    if (navigateOnPinClick) {
                      navigate(`/membership/regions/${region.slug}`)
                    }
                  }}
                  onFocus={() => setSelectedSlug(region.slug)}
                  aria-pressed={isSelected}
                  aria-label={`${region.name}: ${count} verified member organisations`}
                  style={{ left: region.mapPin.x, top: region.mapPin.y }}
                  className={cn(
                    'group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full px-3 py-1.5 font-display text-xs font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-aasu-red focus:ring-offset-2 focus:ring-offset-[#101114]',
                    isSelected
                      ? 'z-20 scale-105 bg-aasu-red text-aasu-white'
                      : darkSurface
                        ? 'z-10 border border-white/25 bg-[#181A1F]/95 text-neutral-100 hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white'
                        : 'z-10 border border-border-subtle bg-surface text-ink hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white',
                  )}
                >
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full',
                        isSelected ? 'bg-aasu-white' : 'bg-aasu-red group-hover:bg-aasu-white',
                      )}
                      aria-hidden="true"
                    />
                    {region.shortName}
                  </span>
                </button>
              )
            })}
          </div>
          <p
            className={cn(
              'mt-2 text-center text-xs',
              darkSurface ? 'text-[#B7BBC3]' : 'text-ink-muted',
            )}
          >
            Select a region on the map or choose a region tab to explore verified member unions.
          </p>
        </div>

        {/* Right: Accessible Region Selector (Primary on Mobile, Companion on Desktop) */}
        <div className="lg:col-span-7">
          <div
            role="tablist"
            aria-label="Select an African region"
            className="flex flex-wrap gap-2"
          >
            {AFRICA_REGION_PROFILES.map((region) => {
              const isSelected = region.slug === selectedSlug
              return (
                <button
                  key={region.slug}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedSlug(region.slug)}
                  className={cn(
                    'min-h-[40px] cursor-pointer rounded-full px-4 py-2 font-display text-xs font-medium transition-colors',
                    isSelected
                      ? 'bg-aasu-red text-aasu-white'
                      : darkSurface
                        ? 'border border-white/15 bg-white/[0.04] text-neutral-200 hover:border-white/40 hover:text-aasu-white'
                        : 'border border-border-subtle bg-surface-alt text-ink-secondary hover:border-aasu-red/50 hover:text-ink',
                  )}
                >
                  {region.name}
                </button>
              )
            })}
          </div>

          <div
            className={cn(
              'mt-6 rounded-2xl border p-5 sm:p-6',
              darkSurface
                ? 'border-white/12 bg-white/[0.04]'
                : 'border-border-subtle bg-surface-alt',
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3
                  className={cn(
                    'font-display text-2xl font-bold',
                    darkSurface ? 'text-aasu-white' : 'text-ink',
                  )}
                >
                  {selectedRegion.name}
                </h3>
                <p
                  className={cn(
                    'mt-1 inline-flex items-center gap-1.5 text-xs',
                    darkSurface ? 'text-[#B7BBC3]' : 'text-ink-muted',
                  )}
                >
                  <MapPin
                    className="h-3.5 w-3.5 text-aasu-red"
                    aria-hidden="true"
                  />
                  <span>
                    Regional Office Hub: {selectedRegion.regionalOfficeCountry}{' '}
                    ({selectedRegion.regionalOfficeStatus})
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div>
                  <p className="font-display text-xl font-bold text-aasu-red">
                    {selectedUnions.length}
                  </p>
                  <p
                    className={cn(
                      'text-[11px]',
                      darkSurface ? 'text-[#B7BBC3]' : 'text-ink-muted',
                    )}
                  >
                    Verified Unions
                  </p>
                </div>
                <div
                  className={cn(
                    'h-8 w-px',
                    darkSurface ? 'bg-white/15' : 'bg-border-subtle',
                  )}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className={cn(
                      'font-display text-xl font-bold',
                      darkSurface ? 'text-aasu-white' : 'text-ink',
                    )}
                  >
                    {selectedRegion.countries.length}
                  </p>
                  <p
                    className={cn(
                      'text-[11px]',
                      darkSurface ? 'text-[#B7BBC3]' : 'text-ink-muted',
                    )}
                  >
                    Countries
                  </p>
                </div>
              </div>
            </div>

            <p
              className={cn(
                'mt-4 text-sm leading-relaxed',
                darkSurface ? 'text-neutral-200' : 'text-ink-secondary',
              )}
            >
              {selectedRegion.summary}
            </p>

            {/* Navigable Country List (Especially Clear on Mobile) */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {selectedRegion.countries.map((country) => (
                <AppLink
                  key={country.name}
                  href={`/membership/member-unions?region=${selectedRegion.slug}&country=${encodeURIComponent(country.name)}`}
                  className={cn(
                    'rounded-full px-3 py-1 text-xs transition-colors',
                    darkSurface
                      ? 'border border-white/12 bg-[#101114]/70 text-neutral-200 hover:border-aasu-red hover:text-aasu-white'
                      : 'border border-border-subtle bg-surface text-ink-secondary hover:border-aasu-red hover:text-ink',
                  )}
                >
                  {country.name}
                </AppLink>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              <AppLink
                href={`/membership/regions/${selectedRegion.slug}`}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
              >
                <span>Explore {selectedRegion.name}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </AppLink>
              <AppLink
                href={`/membership/member-unions?region=${selectedRegion.slug}`}
                className={cn(
                  'inline-flex min-h-[42px] items-center gap-2 rounded-full border px-5 py-2.5 font-display text-xs font-semibold transition-colors',
                  darkSurface
                    ? 'border-white/25 text-aasu-white hover:border-aasu-white hover:bg-white/10'
                    : 'border-border-subtle text-ink hover:border-aasu-red hover:text-aasu-red',
                )}
              >
                <span>Filter Directory ({selectedUnions.length})</span>
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
