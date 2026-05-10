import { Seo } from '../components/Seo'
import { CtaBand } from '../components/sections/CtaBand'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="AS Contractor is a premium HVAC and home services team focused on honest recommendations, clean workmanship, and long-term comfort."
        path="/about"
      />
      <section className="bg-navy-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">Our story</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Built for homeowners who expect more</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            We started with a simple standard: treat every home like it matters — because it does. That means showing up,
            communicating clearly, and delivering work we would stand behind in our own houses.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">What we believe</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                HVAC is not just equipment — it is safety, sleep quality, energy bills, and peace of mind. We train our team
                to prioritize diagnostics, explain tradeoffs in plain language, and help you choose a path that fits your
                priorities.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                From emergency no-heat nights to planned upgrades, you get a consistent experience: respectful technicians,
                protected floors and surfaces, and testing before we call the job complete.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-navy-900">On every job site</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-brand-orange">✓</span>
                  Safety checks and code-conscious installs
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">✓</span>
                  Written details you can reference later
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">✓</span>
                  Respect for your time, your pets, and your schedule
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
