export function TrustStrip() {
  const items = ['Licensed & insured', 'Background-checked team', 'Upfront estimates', 'Satisfaction-focused']
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <li key={t} className="flex items-center gap-2 text-sm font-semibold text-navy-900">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-orange/15 text-brand-orange">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
