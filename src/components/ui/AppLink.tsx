import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  external?: boolean
  children: ReactNode
}

export function AppLink({
  href,
  external,
  children,
  ...rest
}: AppLinkProps) {
  const isExternal =
    external ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.endsWith('.pdf')

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
        rel={href.startsWith('http') || href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  // Convert bare hash links (#section) into root-anchored routes (/#section)
  const target = href.startsWith('#') ? `/${href}` : href

  return (
    <Link to={target} {...rest}>
      {children}
    </Link>
  )
}
