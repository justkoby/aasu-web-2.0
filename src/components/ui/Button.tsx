import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { AppLink } from '@/components/ui/AppLink'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'outlineLight' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-aasu-red text-aasu-white hover:bg-aasu-red-dark border border-transparent shadow-xs',
  dark:
    'bg-aasu-black text-aasu-white hover:bg-neutral-800 dark:bg-aasu-white dark:text-aasu-black dark:hover:bg-neutral-200 border border-transparent',
  outline:
    'bg-transparent text-ink border border-border-subtle hover:border-ink hover:bg-ink hover:text-surface',
  outlineLight:
    'bg-transparent text-aasu-white border border-aasu-white/45 hover:border-aasu-white hover:bg-aasu-white hover:text-aasu-black',
  ghost:
    'bg-transparent text-ink hover:text-aasu-red border border-transparent px-0',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-sm sm:text-base',
}

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props
    return (
      <AppLink href={href} className={classes} {...anchorProps}>
        {children}
      </AppLink>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
