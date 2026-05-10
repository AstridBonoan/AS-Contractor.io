import { useState, type FormEvent } from 'react'

const serviceOptions = [
  'Installation / replacement',
  'Repair',
  'Maintenance / tune-up',
  'Indoor air quality',
  'Ductwork / airflow',
  'Water heater',
  'Not sure — need guidance',
] as const

type QuoteRequestFormProps = {
  heading?: string
  subheading?: string
  id?: string
}

export function QuoteRequestForm({
  heading = 'Request a quote',
  subheading = 'Tell us what you need — we will follow up quickly with next steps.',
  id = 'quote',
}: QuoteRequestFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id={id} className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{heading}</h2>
            <p className="mt-3 text-lg text-slate-600">{subheading}</p>
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 text-brand-orange">✓</span>
                Same-day or next-day scheduling for many requests
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-brand-orange">✓</span>
                Options explained in plain language — no jargon pressure
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-brand-orange">✓</span>
                Financing available for qualified projects
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-navy-900">Thanks — you are on the list.</p>
                <p className="mt-2 text-sm text-slate-600">
                  This demo form does not send email yet. Connect your form endpoint or CRM to capture leads in production.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-navy-900" htmlFor="quote-name">
                      Full name
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-brand-orange/30 focus:ring-4"
                      placeholder="Alex Johnson"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-900" htmlFor="quote-phone">
                      Phone
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-brand-orange/30 focus:ring-4"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-900" htmlFor="quote-email">
                      Email
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-brand-orange/30 focus:ring-4"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-navy-900" htmlFor="quote-service">
                      What do you need help with?
                    </label>
                    <select
                      id="quote-service"
                      name="service"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-brand-orange/30 focus:ring-4"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service type
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-navy-900" htmlFor="quote-message">
                      Project details
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={4}
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-brand-orange/30 focus:ring-4"
                      placeholder="Equipment age, comfort issues, timeline, and any photos you want to mention."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-navy-900" htmlFor="quote-contact">
                      Preferred contact
                    </label>
                    <select
                      id="quote-contact"
                      name="preferred_contact"
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-brand-orange/30 focus:ring-4"
                      defaultValue="phone"
                    >
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                      <option value="text">Text</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-orange px-4 py-3 text-base font-semibold text-white transition hover:bg-brand-orange-dark"
                >
                  Submit quote request
                </button>
                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted about your request. We never sell your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
