import { useState } from 'react'
import { Check, Link2, Share2 } from 'lucide-react'

interface ShareBarProps {
  title: string
}

export function ShareBar({ title }: ShareBarProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      setCopied(false)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        })
      } catch {
        // User cancelled share sheet
      }
    } else {
      await handleCopyLink()
    }
  }

  const encodedUrl =
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={handleNativeShare}
        className="inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-3.5 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
      >
        <Share2 className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
        <span>Share</span>
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-3.5 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
            <span>Link Copied</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <a
        href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[38px] items-center rounded-full border border-border-subtle bg-surface-alt px-3.5 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
      >
        X
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[38px] items-center rounded-full border border-border-subtle bg-surface-alt px-3.5 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
      >
        LinkedIn
      </a>
    </div>
  )
}
