import Hero from '../components/sections/Hero'
import BrandStrip from "../components/sections/BrandStrip"
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import UseCases from '../components/sections/UseCases'
import Testimonials from '../components/sections/Testimonials'
import Pricing from '../components/sections/Pricing'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
