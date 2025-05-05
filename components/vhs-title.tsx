"use client"

import { useEffect, useRef, useState } from "react"

/**
 * VHS-style title component with glitch effects
 * The CSS for this component is defined in globals.css
 */
export default function VHSTitle() {
  const titleRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasGlitched, setHasGlitched] = useState(false)

  // Set up intersection observer to detect when title is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (titleRef.current) observer.unobserve(titleRef.current)
        }
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
    }
  }, [])

  // Handle the glitch effect
  useEffect(() => {
    if (!isInView || !titleRef.current) return

    const title = titleRef.current
    let glitchTimeout: NodeJS.Timeout | null = null

    // Initial glitch effect when first visible
    if (!hasGlitched) {
      setTimeout(() => {
        createGlitch(title)
        setHasGlitched(true)
      }, 500)
    }

    // Function to create a single glitch
    function createGlitch(element: HTMLDivElement) {
      element.classList.add("glitching")

      // Random horizontal offset - sometimes more extreme
      const isExtremeGlitch = Math.random() > 0.7
      const xOffset = Math.random() * (isExtremeGlitch ? 20 : 10) - (isExtremeGlitch ? 10 : 5)
      const yOffset = isExtremeGlitch ? (Math.random() * 8 - 4) : 0

      element.style.transform = `translate(${xOffset}px, ${yOffset}px)`

      // Remove the glitch class after a random short duration
      const duration = 100 + Math.random() * 100
      setTimeout(() => {
        element.classList.remove("glitching")
        element.style.transform = ""
      }, duration)
    }

    // Create glitch effect at random intervals
    const glitchInterval = setInterval(
      () => {
        const multiGlitch = Math.random() > 0.7
        createGlitch(title)

        if (multiGlitch) {
          glitchTimeout = setTimeout(() => {
            createGlitch(title)
          }, 200)
        }
      },
      2000 + Math.random() * 4000, // Random interval between 2-6 seconds
    )

    return () => {
      clearInterval(glitchInterval)
      if (glitchTimeout) clearTimeout(glitchTimeout)
    }
  }, [isInView, hasGlitched])

  return (
    <div className="relative">
      <div
        ref={titleRef}
        className="vhs-title relative z-10"
        onMouseEnter={() => {
          if (Math.random() > 0.5 && titleRef.current) {
            titleRef.current.classList.add("glitching")
            setTimeout(() => {
              if (titleRef.current) titleRef.current.classList.remove("glitching")
            }, 150)
          }
        }}
      >
        <h1 className="text-5xl md:text-7xl font-vt323 mb-4 tracking-wide">
          <span className="neon-text-blue">SEAN</span> <span className="neon-text-pink">BLONIEN</span>
        </h1>
      </div>
    </div>
  )
}
