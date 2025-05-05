"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * Component that animates its children when they enter the viewport
 */
interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Check if element is already in viewport on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current && isElementInViewport(ref.current)) {
        setIsVisible(true)
        setHasAnimated(true)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Helper function to check if element is in viewport
  function isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    )
  }

  // Set up intersection observer for scroll animations
  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay * 1000)

          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [delay, hasAnimated])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDuration: `700ms`,
      }}
    >
      {children}
    </div>
  )
}
