import { Seo } from '../components/Seo'
import { BeforeAfterGallery } from '../components/sections/BeforeAfterGallery'
import { CtaBand } from '../components/sections/CtaBand'
import { CustomerReviews } from '../components/sections/CustomerReviews'
import { FaqAccordion } from '../components/sections/FaqAccordion'
import { Hero } from '../components/sections/Hero'
import { QuoteRequestForm } from '../components/sections/QuoteRequestForm'
import { ServiceCardGrid } from '../components/sections/ServiceCardGrid'
import { TrustStrip } from '../components/sections/TrustStrip'

export function HomePage() {
  return (
    <>
      <Seo
        title="AS Contractor | Premium HVAC & Home Services"
        description="Premium HVAC installation, repair, and tune-ups with 24/7 emergency service, financing options, and licensed technicians."
        path="/"
      />
      <Hero />
      <TrustStrip />
      <ServiceCardGrid />
      <QuoteRequestForm />
      <BeforeAfterGallery />
      <CustomerReviews />
      <FaqAccordion />
      <CtaBand />
    </>
  )
}
