'use client';

import { useSyncExternalStore } from 'react';

// Default breakpoints matching Tailwind's common breakpoints
export const BREAKPOINTS = {
  SM: 640, // Tailwind's sm
  MD: 768, // Tailwind's md
  LG: 1024, // Tailwind's lg
  XL: 1280, // Tailwind's xl
  XXL: 1536, // Tailwind's 2xl
};

/**
 * Hook to detect if the current screen size is below a specified breakpoint
 * @param breakpoint - The breakpoint in pixels (defaults to MD/768px)
 * @returns boolean indicating if screen is below the breakpoint
 */
export const useBreakpoint = (breakpoint = BREAKPOINTS.MD) => {
  const subscribe = (callback: () => void) => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const onChange = () => callback();

    mql.addEventListener('change', onChange);

    return () => mql.removeEventListener('change', onChange);
  };

  const getSnapshot = () => window.innerWidth < breakpoint;

  const isBelow = useSyncExternalStore(subscribe, getSnapshot, () => false);

  return isBelow;
};

/**
 * Hook to detect if the current screen is a mobile device (below MD breakpoint)
 * @returns boolean indicating if screen is a mobile device
 */
export const useIsMobile = () => useBreakpoint(BREAKPOINTS.MD);

/**
 * Hook to detect if the current screen is a small screen (below LG breakpoint)
 * @returns boolean indicating if screen is a small screen
 */
export const useIsSmallScreen = () => useBreakpoint(BREAKPOINTS.LG);
