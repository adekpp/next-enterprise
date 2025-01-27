import { CTASection } from "@/components/landing-page/cta-section"
import { FeaturesSection } from "@/components/landing-page/features-section"
import { HeroSection } from "@/components/landing-page/hero-section"
import { TestimonialsSection } from "@/components/landing-page/testimonials-section"
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
