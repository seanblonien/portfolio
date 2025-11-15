import {useIsSmallScreen} from '@/hooks/use-mobile';
import {useState, useEffect} from 'react';

export const useExperiencePopover = () => {
  const isSmallScreen = useIsSmallScreen();
  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  // Handle touch events for swipe to close on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isSmallScreen) {
      setTouchStartY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isSmallScreen && touchStartY && e.changedTouches[0].clientY - touchStartY > 70) {
      // Swipe down detected, close the popover
      setOpenPopoverIndex(null);
    }
    setTouchStartY(null);
  };

  // Fix for Radix UI popover positioning on small screens
  useEffect(() => {
    if (isSmallScreen && openPopoverIndex !== null) {
      // Small delay to ensure the popover is rendered
      setTimeout(() => {
        // Try to find the popover wrapper using :has() selector (modern browsers)
        let popperWrapper = document.querySelector('[data-radix-popper-content-wrapper]:has([data-experience-popover="true"])');

        // Fallback for browsers that don't support :has()
        if (!popperWrapper) {
          // Find all popper wrappers
          const wrappers = document.querySelectorAll('[data-radix-popper-content-wrapper]');
          // Find the one that contains our experience popover
          wrappers.forEach((wrapper) => {
            if (wrapper.querySelector('[data-experience-popover="true"]')) {
              popperWrapper = wrapper;
            }
          });
        }

        if (popperWrapper) {
          // Apply direct styles to override any transforms
          (popperWrapper as HTMLElement).style.transform = 'none';
          (popperWrapper as HTMLElement).style.top = '0';
          (popperWrapper as HTMLElement).style.left = '0';
          (popperWrapper as HTMLElement).style.width = '100%';
          (popperWrapper as HTMLElement).style.height = '100%';
          (popperWrapper as HTMLElement).style.position = 'fixed';

          // Also apply styles to the popover content directly
          const popoverContent = popperWrapper.querySelector('[data-experience-popover="true"]');
          if (popoverContent) {
            (popoverContent as HTMLElement).style.transform = 'none';
            (popoverContent as HTMLElement).style.maxWidth = '100vw';
            (popoverContent as HTMLElement).style.width = '100vw';
            (popoverContent as HTMLElement).style.maxHeight = '100vh';
            (popoverContent as HTMLElement).style.height = '100vh';
          }
        }
      }, 50); // Small delay to ensure DOM is updated
    }
  }, [isSmallScreen, openPopoverIndex]);

  return {
    openPopoverIndex,
    setOpenPopoverIndex,
    handleTouchStart,
    handleTouchEnd,
  };
};
