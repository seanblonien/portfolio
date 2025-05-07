"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface AudioSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showValueLabel?: boolean;
  valueLabel?: string;
}

const AudioSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  AudioSliderProps
>(({ className, showValueLabel, valueLabel, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className="relative h-4 w-full grow overflow-hidden rounded-full"
        style={{ backgroundColor: 'var(--neon-blue-20)' }}
      >
        <SliderPrimitive.Range
          className="absolute h-full"
          style={{
            background: 'linear-gradient(to right, var(--neon-pink), var(--neon-blue))'
          }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block h-8 w-8 rounded-full z-20 cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring focus-visible:ring-neon-pink focus-visible:ring-opacity-75"
        style={{
          backgroundColor: 'var(--neon-pink)',
          boxShadow: '0 0 15px var(--neon-pink-70)',
          border: '2px solid var(--neon-pink-90)',
          touchAction: 'none', // Prevent scrolling when dragging on touch devices
        }}
      />
      {showValueLabel && valueLabel && (
        <div className="absolute right-0 -top-6 text-sm text-neon-blue">
          {valueLabel}
        </div>
      )}
    </SliderPrimitive.Root>
  );
});

AudioSlider.displayName = "AudioSlider"

export { AudioSlider }
