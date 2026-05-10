import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/sections/CtaBand'

export function FinancingPage() {
  return (
    <>
      <Seo
        title="Financing Options"
        description="Flexible financing for qualified HVAC projects. Replace or upgrade now and pay over time with clear terms."
        path="/financing"
      />
      <section className="bg-navy-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">Pay over time</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Financing that keeps comfort within reach</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Big-ticket HVAC decisions should not feel like a gamble. Ask about current promotions and payment plans for
            qualified buyers.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">What financing can cover</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-orange">✓</span>
                  Full system replacements (furnace, AC, heat pump)
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-orange">✓</span>
                  High-efficiency upgrades and indoor air quality packages
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-orange">✓</span>
                  Major repairs when replacement is the smarter long-term choice
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                Final terms depend on credit approval and program details. We will walk you through everything before you
                commit.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-navy-900">Fast next step</h3>
              <p className="mt-2 text-sm text-slate-600">
                Request a quote and mention financing — we will include eligible options with your estimate.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-lg bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
              >
                Start your quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
