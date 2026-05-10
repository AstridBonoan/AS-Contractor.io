import { reviews } from '../../data/reviews'

export function CustomerReviews() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Reviews from homeowners</h2>
            <p className="mt-3 text-lg text-slate-600">
              Our reputation is built on showing up, telling the truth, and doing the job right — especially when it matters
              most.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-5 py-4 ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-navy-900">Google-style rating</p>
            <p className="mt-1 text-2xl font-bold text-navy-900">4.9 / 5</p>
            <p className="text-xs text-slate-600">Example metric for demo purposes</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex gap-1 text-brand-orange" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-800">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy-900">
                {r.name}
                <span className="block text-xs font-medium text-slate-600">{r.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
