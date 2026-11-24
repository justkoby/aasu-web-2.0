import { useState } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { DEPARTMENTAL_CONTACTS, SECRETARIAT_CONTACT } from '@/data/contact'
import { usePageMeta } from '@/hooks'

export function ContactPage() {
  usePageMeta(
    'Contact Us',
    'Connect with the All-Africa Students Union (AASU) Secretariat in Accra, Ghana. Official address, verified phone numbers, email channels and departmental contacts.',
  )

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [validationNotice, setValidationNotice] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setValidationNotice('Please complete all required fields before proceeding.')
      return
    }
    setValidationNotice(
      'Online server-side form submission is not yet connected to a live backend. Please send your enquiry directly to info@aasuonline.org or secgen@aasuonline.org using the verified contact buttons below.',
    )
  }

  return (
    <>
      <InnerPageHero
        title="Contact Us"
        subtitle="Connect with the All-Africa Students Union Secretariat in Accra, Ghana for institutional enquiries, partnerships, media requests and member support."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
        images={[
          {
            src: '/images/web/hero-asw.webp',
            alt: 'All-Africa Students Union representatives at continental forum',
          },
        ]}
      />

      {/* Quick Engagement Links */}
      <section className="border-b border-border-subtle bg-surface-alt py-5">
        <Container>
          <div className="flex flex-wrap items-center gap-2.5">
            <AppLink
              href="/contact"
              className="inline-flex min-h-[38px] items-center rounded-full bg-aasu-red px-4 py-1.5 font-display text-xs font-semibold text-aasu-white"
            >
              Contact Us
            </AppLink>
            <AppLink
              href="/contact/partner"
              className="inline-flex min-h-[38px] items-center rounded-full border border-border-subtle bg-surface-card px-4 py-1.5 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
            >
              Partner With AASU
            </AppLink>
            <AppLink
              href="/contact/student-support"
              className="inline-flex min-h-[38px] items-center rounded-full border border-border-subtle bg-surface-card px-4 py-1.5 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
            >
              Student Rights &amp; Support
            </AppLink>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left: Official Secretariat Details + Directions */}
            <div className="space-y-6 lg:col-span-5">
              <Reveal>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-7">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    AASU Secretariat
                  </h2>
                  <p className="mt-1.5 text-sm text-ink-secondary">
                    {SECRETARIAT_CONTACT.postalNote}
                  </p>

                  <div className="mt-6 space-y-5 border-t border-border-subtle pt-5 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      <div>
                        <p className="font-display font-semibold text-ink">
                          Headquarters Address
                        </p>
                        <p className="mt-0.5 text-ink-secondary">
                          {SECRETARIAT_CONTACT.address}
                        </p>
                        <a
                          href={SECRETARIAT_CONTACT.mapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 font-display text-xs font-semibold text-aasu-red hover:underline"
                        >
                          <span>Open Directions in Google Maps</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      <div className="space-y-1.5">
                        <p className="font-display font-semibold text-ink">
                          Verified Email Channels
                        </p>
                        {SECRETARIAT_CONTACT.emails.map((item) => (
                          <div key={item.address}>
                            <p className="text-xs text-ink-muted">
                              {item.label}
                            </p>
                            <a
                              href={`mailto:${item.address}`}
                              className="font-display font-semibold text-ink hover:text-aasu-red"
                            >
                              {item.address}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      <div>
                        <p className="font-display font-semibold text-ink">
                          Verified Telephone Lines
                        </p>
                        <div className="mt-1 flex flex-col gap-1">
                          {SECRETARIAT_CONTACT.phones.map((phone) => (
                            <a
                              key={phone.href}
                              href={phone.href}
                              className="font-display font-semibold text-ink hover:text-aasu-red"
                            >
                              {phone.display}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Map & Directions Preview Card */}
              <Reveal delay={0.05}>
                <div className="overflow-hidden rounded-3xl border border-border-subtle bg-[#101114] p-6 text-aasu-white">
                  <h3 className="font-display text-base font-bold text-aasu-white">
                    Secretariat Location (Westlands, Accra)
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#B7BBC3]">
                    Located at No. 10 Asante Mireku Avenue, Westlands, Accra,
                    Ghana. Visits and diplomatic delegations are received by
                    prior appointment through the Secretariat.
                  </p>
                  <a
                    href={SECRETARIAT_CONTACT.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-aasu-red px-4 py-2 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: General Enquiry Form (Honest Backend Status) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.04}>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    General Enquiry Form
                  </h2>

                  <div
                    role="status"
                    className="mt-4 flex items-start gap-3 rounded-2xl border border-aasu-red/30 bg-aasu-red/[0.06] p-4 text-xs leading-relaxed text-ink"
                  >
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                      aria-hidden="true"
                    />
                    <p>
                      <strong className="font-display font-semibold">
                        Online form delivery inactive:
                      </strong>{' '}
                      Server-side form processing is not yet connected in this
                      staging build. Please use our verified email channels{' '}
                      <a
                        href="mailto:info@aasuonline.org"
                        className="font-semibold text-aasu-red underline"
                      >
                        info@aasuonline.org
                      </a>{' '}
                      or{' '}
                      <a
                        href="mailto:secgen@aasuonline.org"
                        className="font-semibold text-aasu-red underline"
                      >
                        secgen@aasuonline.org
                      </a>{' '}
                      for confirmed receipt.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block font-display text-xs font-semibold text-ink-secondary"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block font-display text-xs font-semibold text-ink-secondary"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.org"
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block font-display text-xs font-semibold text-ink-secondary"
                      >
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="How can AASU assist you?"
                        className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block font-display text-xs font-semibold text-ink-secondary"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your enquiry..."
                        className="mt-1.5 w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                      />
                    </div>

                    {/* Honeypot Anti-Spam Field */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact-hp">Website</label>
                      <input
                        id="contact-hp"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {validationNotice && (
                      <p
                        role="alert"
                        className="rounded-xl border border-border-subtle bg-surface-alt p-3.5 text-xs text-ink-secondary"
                      >
                        {validationNotice}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="submit"
                        disabled
                        aria-disabled="true"
                        className="inline-flex min-h-[44px] cursor-not-allowed items-center justify-center rounded-full bg-neutral-400/40 px-6 py-2.5 font-display text-xs font-semibold text-ink-muted"
                      >
                        Online Submission Pending Backend Setup
                      </button>
                      <a
                        href={`mailto:info@aasuonline.org?subject=${encodeURIComponent(subject || 'General Enquiry via AASU Website')}`}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-aasu-red px-6 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span>Email Secretariat Directly</span>
                      </a>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Departmental Contacts */}
      <section className="bg-surface-alt py-14 lg:py-16">
        <Container>
          <SectionHeading
            title="Departmental & Institutional Contacts"
            description="Reach the appropriate AASU Secretariat desk directly."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTAL_CONTACTS.map((dept) => (
              <article
                key={dept.department}
                className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-5"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-ink">
                    {dept.department}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                    {dept.scope}
                  </p>
                </div>
                <a
                  href={`mailto:${dept.email}?subject=${encodeURIComponent(dept.department)}`}
                  className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-semibold text-aasu-red hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{dept.email}</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
