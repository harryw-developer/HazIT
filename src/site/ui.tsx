import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const PHONE = '07726249513'
export const PHONE_DISPLAY = '07726 249513'
export const EMAIL = 'hello@hazit.co.uk'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
}

export function Section({
  children,
  className = '',
  tone = 'stone',
}: {
  children: ReactNode
  className?: string
  tone?: 'stone' | 'deep' | 'white'
}) {
  const bg = tone === 'deep' ? 'bg-[var(--stone-deep)]' : tone === 'white' ? 'bg-white' : ''
  return <section className={`py-20 sm:py-24 ${bg} ${className}`}>{children}</section>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="site-eyebrow mb-4">{children}</p>
}

export function H2({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`site-display text-3xl sm:text-4xl ${className}`}>{children}</h2>
}

export function Lede({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl ${className}`}>{children}</p>
  )
}

type BtnProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'solid' | 'outline' | 'quiet'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-200 disabled:opacity-60'

const btnStyles = {
  solid:
    'bg-[var(--accent-deep)] text-white hover:bg-[var(--accent)] shadow-[0_1px_2px_rgba(23,46,107,0.3)] hover:shadow-[0_6px_20px_-6px_rgba(29,78,216,0.5)] hover:-translate-y-px',
  outline:
    'border border-[var(--line)] bg-white/70 text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent-deep)]',
  quiet: 'text-[var(--ink-soft)] hover:text-[var(--accent-deep)]',
}

export function Button({ children, to, href, variant = 'solid', className = '', ...rest }: BtnProps) {
  const cls = `${btnBase} ${btnStyles[variant]} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

/* ---------- Line icons: quiet, consistent, 1.5px stroke ---------- */

const svg = 'h-6 w-6'
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export function IconWifi() {
  return (
    <svg className={svg} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M2.5 8.5a15 15 0 0 1 19 0" />
      <path {...stroke} d="M5.5 12.2a10.5 10.5 0 0 1 13 0" />
      <path {...stroke} d="M8.6 15.9a6 6 0 0 1 6.8 0" />
      <circle cx="12" cy="19.5" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function IconLaptop() {
  return (
    <svg className={svg} viewBox="0 0 24 24" aria-hidden>
      <rect {...stroke} x="4" y="5" width="16" height="10.5" rx="1.6" />
      <path {...stroke} d="M2.5 19h19" />
    </svg>
  )
}

export function IconDevices() {
  return (
    <svg className={svg} viewBox="0 0 24 24" aria-hidden>
      <rect {...stroke} x="2.5" y="4.5" width="12.5" height="9.5" rx="1.5" />
      <rect {...stroke} x="16.5" y="9" width="5" height="10.5" rx="1.4" />
      <path {...stroke} d="M6.5 17.5h5" />
    </svg>
  )
}

export function IconTutorial() {
  return (
    <svg className={svg} viewBox="0 0 24 24" aria-hidden>
      <circle {...stroke} cx="8.5" cy="7" r="3" />
      <path {...stroke} d="M2.8 19c.7-3.4 2.9-5 5.7-5s5 1.6 5.7 5" />
      <path {...stroke} d="M16.5 5.5h5v6h-5z" />
    </svg>
  )
}

export function IconRemote() {
  return (
    <svg className={svg} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M6.5 16.5a4 4 0 0 1 .4-8 5.5 5.5 0 0 1 10.5 1.4 3.6 3.6 0 0 1-.4 6.6" />
      <path {...stroke} d="M12 12v8m0 0-2.5-2.5M12 20l2.5-2.5" />
    </svg>
  )
}

export function IconPhone() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
      <path
        {...stroke}
        d="M6.2 3.5h3l1.5 4-2 1.4a12.5 12.5 0 0 0 6.4 6.4l1.4-2 4 1.5v3a1.8 1.8 0 0 1-2 1.8A16.5 16.5 0 0 1 4.4 5.5a1.8 1.8 0 0 1 1.8-2Z"
      />
    </svg>
  )
}

export function IconMail() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
      <rect {...stroke} x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path {...stroke} d="m3.5 6.5 8.5 6.2 8.5-6.2" />
    </svg>
  )
}

export function IconArrow({ className = '' }: { className?: string }) {
  return (
    <svg className={`h-4 w-4 ${className}`} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />
    </svg>
  )
}

export function IconCheck() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[var(--accent)]" viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}
