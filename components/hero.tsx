import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import VHSTitle from "./vhs-title"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vaporwave-bg.png"
          alt="Vaporwave background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      <div className="section-container flex flex-col items-center text-center z-10">
        <VHSTitle />
        <h2 className="text-3xl md:text-5xl font-vt323 mb-8 neon-text-orange">SENIOR SOFTWARE ENGINEER</h2>
        <p className="text-xl max-w-2xl mb-12 text-white/90">
          Building modern, scalable applications with a focus on user experience and performance.
        </p>
        <Button
          asChild
          className="bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,42,255,0.5)]"
        >
          <a href="#about" className="flex items-center gap-2">
            EXPLORE <ArrowDown size={16} />
          </a>
        </Button>
      </div>
    </section>
  )
}
