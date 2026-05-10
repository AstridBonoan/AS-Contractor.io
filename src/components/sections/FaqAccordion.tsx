import { useId, useState } from 'react'
import { faqs } from '../../data/faqs'

export function FaqAccordion() {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-lg text-slate-600">Straight answers — so you can decide with confidence.</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item, idx) => {
            const panelId = `${baseId}-panel-${idx}`
            const buttonId = `${baseId}-button-${idx}`
            const isOpen = open === idx
            return (
              <div key={item.q} className="px-4 sm:px-6">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy-900 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : idx)}
                  >
                    {item.q}
                    <span
                      className={[
                        'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700 transition',
                        isOpen ? 'rotate-180' : '',
                      ].join(' ')}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5"
                >
                  <p className="text-sm leading-relaxed text-slate-600">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
