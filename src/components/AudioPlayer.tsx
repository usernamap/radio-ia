'use client';
import { useRef, useState, useEffect } from 'react';

export interface AudioPlayerProps {
  src: string;
  title: string;
  artist: string;
  qualities?: { label: string; src: string }[];
}

export default function AudioPlayer({ src, title, artist, qualities }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      void audio.play();
    }
    setPlaying(!playing);
  };

  const changeQuality = (newSrc: string) => {
    setCurrentSrc(newSrc);
    setPlaying(false);
  };

  return (
    <div className="space-y-2" aria-label="audio player">
      <div className="text-center">
        <span className="block text-lg font-semibold">{title}</span>
        <span className="block text-sm text-gray-400">{artist}</span>
      </div>
      <audio ref={audioRef} src={currentSrc} onEnded={() => setPlaying(false)} />
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-500"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
          className="flex-1"
        />
        {qualities && (
          <select
            onChange={(e) => changeQuality(e.target.value)}
            value={currentSrc}
            aria-label="Quality"
            className="rounded bg-gray-800 text-white"
          >
            {qualities.map((q) => (
              <option key={q.src} value={q.src}>
                {q.label}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
