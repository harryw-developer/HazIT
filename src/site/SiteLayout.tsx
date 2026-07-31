import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button, Container, EMAIL, IconMail, IconPhone, PHONE, PHONE_DISPLAY } from './ui'

const LOGO =
  'https://lgxwgsiehprplflawjqd.supabase.co/storage/v1/object/public/branding/haz-it-logo.png'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-[var(--stone)]/92 backdrop-blur transition-colors duration-300 ${
        scrolled ? 'border-[var(--line)] shadow-[0_1px_12px_rgba(23,26,31,0.06)]' : 'border-transparent'
      }`}
    >
      <Container
        className={`flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? 'h-24' : 'h-36 sm:h-40'
        }`}
      >
        <Link to="/" className="flex items-center gap-3" aria-label="HazIT home">
          <img
            src={LOGO}
            alt=""
            className={`w-auto object-contain transition-[height] duration-300 ${
              scrolled ? 'h-16 sm:h-20' : 'h-28 sm:h-32'
            }`}
          />
          <span className="sr-only">HazIT</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `text-[15px] transition-colors ${
                  isActive
                    ? 'font-semibold text-[var(--ink)]'
                    : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/portal" variant="outline">
            Client login
          </Button>
          <Button href={`tel:${PHONE}`}>
            <IconPhone /> {PHONE_DISPLAY}
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--stone)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-lg ${
                    isActive ? 'bg-white font-semibold text-[var(--ink)]' : 'text-[var(--ink-soft)]'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href={`tel:${PHONE}`}>
                <IconPhone /> {PHONE_DISPLAY}
              </Button>
              <Button to="/portal" variant="outline">
                Client login
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--stone-deep)]">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={LOGO} alt="HazIT" className="h-28 w-auto object-contain" />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--ink-soft)]">
              Friendly, local tech support. Based in Bear Flat, Bath, UK — evenings and weekends,
              when you're actually home.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[var(--ink)]">
              Services
            </h3>
            <ul className="space-y-2 text-[15px] text-[var(--ink-soft)]">
              <li><Link to="/services" className="hover:text-[var(--accent-deep)]">WiFi and networking</Link></li>
              <li><Link to="/services" className="hover:text-[var(--accent-deep)]">Computers</Link></li>
              <li><Link to="/services" className="hover:text-[var(--accent-deep)]">Devices and everyday tech</Link></li>
              <li><Link to="/services" className="hover:text-[var(--accent-deep)]">One-to-one tutorials</Link></li>
              <li><Link to="/services" className="hover:text-[var(--accent-deep)]">Remote support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[var(--ink)]">
              Get in touch
            </h3>
            <ul className="space-y-2 text-[15px] text-[var(--ink-soft)]">
              <li>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 hover:text-[var(--accent-deep)]">
                  <IconPhone /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-[var(--accent-deep)]">
                  <IconMail /> {EMAIL}
                </a>
              </li>
              <li className="pt-2">
                <Link to="/portal" className="font-semibold text-[var(--accent-deep)] hover:underline">
                  Client login →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--line)] pt-6 text-[13px] text-[var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HazIT · Bath</p>
          <p>Based in Bear Flat, Bath, UK · Evenings and weekends</p>
        </div>
      </Container>
    </footer>
  )
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="site flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
