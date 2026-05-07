import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LandingCarousel } from "@/components/landing-carousel"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <LandingCarousel />
      <Services />
      <Benefits />
      <CTASection />
      <Footer />
    </main>
  )
}
