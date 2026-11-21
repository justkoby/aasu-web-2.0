import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { FOOTER_LINKS } from '@/data/homepage'

export function Footer() {
  return (
    <footer id="footer" className="bg-aasu-black text-aasu-white">
      <div className="h-1 w-full bg-aasu-red" />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Institutional Brand & Headquarters */}
          <div className="lg:col-span-4">
            <img
              src="/images/brand/aasu-logo-white.png"
              alt="All-Africa Students Union (AASU)"
              className="h-14 w-auto"
            />
            <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.14em] text-aasu-white">
              All-Africa Students Union (AASU)
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-400">
              The continental representative organisation of African students
              since 1972.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
                    Headquarters
                  </span>
                  <span>
                    No. 10 Asante Mireku Avenue, Westlands – Accra, Ghana
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
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
                <div className="flex flex-col gap-1">
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
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-aasu-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div className="sm:col-span-4 lg:col-span-3">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
              Institutional
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {FOOTER_LINKS.institutional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-aasu-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Official Social Channels */}
          <div className="sm:col-span-4 lg:col-span-2">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
              Connect
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-aasu-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
              Official Channels
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-aasu-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-neutral-400 sm:flex-row sm:items-center">
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
