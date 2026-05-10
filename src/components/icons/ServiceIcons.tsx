import type { Service } from '../../data/services'

const stroke = 'stroke-current'
const common = 'h-8 w-8'

export function ServiceIcon({ icon }: { icon: Service['icon'] }) {
  switch (icon) {
    case 'ac':
      return (
        <svg className={`${common} ${stroke}`} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeWidth="1.75"
            strokeLinecap="round"
            d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.4 6.4l2.8 2.8M14.8 14.8l2.8 2.8M6.4 17.6l2.8-2.8M14.8 9.2l2.8-2.8"
          />
          <circle cx="12" cy="12" r="3.25" strokeWidth="1.75" />
        </svg>
      )
    case 'furnace':
      return (
        <svg className={`${common} ${stroke}`} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 20h10V8H7v12zM9 8V6a2 2 0 012-2h2a2 2 0 012 2v2"
          />
          <path strokeWidth="1.75" strokeLinecap="round" d="M10 12h4M10 16h4" />
        </svg>
      )
    case 'duct':
      return (
        <svg className={`${common} ${stroke}`} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeWidth="1.75"
            strokeLinecap="round"
            d="M4 12h5l2-3h2l2 3h5M8 16h8"
          />
        </svg>
      )
    case 'water':
      return (
        <svg className={`${common} ${stroke}`} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21c3-3.2 5-6 5-9a5 5 0 10-10 0c0 3 2 5.8 5 9z"
          />
        </svg>
      )
    case 'iaq':
      return (
        <svg className={`${common} ${stroke}`} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeWidth="1.75"
            strokeLinecap="round"
            d="M4 14c2.5-1 4-3 8-3s5.5 2 8 3M4 10c2.5-1 4-3 8-3s5.5 2 8 3M4 6c2.5-1 4-3 8-3s5.5 2 8 3"
          />
        </svg>
      )
    case 'maintenance':
      return (
        <svg className={`${common} ${stroke}`} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          />
        </svg>
      )
    default:
      return null
  }
}
