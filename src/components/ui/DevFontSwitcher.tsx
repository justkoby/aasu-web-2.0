import { Type } from 'lucide-react'
import { useFontExperiment } from '@/hooks'
import { cn } from '@/lib/utils'

export function DevFontSwitcher() {
  const { fontPair, setFontPair } = useFontExperiment()

  if (!import.meta.env.DEV) {
    return null
  }

  return (
    <aside
      aria-label="Development typography switcher"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border border-border-subtle bg-surface-card/95 p-1.5 shadow-lg backdrop-blur-md"
    >
      <span className="inline-flex items-center gap-1.5 pl-2.5 pr-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
        <Type className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
        <span className="hidden sm:inline">Font</span>
      </span>

      <button
        type="button"
        onClick={() => setFontPair('lufga')}
        aria-pressed={fontPair === 'lufga'}
        className={cn(
          'rounded-full px-3 py-1 font-display text-xs font-semibold transition-colors cursor-pointer',
          fontPair === 'lufga'
            ? 'bg-aasu-red text-aasu-white'
            : 'text-ink-secondary hover:text-ink',
        )}
      >
        Lufga + Inter
      </button>

      <button
        type="button"
        onClick={() => setFontPair('manrope')}
        aria-pressed={fontPair === 'manrope'}
        className={cn(
          'rounded-full px-3 py-1 font-display text-xs font-semibold transition-colors cursor-pointer',
          fontPair === 'manrope'
            ? 'bg-aasu-red text-aasu-white'
            : 'text-ink-secondary hover:text-ink',
        )}
      >
        Manrope + Inter
      </button>
    </aside>
  )
}
