import { Outlet } from 'react-router-dom'
import { EmergencyBanner } from './EmergencyBanner'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { StickyCallButton } from './StickyCallButton'

export function Layout() {
  return (
    <div className="min-h-dvh bg-white pb-24 md:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900 focus:shadow-lg focus:ring-4 focus:ring-brand-orange/30"
      >
        Skip to content
      </a>
      <EmergencyBanner />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  )
}
