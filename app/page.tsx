import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-blue to-darker-blue text-white overflow-hidden">
      <div className="grid-overlay absolute inset-0 z-0 opacity-20"></div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
