import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { COMPANY_NAME } from '../../constants'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-2 text-sm font-semibold transition',
    isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5 hover:text-white',
  ].join(' ')

const routes = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/financing', label: 'Financing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-orange text-sm font-bold text-white">
            AS
          </span>
          <span className="text-base font-bold tracking-tight text-white">{COMPANY_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {routes.map((r) => (
            <NavLink key={r.to} to={r.to} className={navLinkClass} end={r.to === '/'}>
              {r.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange-dark"
          >
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white ring-1 ring-white/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={[
          'border-t border-white/10 bg-navy-900 md:hidden',
          open ? 'block' : 'hidden',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {routes.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              className={({ isActive }) =>
                [
                  'rounded-md px-3 py-3 text-base font-semibold',
                  isActive ? 'bg-white/10 text-white' : 'text-slate-200',
                ].join(' ')
              }
              end={r.to === '/'}
              onClick={() => setOpen(false)}
            >
              {r.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 rounded-md bg-brand-orange px-3 py-3 text-center text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  )
}
