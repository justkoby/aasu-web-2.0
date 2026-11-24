import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { MediaAssetRecord } from '@/data/newsMedia'

interface MediaLightboxProps {
  assets: MediaAssetRecord[]
  activeIndex: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}

export function MediaLightbox({
  assets,
  activeIndex,
  onClose,
  onNavigate,
}: MediaLightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)
  const activeAsset = assets[activeIndex]

  const goPrev = () => {
    onNavigate((activeIndex - 1 + assets.length) % assets.length)
  }

  const goNext = () => {
    onNavigate((activeIndex + 1) % assets.length)
  }

  useEffect(() => {
    closeBtnRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + assets.length) % assets.length)
      } else if (event.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % assets.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, assets.length, onClose, onNavigate])

  if (!activeAsset) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activeAsset.caption}
      className="fixed inset-0 z-[90] flex flex-col bg-[#0A0B0E]/96 text-aasu-white backdrop-blur-md"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
        const delta = endX - touchStartX.current
        touchStartX.current = null
        if (Math.abs(delta) > 45) {
          if (delta > 0) goPrev()
          else goNext()
        }
      }}
    >
      {/* Top Controls */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5 sm:px-6">
        <span className="font-display text-xs font-semibold text-neutral-300">
          {activeIndex + 1} / {assets.length}
        </span>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close image lightbox"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-aasu-white transition-colors hover:border-aasu-red hover:bg-aasu-red"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Main Stage */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-4 sm:px-14">
        {assets.length > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photograph"
            className="absolute left-3 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-aasu-white transition-colors hover:border-aasu-red hover:bg-aasu-red sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <img
          src={activeAsset.fullSrc}
          alt={activeAsset.alt}
          className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />

        {assets.length > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photograph"
            className="absolute right-3 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-aasu-white transition-colors hover:border-aasu-red hover:bg-aasu-red sm:right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Caption & Credit */}
      <div className="border-t border-white/10 px-4 py-4 text-center sm:px-6">
        <p className="font-display text-sm font-semibold text-aasu-white">
          {activeAsset.caption}
        </p>
        <p className="mt-1 text-xs text-neutral-400">
          Credit: {activeAsset.credit} · Use arrow keys or swipe to browse
        </p>
      </div>
    </div>
  )
}
