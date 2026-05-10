import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../../constants'

export function CtaBand() {
  return (
    <section className="bg-brand-orange py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready for quieter, more efficient comfort?</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            Get a clear plan, fair pricing, and a team that respects your home. Start with a quote — or call for emergency
            help now.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:bg-slate-100"
          >
            Book online
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-lg bg-navy-900 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-navy-800"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
