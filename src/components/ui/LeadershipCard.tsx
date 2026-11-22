import { MapPin } from 'lucide-react'
import type { LeadershipProfile } from '@/data/about'

interface LeadershipCardProps {
  profile: LeadershipProfile
}

export function LeadershipCard({ profile }: LeadershipCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[4/4] overflow-hidden bg-surface-alt">
        <img
          src={profile.portrait}
          alt={`${profile.name}, ${profile.position}`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-aasu-red">
          {profile.region}
        </span>
        <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-ink">
          {profile.name}
        </h3>
        <p className="mt-1 text-sm font-medium leading-snug text-ink-secondary">
          {profile.position}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
            <span>{profile.country}</span>
          </span>
          <span className="font-display font-medium">{profile.term}</span>
        </div>
      </div>
    </article>
  )
}
