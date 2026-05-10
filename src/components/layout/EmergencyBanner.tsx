import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../../constants'

export function EmergencyBanner() {
  return (
    <div className="bg-brand-orange text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-center text-sm font-medium sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:text-left">
        <p className="sm:flex-1 sm:text-center">
          <span className="font-semibold">24/7 emergency HVAC</span>
          <span className="hidden sm:inline"> — </span>
          <span className="block sm:inline">Fast dispatch when your comfort or safety is on the line.</span>
        </p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center justify-center rounded-md bg-white/15 px-3 py-1.5 text-sm font-semibold ring-1 ring-white/30 transition hover:bg-white/25"
        >
          Call {PHONE_DISPLAY}
        </a>
        <Link
          to="/contact"
          className="hidden text-sm font-semibold underline decoration-white/70 underline-offset-4 hover:decoration-white sm:inline"
        >
          Request service
        </Link>
      </div>
    </div>
  )
}
