import { HeroSection } from "@/components/hero-section"
import { TargetSection } from "@/components/target-section"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TargetSection />
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
