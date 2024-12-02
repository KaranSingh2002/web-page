import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { JobsSections } from "@/components/jobs-sections"
import { FeaturedEmployers } from "@/components/featured-employers"
import { MobileApp } from "@/components/mobile-app"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <JobsSections />
        <FeaturedEmployers />
        <MobileApp />
      </main>
      <Footer />
    </div>
  )
}

