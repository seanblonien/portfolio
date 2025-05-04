"use client"

import { useEffect, useRef, useState } from "react"

export default function VHSTitle() {
  const titleRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

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

  useEffect(() => {
    if (!isInView || !titleRef.current) return

    const title = titleRef.current

    // Create glitch effect at random intervals
    const glitchInterval = setInterval(
      () => {
        // Add the glitch class
        title.classList.add("glitching")

        // Random horizontal offset
        const xOffset = Math.random() * 10 - 5
        title.style.transform = `translateX(${xOffset}px)`

        // Remove the glitch class after a short duration
        setTimeout(() => {
          title.classList.remove("glitching")
          title.style.transform = ""
        }, 150)
      },
      2000 + Math.random() * 4000,
    ) // Random interval between 2-6 seconds

    return () => {
      clearInterval(glitchInterval)
    }
  }, [isInView])

  return (
    <div className="relative">
      <div ref={titleRef} className="vhs-title relative z-10">
        <h1 className="text-5xl md:text-7xl font-vt323 mb-4 tracking-wide">
          <span className="neon-text-blue">SEAN</span> <span className="neon-text-pink">BLONIEN</span>
        </h1>
      </div>
    </div>
  )
}
