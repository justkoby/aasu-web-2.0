export interface IcsEventInput {
  id: string
  title: string
  description: string
  location: string
  startIso: string // e.g. '2026-08-17T09:00:00Z'
  endIso: string
  url?: string
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

function formatIcsUtc(iso: string): string {
  const date = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  )
}

export function buildIcsContent(event: IcsEventInput): string {
  const nowStamp = formatIcsUtc(new Date().toISOString())
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//All-Africa Students Union//AASU Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}@aasuonline.org`,
    `DTSTAMP:${nowStamp}`,
    `DTSTART:${formatIcsUtc(event.startIso)}`,
    `DTEND:${formatIcsUtc(event.endIso)}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    `LOCATION:${escapeIcsText(event.location)}`,
  ]

  if (event.url) {
    lines.push(`URL:${event.url}`)
  }

  lines.push('END:VEVENT', 'END:VCALENDAR')
  return lines.join('\r\n')
}

export function downloadEventIcs(event: IcsEventInput, filenameSlug: string) {
  const content = buildIcsContent(event)
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' })
  const objectUrl = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = objectUrl
  anchor.download = `aasu-${filenameSlug}.ics`
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  URL.revokeObjectURL(objectUrl)
}
