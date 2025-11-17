'use client';
import dynamic from 'next/dynamic';

// eslint-disable-next-line @typescript-eslint/naming-convention -- React component
export const AudioPlayerWrapper = dynamic(() => import('@/components/audio-player').then((mod) => mod.AudioPlayer), {
  // eslint-disable-next-line @typescript-eslint/naming-convention -- library API
  ssr: false,
});
