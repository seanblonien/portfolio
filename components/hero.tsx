"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, FileText } from "lucide-react"
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
        <p className="text-xl max-w-2xl mb-8 text-white/90">
          Building modern reactive web & mobile apps with a focus on product development.
          Specializing in React, TypeScript, and serverless cloud architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            asChild
            className="bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,42,255,0.5)]"
          >
            <a href="#about" className="flex items-center gap-2">
              EXPLORE <ArrowDown size={16} />
            </a>
          </Button>

          <Button
            asChild
            className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_rgba(42,253,255,0.5)]"
          >
            <a
              href="/resume.pdf"
              className="flex items-center gap-2"
            >
              RESUME <FileText size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
