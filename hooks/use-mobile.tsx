"use client"

import * as React from "react"

// Default breakpoints matching Tailwind's common breakpoints
export const BREAKPOINTS = {
  SM: 640,  // Tailwind's sm
  MD: 768,  // Tailwind's md
  LG: 1024, // Tailwind's lg
  XL: 1280, // Tailwind's xl
  XXL: 1536 // Tailwind's 2xl
}

/**
 * Hook to detect if the current screen size is below a specified breakpoint
 * @param breakpoint - The breakpoint in pixels (defaults to MD/768px)
 * @returns boolean indicating if screen is below the breakpoint
 */
export function useBreakpoint(breakpoint = BREAKPOINTS.MD) {
  const [isBelow, setIsBelow] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Use matchMedia for better performance
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

    const onChange = () => {
      setIsBelow(window.innerWidth < breakpoint)
    }

    // Add event listener
    mql.addEventListener("change", onChange)

    // Set initial value
    setIsBelow(window.innerWidth < breakpoint)

    // Clean up
    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return !!isBelow
}

/**
 * Hook to detect if the current screen is a mobile device (below MD breakpoint)
 * @returns boolean indicating if screen is a mobile device
 */
export function useIsMobile() {
  return useBreakpoint(BREAKPOINTS.MD)
}

/**
 * Hook to detect if the current screen is a small screen (below LG breakpoint)
 * @returns boolean indicating if screen is a small screen
 */
export function useIsSmallScreen() {
  return useBreakpoint(BREAKPOINTS.LG)
}
