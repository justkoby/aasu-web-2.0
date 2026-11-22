import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { AppLink } from '@/components/ui/AppLink'
import { FOOTER_LINKS } from '@/data/homepage'

type SocialId = (typeof FOOTER_LINKS.social)[number]['id']

function SocialBrandIcon({ id }: { id: SocialId }) {
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.13c-.3-.04-1.31-.13-2.49-.13-2.46 0-4.15 1.5-4.15 4.26v2.34H7.36v3.2h2.79V21h3.35Z" />
        </svg>
      )
    case 'x':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.45 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.9" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
        </svg>
      )
  }
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-[#101114] text-aasu-white"
    >
      <div className="h-1 w-full bg-aasu-red" />

      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Institutional Brand & Headquarters */}
          <div className="lg:col-span-4">
            <img
              src="/images/brand/aasu-logo-white.png"
              alt="All-Africa Students Union (AASU)"
              className="h-12 w-auto"
            />
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-aasu-white">
              All-Africa Students Union (AASU)
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#B7BBC3]">
              The continental representative organisation of African students
              since 1972.
            </p>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-[#B7BBC3]">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                  aria-hidden="true"
                />
                <span>
                  No. 10 Asante Mireku Avenue, Westlands, Accra, Ghana
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href="mailto:secgen@aasuonline.org"
                    className="transition-colors hover:text-aasu-white"
                  >
                    secgen@aasuonline.org
                  </a>
                  <a
                    href="mailto:info@aasuonline.org"
                    className="transition-colors hover:text-aasu-white"
                  >
                    info@aasuonline.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href="tel:+233552594294"
                    className="transition-colors hover:text-aasu-white"
                  >
                    +233 552 594 294
                  </a>
                  <a
                    href="tel:+233203927736"
                    className="transition-colors hover:text-aasu-white"
                  >
                    +233 203 927 736
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="sm:col-span-4 lg:col-span-2 lg:col-start-6">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B7BBC3]">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}>
                  <AppLink
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-aasu-white"
                  >
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div className="sm:col-span-4 lg:col-span-3">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B7BBC3]">
              Institutional
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.institutional.map((link) => (
                <li key={link.label}>
                  <AppLink
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-aasu-white"
                  >
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Official Social Channels (Recognisable Brand SVG Icons) */}
          <div className="sm:col-span-4 lg:col-span-2">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B7BBC3]">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <AppLink
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-aasu-white"
                  >
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>

            <h3 className="mt-7 font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B7BBC3]">
              Follow AASU
            </h3>
            <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
              {FOOTER_LINKS.social.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`AASU on ${item.label}`}
                  title={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-neutral-200 transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
                >
                  <SocialBrandIcon id={item.id} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#B7BBC3] sm:flex-row sm:items-center">
          <p>© 2026 All-Africa Students Union. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#footer" className="transition-colors hover:text-aasu-white">
              Privacy Policy
            </a>
            <a href="#footer" className="transition-colors hover:text-aasu-white">
              Terms of Use
            </a>
            <a href="#footer" className="transition-colors hover:text-aasu-white">
              Accessibility
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
