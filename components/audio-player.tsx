"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Volume2, VolumeX, Volume1, Volume, Rewind, FastForward, X } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useIsMobile } from "@/hooks/use-mobile"
import { AudioSlider } from "@/components/ui/audio-slider"

const START_TIME = 70;

export default function AudioPlayer() {
  const isMobile = useIsMobile();
  const [isMuted, setIsMuted] = useState(true) // Start muted to comply with browser autoplay policies
  const [volume, setVolume] = useState(() => {
    // Try to get saved volume from localStorage, default to 0.7
    if (typeof window !== 'undefined') {
      const savedVolume = localStorage.getItem('portfolio-music-volume')
      return savedVolume ? parseFloat(savedVolume) : 0.7
    }
    return 0.7
  })
  // Single shared state for both desktop popover and mobile dialog
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(START_TIME) // Start at 1:30
  const [duration, setDuration] = useState(0)
  // Track if music has been started by user
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const previousVolumeRef = useRef(volume) // Store previous volume for unmuting

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio("/music.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0 // Always start with volume 0 to comply with browser autoplay policies

    // Set up event listeners
    const audio = audioRef.current

    // Update time display
    const timeUpdateHandler = () => {
      if (audio) {
        setCurrentTime(audio.currentTime)
      }
    }

    // Get duration when metadata is loaded
    const loadedMetadataHandler = () => {
      if (audio) {
        setDuration(audio.duration)
        // Set initial position to START_TIME
        audio.currentTime = START_TIME
        // We'll start playing after user interaction, not automatically
      }
    }

    // Add event listeners
    audio.addEventListener('timeupdate', timeUpdateHandler)
    audio.addEventListener('loadedmetadata', loadedMetadataHandler)

    // Clean up on unmount
    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', timeUpdateHandler)
        audio.removeEventListener('loadedmetadata', loadedMetadataHandler)
        audio.pause()
        audio.src = ""
      }
    }
  }, [])

  // Define the toggle mute function
  const toggleMute = useCallback(() => {
    if (!audioRef.current) return

    // If this is the first interaction, start playing the audio
    if (!hasInteracted) {
      // Set the current time to START_TIME
      audioRef.current.currentTime = START_TIME

      // Start playing
      audioRef.current.play().catch(error => {
        console.error("Error playing audio on mute toggle:", error)
      })

      setHasInteracted(true)
    }

    if (isMuted) {
      // Unmute - restore previous volume
      audioRef.current.volume = previousVolumeRef.current
    } else {
      // Mute - save current volume first
      previousVolumeRef.current = volume
      audioRef.current.volume = 0
    }

    setIsMuted(!isMuted)
  }, [isMuted, hasInteracted, volume])

  // Add keyboard shortcuts for when controls are open
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Space to toggle mute/unmute
      if (e.code === 'Space') {
        e.preventDefault()
        toggleMute()
      }

      // Arrow right to skip forward
      if (e.code === 'ArrowRight') {
        skipForward()
      }

      // Arrow left to skip backward
      if (e.code === 'ArrowLeft') {
        skipBackward()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, isMuted, toggleMute])

  // Update volume when it changes and save to localStorage
  useEffect(() => {
    if (audioRef.current) {
      // Only update volume if not muted
      if (!isMuted) {
        // Store current playing state
        const wasPlaying = !audioRef.current.paused

        // Update volume
        audioRef.current.volume = volume
        previousVolumeRef.current = volume

        // Resume playback if it was playing before
        if (wasPlaying && audioRef.current.paused) {
          audioRef.current.play().catch(error => {
            console.error("Error resuming audio after volume change:", error)
          })
        }
      }
    }

    // Save volume preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-music-volume', volume.toString())
    }
  }, [volume, isMuted])

  // hasInteracted state is declared above

  // Skip forward 15 seconds
  const skipForward = () => {
    if (!audioRef.current) return

    const newTime = Math.min(audioRef.current.currentTime + 15, audioRef.current.duration)
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Skip backward 15 seconds
  const skipBackward = () => {
    if (!audioRef.current) return

    const newTime = Math.max(audioRef.current.currentTime - 15, 0)
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Format time in MM:SS format
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00"

    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  // Get the appropriate volume icon based on current volume
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
    if (volume < 0.3) return <Volume className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
    if (volume < 0.7) return <Volume1 className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
    return <Volume2 className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
  }



  // Toggle controls based on device type - now uses a single shared state
  const toggleControls = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Audio controls content - reused in both desktop and mobile views
  const AudioControlsContent = () => (
    <div className="space-y-4">
      {/* Track info */}
      <div className="text-center border border-neon-blue-30 rounded-xl p-2 shadow-neon-blue" style={{ backgroundColor: 'rgba(5, 5, 24, 0.5)' }}>
        <p className="text-sm font-vt323 neon-text-blue">{hasInteracted ? "NOW PLAYING" : "READY TO PLAY"}</p>
        <p className="text-xs font-medium" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Allude by Voyage
        </p>
        <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          {!hasInteracted ? "(Click speaker to start)" : isMuted ? "(Muted)" : ""}
        </p>

        {/* Progress bar */}
        <div className="mt-2 mb-1">
          <AudioSlider
            min={0}
            max={duration || 100} // Use 100 as fallback if duration is not loaded yet
            step={1}
            value={[currentTime]}
            onValueChange={(values) => {
              if (!audioRef.current || duration === 0) return;
              const newTime = values[0];
              audioRef.current.currentTime = newTime;
              setCurrentTime(newTime);
            }}
            onValueCommit={(values) => {
              if (!audioRef.current || duration === 0) return;
              const newTime = values[0];
              // Ensure the final position is set correctly
              audioRef.current.currentTime = newTime;
              setCurrentTime(newTime);
            }}
            aria-label="Seek audio position"
          />
        </div>

        <p className="text-xs text-text-white-60">{formatTime(currentTime)} / {formatTime(duration)}</p>
      </div>

      {/* Playback controls */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={skipBackward}
          className="p-2 rounded-full bg-darker-blue border border-neon-blue hover:border-neon-pink hover:shadow-neon-pink-lg transition-all duration-300"
          aria-label="Skip backward 15 seconds"
        >
          <Rewind className="w-5 h-5 text-neon-blue" />
        </button>

        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-darker-blue border-2 border-neon-pink hover:shadow-neon-pink-lg transition-all duration-300"
          aria-label={isMuted ? "Unmute" : "Mute"}
          title="Toggle mute/unmute"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-neon-pink" />
          ) : (
            <Volume2 className="w-6 h-6 text-neon-pink" />
          )}
        </button>

        <button
          onClick={skipForward}
          className="p-2 rounded-full bg-darker-blue border border-neon-blue hover:border-neon-pink hover:shadow-neon-pink-lg transition-all duration-300"
          aria-label="Skip forward 15 seconds"
        >
          <FastForward className="w-5 h-5 text-neon-blue" />
        </button>
      </div>

      <Separator className="bg-neon-blue-20" />

      {/* Volume controls */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-neon-blue">Volume</span>
          <span className="text-sm text-neon-blue">{Math.round(volume * 100)}%</span>
        </div>
        <div className="py-2">
          <AudioSlider
            min={0}
            max={1}
            step={0.01}
            value={[volume]}
            onValueChange={(values) => {
              const newVolume = values[0];
              // Update state
              setVolume(newVolume);

              // Directly update audio volume to prevent playback interruption
              if (audioRef.current && !isMuted) {
                audioRef.current.volume = newVolume;
              }
            }}
            onValueCommit={(values) => {
              const newVolume = values[0];
              // Ensure final value is set
              setVolume(newVolume);
              if (audioRef.current && !isMuted) {
                audioRef.current.volume = newVolume;
              }
              // Save to localStorage
              if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio-music-volume', newVolume.toString());
              }
            }}
            aria-label="Volume control"
            showValueLabel={false}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
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
                onClick={() => {
                  toggleMute();
                  toggleControls();
                }}
                className="w-12 h-12 rounded-full bg-darker-blue border-2 border-neon-blue flex items-center justify-center transition-all duration-300 hover:border-neon-pink hover:shadow-neon-pink-lg group"
                aria-label={isMuted ? "Unmute music and open controls" : "Mute music and open controls"}
              >
                {getVolumeIcon()}

                {/* Animated sound waves when playing (not muted) */}
                {!isMuted && hasInteracted && (
                  <div className="absolute -top-1 -right-1 w-3 h-3">
                    <span className="absolute w-full h-full rounded-full bg-neon-pink opacity-75 animate-ping"></span>
                    <span className="absolute w-full h-full rounded-full bg-neon-pink"></span>
                  </div>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-darker-blue border border-neon-blue text-white rounded-xl shadow-neon-blue">
              <p>{isMuted ? "Unmute music" : "Mute music"}</p>
              <p className="text-xs text-text-white-70">{hasInteracted ? "Music is playing but muted" : "Click to start music (muted)"}</p>
              <p className="text-xs text-text-white-70">Click to toggle sound and open controls</p>
              <p className="text-xs text-text-white-70">Right-click also opens controls</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Desktop popover - uses shared isOpen state */}
      {!isMobile && isOpen && (
        <div className="absolute bottom-16 right-0 w-72 p-4 bg-darker-blue border border-neon-blue shadow-neon-blue-lg rounded-xl overflow-hidden z-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-vt323 neon-text-pink">Music Player</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-darker-blue/50"
            >
              <X className="w-5 h-5 text-neon-blue" />
            </button>
          </div>
          <AudioControlsContent />
        </div>
      )}

      {/* Mobile dialog - uses shared isOpen state */}
      {isMobile && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent
            className="w-[90vw] max-w-[350px] p-4 bg-darker-blue border border-neon-blue shadow-neon-blue-lg rounded-xl overflow-hidden [&>button]:hidden"
            onOpenAutoFocus={(e) => e.preventDefault()}
            data-audio-player-dialog="true"
            style={{ paddingRight: '1rem' }}
          >
            {/* Add DialogTitle for accessibility */}
            <DialogTitle className="sr-only">Music Player Controls</DialogTitle>

            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-vt323 neon-text-pink">Music Player</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-darker-blue/50"
              >
                <X className="w-5 h-5 text-neon-blue" />
              </button>
            </div>
            <AudioControlsContent />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
