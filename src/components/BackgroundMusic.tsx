"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  audioSrc?: string;
}

export default function BackgroundMusic({ audioSrc }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!audioSrc) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <audio ref={audioRef} src={audioSrc} loop preload="none" />
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-lg hover:bg-slate-800 transition-all border border-slate-700 focus:ring-2 focus:ring-sky-400"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>Music On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-slate-400" />
            <span>Music Off</span>
          </>
        )}
      </button>
    </div>
  );
}
