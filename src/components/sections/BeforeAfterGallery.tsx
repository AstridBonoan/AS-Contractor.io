import { galleryProjects } from '../../data/gallery'

export function BeforeAfterGallery() {
  return (
    <section className="bg-navy-900 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Before / after highlights</h2>
          <p className="mt-3 text-lg text-slate-200">
            Real projects start with a clear plan. Here are a few outcomes homeowners choose us for — efficiency, comfort, and
            peace of mind.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {galleryProjects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-navy-800/60 p-4 shadow-lg">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{p.location}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-900 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Before</p>
                    <p className="mt-2 text-sm font-medium text-white">{p.beforeNote}</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl ring-1 ring-brand-orange/40">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-orange/25 to-navy-950 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">After</p>
                    <p className="mt-2 text-sm font-medium text-white">{p.afterNote}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
