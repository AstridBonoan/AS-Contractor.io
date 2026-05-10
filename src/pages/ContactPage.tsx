import { Seo } from '../components/Seo'
import { QuoteRequestForm } from '../components/sections/QuoteRequestForm'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact & Quote"
        description="Request a quote or emergency HVAC service. Call 24/7 or send your project details — we respond quickly."
        path="/contact"
      />
      <section className="bg-navy-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">We are here</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Contact AS Contractor</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            For urgent issues, call now. For quotes and scheduling, use the form — or reach us by phone anytime.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
              <p className="text-sm font-semibold text-slate-200">Phone</p>
              <a className="mt-2 block text-2xl font-bold text-white hover:text-brand-orange" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              <p className="mt-2 text-xs text-slate-300">Emergency dispatch available</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
              <p className="text-sm font-semibold text-slate-200">Hours</p>
              <p className="mt-2 text-sm text-white">Monday – Sunday</p>
              <p className="mt-1 text-sm text-slate-200">Office scheduling + 24/7 emergency line</p>
            </div>
          </div>
        </div>
      </section>

      <QuoteRequestForm
        id="quote"
        heading="Tell us about your project"
        subheading="The more context you share, the faster we can recommend the right technician and appointment window."
      />
    </>
  )
}
