import { Link } from 'react-router-dom'
import { COMPANY_NAME, COMPANY_TAGLINE, PHONE_DISPLAY, PHONE_TEL } from '../../constants'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-navy-900">{COMPANY_NAME}</p>
          <p className="mt-2 text-sm text-slate-600">{COMPANY_TAGLINE}</p>
          <p className="mt-4 text-sm text-slate-600">
            Licensed, insured, and committed to workmanship you can feel — and efficiency you can measure.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy-900">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-slate-700 hover:text-brand-orange" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-brand-orange" to="/financing">
                Financing
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-brand-orange" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-brand-orange" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy-900">Contact</p>
          <p className="mt-3 text-sm text-slate-600">
            <a className="font-semibold text-navy-900 hover:text-brand-orange" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-600">Mon–Sun · Emergency service available</p>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p className="text-slate-500">Local HVAC professionals · Mobile-first experience</p>
        </div>
      </div>
    </footer>
  )
}
