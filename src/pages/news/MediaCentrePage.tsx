import {
  ArrowUpRight,
  Download,
  FileText,
  Mail,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { NewsMediaRelatedNav } from '@/components/layout/NewsMediaRelatedNav'
import { Reveal, SectionHeading } from '@/components/ui'
import { BRAND_LOGO_DOWNLOADS, PRESS_RESOURCES } from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'
import { cn } from '@/lib/utils'

export function MediaCentrePage() {
  usePageMeta(
    'Media Centre',
    'Official AASU press contacts, approved unchanged brand logos, institutional boilerplate and downloadable press reports.',
  )

  return (
    <>
      <InnerPageHero
        title="Media Centre"
        subtitle="Official press contacts, approved AASU logos, institutional facts and downloadable reports for journalists, broadcasters and partners."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: 'Media Centre' },
        ]}
        images={[
          {
            src: '/images/web/hero-asw.webp',
            alt: 'All-Africa Students Union press and institutional engagement',
          },
        ]}
      />

      {/* 1. Media Contacts & Press Enquiries */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                title="Media Contacts & Press Enquiries"
                description="For media interviews, accreditation, official statements and high-resolution event photography requests, please contact the AASU Press & Communications Desk."
              />

              <div className="mt-6 space-y-4 rounded-3xl border border-border-subtle bg-surface-card p-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-aasu-red" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-sm font-bold text-ink">
                      Official Press &amp; Information Channels
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <a
                        href="mailto:info@aasuonline.org?subject=Press%20%26%20Media%20Enquiry"
                        className="font-semibold text-aasu-red hover:underline"
                      >
                        info@aasuonline.org
                      </a>
                      <a
                        href="mailto:secgen@aasuonline.org?subject=Official%20Media%20Request"
                        className="font-semibold text-ink hover:text-aasu-red"
                      >
                        secgen@aasuonline.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-border-subtle pt-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-aasu-red" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-sm font-bold text-ink">
                      Secretariat Headquarters
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-secondary">
                      No. 10 Asante Mireku Avenue, Westlands, Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Institutional Boilerplate */}
            <Reveal delay={0.05} className="lg:col-span-6">
              <div className="rounded-3xl bg-[#101114] p-7 text-aasu-white">
                <h2 className="font-display text-xl font-bold text-aasu-white">
                  Institutional Boilerplate (For Press Use)
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#B7BBC3]">
                  Founded in 1972 in Kumasi, Ghana, the All-Africa Students
                  Union (AASU) is the principal continental representative
                  organisation of African students. Bringing together national
                  student unions and student organisations across North, West,
                  Central, East and Southern Africa, AASU advocates for students&apos;
                  rights, equitable access to quality education, leadership
                  capacity building and Pan-African solidarity.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-xs">
                  <div>
                    <dt className="text-neutral-400">Founded</dt>
                    <dd className="mt-0.5 font-display text-sm font-bold text-aasu-white">
                      1972 (Kumasi, Ghana)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Headquarters</dt>
                    <dd className="mt-0.5 font-display text-sm font-bold text-aasu-white">
                      Accra, Ghana
                    </dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Mandate Reach</dt>
                    <dd className="mt-0.5 font-display text-sm font-bold text-aasu-white">
                      54 African Countries · 5 Regions
                    </dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Current Administration</dt>
                    <dd className="mt-0.5 font-display text-sm font-bold text-aasu-white">
                      2026-2029 Executive Committee
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Official Logos & Brand Assets (Unchanged Originals) */}
      <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Official Logos & Brand Assets"
              description="Approved, unchanged All-Africa Students Union marks for press, partner publications and co-branded events."
            />
          </Reveal>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {BRAND_LOGO_DOWNLOADS.map((asset) => (
              <Reveal key={asset.id}>
                <article className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border-subtle bg-surface-card">
                  <div
                    className={cn(
                      'flex h-44 items-center justify-center p-8',
                      asset.darkPreview ? 'bg-[#101114]' : 'bg-aasu-white',
                    )}
                  >
                    <img
                      src={asset.preview}
                      alt={asset.title}
                      className="max-h-24 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">
                        {asset.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
                        {asset.description}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-4">
                      {asset.formats.map((fmt) => (
                        <a
                          key={fmt.label}
                          href={fmt.url}
                          download
                          className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-3.5 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
                        >
                          <Download className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{fmt.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 inline-flex items-start gap-2 text-xs text-ink-muted">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
            <span>
              Usage note: Do not distort, recolour, crop or alter the official
              AASU logo proportions. Official brand red is #CB3631 paired with
              black (#121212) and white (#FFFFFF).
            </span>
          </p>
        </Container>
      </section>

      {/* 3. Approved Media Resources */}
      <section className="bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Approved Media Resources"
              description="Verified official reports and institutional reference documents available for direct download."
            />
          </Reveal>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {PRESS_RESOURCES.map((res) => (
              <a
                key={res.id}
                href={res.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-3xl border border-border-subtle bg-surface-card p-6 transition-all hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-aasu-red">
                    <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                    {res.category} · {res.year}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-aasu-red">
                    {res.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                    {res.description}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-alt text-ink transition-colors group-hover:border-aasu-red group-hover:bg-aasu-red group-hover:text-aasu-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <NewsMediaRelatedNav currentPath="/news/media-centre" />
    </>
  )
}
