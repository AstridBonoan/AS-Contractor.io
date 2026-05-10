import { PHONE_DISPLAY, PHONE_TEL } from '../../constants'

export function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-3 text-base font-bold text-white shadow-sm transition active:scale-[0.99] hover:bg-brand-orange-dark"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.5-.3 1 .4 2.1.6 3.3.6.8 0 1.5.7 1.5 1.5V21c0 .8-.7 1.5-1.5 1.5C9.9 22.5 1.5 14.1 1.5 3C1.5 2.2 2.2 1.5 3 1.5h3.5c.8 0 1.5.7 1.5 1.5 0 1.1.2 2.2.6 3.3.2.5.1 1.1-.3 1.5l-2.5 2.5z"
              fill="currentColor"
            />
          </svg>
          Call now · {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  )
}
