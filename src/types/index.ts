export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface StatItem {
  value: string
  label: string
  needsConfirmation?: boolean
}
