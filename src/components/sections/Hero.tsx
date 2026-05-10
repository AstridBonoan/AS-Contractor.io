import { Link } from 'react-router-dom'
import { COMPANY_TAGLINE } from '../../constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(249,115,22,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">{COMPANY_TAGLINE}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Comfort you can trust — installed right, serviced fast.
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            From emergency repairs to high-efficiency upgrades, we help homeowners breathe easier with honest recommendations
            and workmanship built to last.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:bg-brand-orange-dark"
            >
              Request a free quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              Explore services
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Response</dt>
              <dd className="mt-1 text-lg font-bold text-white">24/7</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Warranty</dt>
              <dd className="mt-1 text-lg font-bold text-white">Backed</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Financing</dt>
              <dd className="mt-1 text-lg font-bold text-white">Options</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
