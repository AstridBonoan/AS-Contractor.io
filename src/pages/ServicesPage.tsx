import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/sections/CtaBand'
import { ServiceCardGrid } from '../components/sections/ServiceCardGrid'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="HVAC & Home Services"
        description="Installation, repair, maintenance, ductwork, water heaters, and indoor air quality — one trusted team for whole-home comfort."
        path="/services"
      />
      <section className="bg-navy-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">What we do</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Services designed for real homes</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Whether you need a fast repair or a long-term efficiency upgrade, we build a plan around your comfort goals, your
            budget, and your timeline.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              Request a quote
            </Link>
            <Link
              to="/financing"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              Explore financing
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-navy-900">How we work</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Listen & assess',
                body: 'We clarify symptoms, safety, and comfort goals — then recommend the right next step.',
              },
              {
                step: '02',
                title: 'Clear options',
                body: 'You get straightforward choices with pricing context — repair vs replace when it matters.',
              },
              {
                step: '03',
                title: 'Done right',
                body: 'Clean jobsite, careful testing, and documentation so you know what was done and why.',
              },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">{s.step}</p>
                <p className="mt-2 text-lg font-bold text-navy-900">{s.title}</p>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ServiceCardGrid showCta={false} />
      <CtaBand />
    </>
  )
}
