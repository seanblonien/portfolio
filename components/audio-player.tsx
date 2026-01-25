'use client';

/**
 * Audio Player Component with Lazy Loading
 *
 * This component implements a progressive loading approach for audio:
 * 1. Initial state: Audio object created with preload="none" (no loading)
 * 2. First interaction: Changes to preload="metadata" (loads only metadata)
 * 3. When playing: Changes to preload="auto" (enables browser's native streaming)
 *
 * This approach ensures the audio file is only loaded when needed and
 * leverages the browser's built-in streaming capabilities via HTTP range requests.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { FastForward, Rewind, Volume, Volume1, Volume2, VolumeX, X } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { AudioSlider } from '@/components/ui/audio-slider';

// Format time in MM:SS format
const formatTime = (timeInSeconds: number) => {
  if (Number.isNaN(timeInSeconds)) return '00:00';

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const START_TIME = 70;

// eslint-disable-next-line max-lines-per-function -- TODO: split up
export function AudioPlayer() {
  const isMobile = useIsMobile();
  // Start muted to comply with browser autoplay policies
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(() => {
    // Try to get saved volume from localStorage, default to 0.7
    if (typeof window !== 'undefined') {
      const savedVolume = localStorage.getItem('portfolio-music-volume');

      return savedVolume ? Number.parseFloat(savedVolume) : 0.7;
    }

    return 0.7;
  });
  // Single shared state for both desktop popover and mobile dialog
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(START_TIME); // Start at 1:30
  const [duration, setDuration] = useState(0);
  // Track if music has been started by user
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previousVolumeRef = useRef(volume); // Store previous volume for unmuting

  // Initialize audio element - lazy loading approach
  useEffect(() => {
    // Only create the Audio object when the component mounts
    // This defers loading until the user actually interacts with the player
    const initializeAudio = () => {
      // Create audio element with preload="none" to prevent immediate loading
      audioRef.current = new Audio();
      audioRef.current.preload = 'none'; // Options: "none", "metadata", "auto"
      audioRef.current.src = '/music.mp3';
      audioRef.current.loop = true;
      // Always start with volume 0 to comply with browser autoplay policies
      audioRef.current.volume = 0;

      return audioRef.current;
    };

    const audio = initializeAudio();

    // Update time display
    const timeUpdateHandler = () => {
      setCurrentTime(audio.currentTime);
    };

    // Get duration when metadata is loaded
    const loadedMetadataHandler = () => {
      setDuration(audio.duration);
      // Set initial position to START_TIME
      audio.currentTime = START_TIME;
      // We'll start playing after user interaction, not automatically
    };

    // Add event listeners
    audio.addEventListener('timeupdate', timeUpdateHandler);
    audio.addEventListener('loadedmetadata', loadedMetadataHandler);

    // Clean up on unmount
    return () => {
      audio.removeEventListener('timeupdate', timeUpdateHandler);
      audio.removeEventListener('loadedmetadata', loadedMetadataHandler);
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Define the toggle mute function
  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;

    // If this is the first interaction, start playing the audio
    if (!hasInteracted) {
      // First interaction - load metadata if needed
      if (audioRef.current.preload === 'none') {
        // Change preload to "metadata" to start loading essential information
        audioRef.current.preload = 'metadata';
      }

      // Set the current time to START_TIME
      audioRef.current.currentTime = START_TIME;

      // When user actually wants to play, switch to auto preload for better streaming
      audioRef.current.preload = 'auto';

      // Start playing
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio on mute toggle:', error);
      });

      setHasInteracted(true);
    }

    if (isMuted) {
      // Unmute - restore previous volume
      audioRef.current.volume = previousVolumeRef.current;
    } else {
      // Mute - save current volume first
      previousVolumeRef.current = volume;
      audioRef.current.volume = 0;
    }

    setIsMuted(!isMuted);
  }, [isMuted, hasInteracted, volume]);

  // Skip forward 15 seconds
  const skipForward = useCallback(() => {
    if (!audioRef.current) return;

    const newTime = Math.min(audioRef.current.currentTime + 15, audioRef.current.duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, []);

  // Skip backward 15 seconds
  const skipBackward = useCallback(() => {
    if (!audioRef.current) return;

    const newTime = Math.max(audioRef.current.currentTime - 15, 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, []);

  // Add keyboard shortcuts for when controls are open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Space to toggle mute/unmute
      if (e.code === 'Space') {
        e.preventDefault();
        toggleMute();
      }

      // Arrow right to skip forward
      if (e.code === 'ArrowRight') {
        skipForward();
      }

      // Arrow left to skip backward
      if (e.code === 'ArrowLeft') {
        skipBackward();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleMute, skipForward, skipBackward]);

  // hasInteracted state is declared above
  // Get the appropriate volume icon based on current volume
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className='w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300' />;
    if (volume < 0.3) return <Volume className='w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300' />;
    if (volume < 0.7) return <Volume1 className='w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300' />;

    return <Volume2 className='w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300' />;
  };

  // Toggle controls based on device type - now uses a single shared state
  const toggleControls = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Helper functions for status text
  const getStatusText = () => {
    if (!hasInteracted) return 'READY TO PLAY';
    if (duration === 0) return 'LOADING...';

    return 'NOW PLAYING';
  };

  const getSubStatusText = () => {
    if (!hasInteracted) return '(Click speaker to start)';
    if (duration === 0) return '(Loading audio...)';
    if (isMuted) return '(Muted)';

    return '';
  };

  // Audio controls content - reused in both desktop and mobile views
  const audioControlsContent = (
    <div className='space-y-4'>
      {/* Track info */}
      <div className='text-center border border-neon-blue-30 rounded-xl p-2 shadow-neon-blue' style={{ backgroundColor: 'rgba(5, 5, 24, 0.5)' }}>
        <p className='text-sm font-vt323 neon-text-blue'>
          {getStatusText()}
        </p>
        <p className='text-xs font-medium' style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Allude by Voyage
        </p>
        <p className='text-xs' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          {getSubStatusText()}
        </p>

        {/* Progress bar */}
        <div className='mt-2 mb-1'>
          <AudioSlider
            aria-label='Seek audio position'
            max={duration || 100} // Use 100 as fallback if duration is not loaded yet
            min={0}
            step={1}
            value={[currentTime]}
            onValueChange={([newTime]) => {
              if (!audioRef.current || duration === 0) return;
              audioRef.current.currentTime = newTime;
              setCurrentTime(newTime);
            }}
            onValueCommit={([newTime]) => {
              if (!audioRef.current || duration === 0) return;
              // Ensure the final position is set correctly
              audioRef.current.currentTime = newTime;
              setCurrentTime(newTime);
            }}
          />
        </div>

        <p className='text-xs text-text-white-60'>
          {formatTime(currentTime)}
          {' '}
          /
          {' '}
          {formatTime(duration)}
        </p>
      </div>

      {/* Playback controls */}
      <div className='flex justify-center items-center gap-4'>
        <button
          aria-label='Skip backward 15 seconds'
          className='p-2 rounded-full bg-darker-blue border border-neon-blue hover:border-neon-pink hover:shadow-neon-pink-lg transition-all duration-300'
          onClick={skipBackward}
        >
          <Rewind className='w-5 h-5 text-neon-blue' />
        </button>

        <button
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className='p-3 rounded-full bg-darker-blue border-2 border-neon-pink hover:shadow-neon-pink-lg transition-all duration-300'
          title='Toggle mute/unmute'
          onClick={toggleMute}
        >
          {isMuted
            ? (
                <VolumeX className='w-6 h-6 text-neon-pink' />
              )
            : (
                <Volume2 className='w-6 h-6 text-neon-pink' />
              )}
        </button>

        <button
          aria-label='Skip forward 15 seconds'
          className='p-2 rounded-full bg-darker-blue border border-neon-blue hover:border-neon-pink hover:shadow-neon-pink-lg transition-all duration-300'
          onClick={skipForward}
        >
          <FastForward className='w-5 h-5 text-neon-blue' />
        </button>
      </div>

      <Separator className='bg-neon-blue-20' />

      {/* Volume controls */}
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <span className='text-sm text-neon-blue'>Volume</span>
          <span className='text-sm text-neon-blue'>
            {Math.round(volume * 100)}
            %
          </span>
        </div>
        <div className='py-2'>
          <AudioSlider
            aria-label='Volume control'
            max={1}
            min={0}
            showValueLabel={false}
            step={0.01}
            value={[volume]}
            onValueChange={([newVolume]) => {
              setVolume(newVolume);
              previousVolumeRef.current = newVolume;

              if (audioRef.current && !isMuted) {
                audioRef.current.volume = newVolume;
              }
            }}
            onValueCommit={([newVolume]) => {
              setVolume(newVolume);
              previousVolumeRef.current = newVolume;

              if (audioRef.current && !isMuted) {
                audioRef.current.volume = newVolume;
              }
              if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio-music-volume', newVolume.toString());
              }
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className='fixed bottom-4 right-4 z-50 flex flex-col items-end'>
      {/* Audio button - always visible */}
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          toggleControls();
        }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label={isMuted ? 'Unmute music and open controls' : 'Mute music and open controls'}
                className='w-12 h-12 rounded-full bg-darker-blue border-2 border-neon-blue flex items-center justify-center transition-all duration-300 hover:border-neon-pink hover:shadow-neon-pink-lg group'
                onClick={() => {
                  toggleMute();
                  toggleControls();
                }}
              >
                {getVolumeIcon()}

                {/* Animated sound waves when playing (not muted) */}
                {!isMuted && hasInteracted && (
                  <div className='absolute -top-1 -right-1 w-3 h-3'>
                    <span className='absolute w-full h-full rounded-full bg-neon-pink opacity-75 animate-ping' />
                    <span className='absolute w-full h-full rounded-full bg-neon-pink' />
                  </div>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent
              className='bg-darker-blue border border-neon-blue text-white rounded-xl shadow-neon-blue'
              data-audio-player-tooltip='true'
              side='left'
            >
              <p>{isMuted ? 'Unmute music' : 'Mute music'}</p>
              <p className='text-xs text-text-white-70'>{hasInteracted ? 'Music is playing but muted' : 'Click to start music (muted)'}</p>
              <p className='text-xs text-text-white-70'>Click to toggle sound and open controls</p>
              <p className='text-xs text-text-white-70'>Right-click also opens controls</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Desktop popover - uses shared isOpen state */}
      {!isMobile && isOpen && (
        <div className='absolute bottom-16 right-0 w-72 p-4 bg-darker-blue border border-neon-blue shadow-neon-blue-lg rounded-xl overflow-hidden z-50'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-lg font-vt323 neon-text-pink'>Music Player</h3>
            <button
              className='p-1 rounded-full hover:bg-darker-blue/50'
              onClick={() => setIsOpen(false)}
            >
              <X className='w-5 h-5 text-neon-blue' />
            </button>
          </div>
          {audioControlsContent}
        </div>
      )}

      {/* Mobile dialog - uses shared isOpen state */}
      {isMobile && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent
            className='w-[90vw] max-w-87.5 p-4 bg-darker-blue border border-neon-blue shadow-neon-blue-lg rounded-xl overflow-hidden [&>button]:hidden'
            data-audio-player-dialog='true'
            style={{ paddingRight: '1rem' }}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {/* Add DialogTitle for accessibility */}
            <DialogTitle className='sr-only'>Music Player Controls</DialogTitle>

            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-lg font-vt323 neon-text-pink'>Music Player</h3>
              <button
                className='p-1 rounded-full hover:bg-darker-blue/50'
                onClick={() => setIsOpen(false)}
              >
                <X className='w-5 h-5 text-neon-blue' />
              </button>
            </div>
            {audioControlsContent}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
