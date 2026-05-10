import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { ServiceIcon } from '../icons/ServiceIcons'

export function ServiceCardGrid({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Services built around your home</h2>
          <p className="mt-3 text-lg text-slate-600">
            One team for heating, cooling, airflow, and hot water — coordinated care with clear communication from quote to
            completion.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-xl bg-navy-900 p-3 text-brand-orange">
                  <ServiceIcon icon={s.icon} />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.blurb}</p>
            </article>
          ))}
        </div>
        {showCta ? (
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              to="/services"
              className="inline-flex rounded-lg bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              View full service list
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-brand-orange hover:text-brand-orange-dark">
              Schedule an appointment →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
