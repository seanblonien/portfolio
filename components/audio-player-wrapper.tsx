'use client';

import dynamic from 'next/dynamic';

export const AudioPlayerWrapper = dynamic(() => import('@/components/audio-player').then((mod) => mod.AudioPlayer), {
  ssr: false,
});
