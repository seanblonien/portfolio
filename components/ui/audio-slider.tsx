'use client';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type AudioSliderProps = {
  showValueLabel?: boolean;
  valueLabel?: string;
} & React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

const AudioSlider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  AudioSliderProps
>(({ className, showValueLabel, valueLabel, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className='relative h-2 w-full grow overflow-hidden rounded-full'
      style={{ backgroundColor: 'var(--neon-blue-20)' }}
    >
      <SliderPrimitive.Range
        className='absolute h-full'
        style={{
          background: 'linear-gradient(to right, var(--neon-pink), var(--neon-blue))',
        }}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className='block h-4 w-4 rounded-full z-20 cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring focus-visible:ring-neon-pink focus-visible:ring-opacity-75'
      style={{
        backgroundColor: 'var(--neon-pink)',
        boxShadow: '0 0 10px var(--neon-pink-70)',
        border: '1px solid var(--neon-pink-90)',
        touchAction: 'none', // Prevent scrolling when dragging on touch devices
      }}
    />
    {showValueLabel && valueLabel && (
      <div className='absolute right-0 -top-6 text-sm text-neon-blue'>
        {valueLabel}
      </div>
    )}
  </SliderPrimitive.Root>
));

AudioSlider.displayName = 'AudioSlider';

export { AudioSlider };
