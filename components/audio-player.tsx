"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Volume1, Volume, Play, Pause, SkipForward, SkipBack, Rewind, FastForward } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(() => {
    // Try to get saved volume from localStorage, default to 0.7
    if (typeof window !== 'undefined') {
      const savedVolume = localStorage.getItem('portfolio-music-volume')
      return savedVolume ? parseFloat(savedVolume) : 0.7
    }
    return 0.7
  })
  const [showControls, setShowControls] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio("/music.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = volume

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

  // Define the toggle play function
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error)
      })
    }

    setIsPlaying(!isPlaying)
  }

  // Add keyboard shortcuts for when controls are open
  useEffect(() => {
    if (!showControls) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Space to toggle play/pause
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
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
  }, [showControls])

  // Update volume when it changes and save to localStorage
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }

    // Save volume preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-music-volume', volume.toString())
    }
  }, [volume])

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

  // Seek to a specific position when clicking on the progress bar
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || duration === 0) return

    // Calculate click position as a percentage of the bar width
    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const clickPositionX = e.clientX - rect.left
    const percentage = clickPositionX / rect.width

    // Set the new time based on the percentage
    const newTime = percentage * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Get the appropriate volume icon based on current volume
  const getVolumeIcon = () => {
    if (volume === 0 || !isPlaying) return <VolumeX className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
    if (volume < 0.3) return <Volume className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
    if (volume < 0.7) return <Volume1 className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
    return <Volume2 className="w-6 h-6 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={showControls} onOpenChange={setShowControls}>
        <PopoverTrigger asChild>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-darker-blue border-2 border-neon-blue flex items-center justify-center transition-all duration-300 hover:border-neon-pink hover:shadow-[0_0_15px_rgba(255,42,255,0.5)] group"
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                  onContextMenu={(e) => {
                    e.preventDefault()
                    setShowControls(true)
                  }}
                >
                  {getVolumeIcon()}

                  {/* Animated sound waves when playing */}
                  {isPlaying && (
                    <div className="absolute -top-1 -right-1 w-3 h-3">
                      <span className="absolute w-full h-full rounded-full bg-neon-pink opacity-75 animate-ping"></span>
                      <span className="absolute w-full h-full rounded-full bg-neon-pink"></span>
                    </div>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-darker-blue border border-neon-blue text-white">
                <p>{isPlaying ? "Pause music" : "Play music"}</p>
                <p className="text-xs text-white/70">Right-click for music controls</p>
                <p className="text-xs text-white/70">Skip forward/backward by 15s</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-4 bg-darker-blue border border-neon-blue shadow-[0_0_15px_rgba(42,253,255,0.3)]">
          <div className="space-y-4">
            <h4 className="text-lg font-vt323 neon-text-pink text-center">MUSIC CONTROLS</h4>

            {/* Track info */}
            <div className="text-center border border-neon-blue/30 rounded p-2 bg-darker-blue/50">
              <p className="text-sm font-vt323 neon-text-blue">NOW PLAYING</p>
              <p className="text-xs text-white/80">Background Music</p>

              {/* Progress bar */}
              <div
                className="mt-2 mb-1 h-2 w-full bg-darker-blue rounded overflow-hidden cursor-pointer"
                onClick={handleProgressBarClick}
                title="Click to seek"
              >
                <div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-pink"
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                ></div>
              </div>

              <p className="text-xs text-white/60">{formatTime(currentTime)} / {formatTime(duration)}</p>
            </div>

            {/* Playback controls */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={skipBackward}
                className="p-2 rounded-full bg-darker-blue border border-neon-blue hover:border-neon-pink hover:shadow-[0_0_10px_rgba(255,42,255,0.5)] transition-all duration-300"
                aria-label="Skip backward 15 seconds"
              >
                <Rewind className="w-5 h-5 text-neon-blue" />
              </button>

              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-darker-blue border-2 border-neon-pink hover:shadow-[0_0_15px_rgba(255,42,255,0.5)] transition-all duration-300"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-neon-pink" />
                ) : (
                  <Play className="w-6 h-6 text-neon-pink" />
                )}
              </button>

              <button
                onClick={skipForward}
                className="p-2 rounded-full bg-darker-blue border border-neon-blue hover:border-neon-pink hover:shadow-[0_0_10px_rgba(255,42,255,0.5)] transition-all duration-300"
                aria-label="Skip forward 15 seconds"
              >
                <FastForward className="w-5 h-5 text-neon-blue" />
              </button>
            </div>

            <Separator className="bg-neon-blue/20" />

            {/* Volume controls */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-neon-blue">Volume</span>
                <span className="text-sm text-neon-blue">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full audio-player-range"
              />
            </div>

            {/* Seek controls */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={skipBackward}
                className="py-2 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_rgba(42,253,255,0.5)] transition-all duration-300 rounded font-vt323 flex items-center justify-center gap-1"
              >
                <Rewind className="w-4 h-4" /> -15s
              </button>

              <button
                onClick={skipForward}
                className="py-2 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_rgba(42,253,255,0.5)] transition-all duration-300 rounded font-vt323 flex items-center justify-center gap-1"
              >
                +15s <FastForward className="w-4 h-4" />
              </button>
            </div>

            {/* Keyboard shortcuts */}
            <div className="text-center text-xs text-white/60 border-t border-neon-blue/20 pt-2 mt-2">
              <p>Keyboard shortcuts (when panel is open):</p>
              <div className="grid grid-cols-3 gap-1 mt-1">
                <div><span className="text-neon-blue">Space</span> - Play/Pause</div>
                <div><span className="text-neon-blue">←</span> - Back 15s</div>
                <div><span className="text-neon-blue">→</span> - Forward 15s</div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
