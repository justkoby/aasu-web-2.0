import { useState } from 'react'
import { AlertCircle, Mail, Upload } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { PARTNERSHIP_TRACKS } from '@/data/contact'
import { usePageMeta } from '@/hooks'

const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5 MB
const ALLOWED_EXTS = ['.pdf', '.doc', '.docx']

export function PartnerWithAasuPage() {
  usePageMeta(
    'Partner With AASU',
    'Explore institutional collaboration, programme co-design and strategic partnership opportunities with the All-Africa Students Union.',
  )

  const [fileError, setFileError] = useState<string | null>(null)
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setFileError(null)
      setSelectedFileName(null)
      return
    }
    const lower = file.name.toLowerCase()
    const validExt = ALLOWED_EXTS.some((ext) => lower.endsWith(ext))
    if (!validExt) {
      setFileError('Only PDF, DOC or DOCX documents are permitted.')
      setSelectedFileName(null)
      return
    }
    if (file.size > MAX_FILE_BYTES) {
      setFileError('Supporting document must be 5 MB or smaller.')
      setSelectedFileName(null)
      return
    }
    setFileError(null)
    setSelectedFileName(file.name)
  }

  return (
    <>
      <InnerPageHero
        title="Partner With AASU"
        subtitle="Collaborate with the continental representative organisation of African students to advance education, skills, climate action and youth leadership."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
          { label: 'Partner With AASU' },
        ]}
        images={[
          {
            src: '/images/web/nels-breakout.webp',
            alt: 'International and African institutional partners collaborating with AASU in Ghana',
          },
          {
            src: '/images/web/cfs-panel.webp',
            alt: 'AASU and partner speakers at the Climate Forward Summit',
          },
        ]}
      />

      {/* Partnership Opportunities */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                title="Institutional Collaboration Across Africa"
                description="AASU partners with continental organisations, universities, governments, civil society and development agencies on measurable student-centred initiatives."
              />
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {PARTNERSHIP_TRACKS.map((track) => (
                  <article
                    key={track.title}
                    className="rounded-2xl border border-border-subtle bg-surface-card p-5"
                  >
                    <h3 className="font-display text-base font-bold text-ink">
                      {track.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                      {track.description}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05} className="lg:col-span-6">
              <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
                <img
                  src="/images/web/nels-consortium.webp"
                  alt="African and European consortium partners at the NELS Strategic Partners Meeting"
                  className="aspect-[4/3] w-full object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3.5 text-xs text-ink-secondary">
                  Consortium collaboration between AASU, African universities
                  and European partners.{' '}
                  <AppLink
                    href="/about/partners"
                    className="font-semibold text-aasu-red hover:underline"
                  >
                    View current partners
                  </AppLink>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Partnership Enquiry & Proposal Submission */}
      <section className="bg-surface-alt py-14 lg:py-18">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-ink">
              Partnership Enquiry &amp; Proposal Submission
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
                  Server-side intake pending activation:
                </strong>{' '}
                Proposals are not uploaded or stored through this staging
                preview. To submit a partnership proposal today, email the
                Office of the Secretary-General at{' '}
                <a
                  href="mailto:secgen@aasuonline.org?subject=AASU%20Partnership%20Proposal"
                  className="font-semibold text-aasu-red underline"
                >
                  secgen@aasuonline.org
                </a>{' '}
                (cc:{' '}
                <a
                  href="mailto:info@aasuonline.org"
                  className="font-semibold text-aasu-red underline"
                >
                  info@aasuonline.org
                </a>
                ).
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 space-y-4"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="partner-org"
                    className="block font-display text-xs font-semibold text-ink-secondary"
                  >
                    Organisation Name *
                  </label>
                  <input
                    id="partner-org"
                    type="text"
                    required
                    placeholder="Institution or organisation name"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="partner-contact"
                    className="block font-display text-xs font-semibold text-ink-secondary"
                  >
                    Contact Person *
                  </label>
                  <input
                    id="partner-contact"
                    type="text"
                    required
                    placeholder="Primary representative"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="partner-email"
                    className="block font-display text-xs font-semibold text-ink-secondary"
                  >
                    Contact Email *
                  </label>
                  <input
                    id="partner-email"
                    type="email"
                    required
                    placeholder="representative@organisation.org"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="partner-type"
                    className="block font-display text-xs font-semibold text-ink-secondary"
                  >
                    Partnership Type *
                  </label>
                  <select
                    id="partner-type"
                    defaultValue=""
                    required
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                  >
                    <option value="" disabled>
                      Select partnership category
                    </option>
                    <option value="institutional">
                      Institutional / Continental Cooperation
                    </option>
                    <option value="academic">
                      Academic / University Partnership
                    </option>
                    <option value="programme">
                      Joint Programme or Research
                    </option>
                    <option value="event">Summit / Event Collaboration</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="partner-summary"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Proposal Summary *
                </label>
                <textarea
                  id="partner-summary"
                  rows={4}
                  required
                  placeholder="Outline your proposed collaboration, objectives and timeline..."
                  className="mt-1.5 w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="partner-doc"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Optional Supporting Document (PDF, DOC or DOCX, max 5 MB)
                </label>
                <label
                  htmlFor="partner-doc"
                  className="mt-1.5 flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-xl border border-dashed border-border-subtle bg-surface px-4 py-2.5 text-xs text-ink-secondary hover:border-aasu-red"
                >
                  <Upload className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                  <span>
                    {selectedFileName ?? 'Validate a local concept note file...'}
                  </span>
                  <input
                    id="partner-doc"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
                {fileError && (
                  <p role="alert" className="mt-1.5 text-xs text-aasu-red">
                    {fileError}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled
                  aria-disabled="true"
                  className="inline-flex min-h-[44px] cursor-not-allowed items-center justify-center rounded-full bg-neutral-400/40 px-6 py-2.5 font-display text-xs font-semibold text-ink-muted"
                >
                  Proposal Upload Pending Backend Approval
                </button>
                <a
                  href="mailto:secgen@aasuonline.org?subject=AASU%20Partnership%20Proposal"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-aasu-red px-6 py-2.5 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Email secgen@aasuonline.org</span>
                </a>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}
