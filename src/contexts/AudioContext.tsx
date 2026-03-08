import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from "react";

const TRACK = {
  title: "BossaBossa",
  artist: "Kevin MacLeod",
  src: "/audio/BossaBossa.mp3",
};

interface AudioContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  track: typeof TRACK;
  togglePlay: () => void;
  seek: (val: number[]) => void;
  setVolume: (v: number) => void;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be inside AudioProvider");
  return ctx;
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    const audio = new Audio(TRACK.src);
    audio.preload = "metadata";
    audioRef.current = audio;
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    audio.addEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => { audio.pause(); audio.src = ""; };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause(); else audio.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const seek = useCallback((val: number[]) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const time = (val[0] / 100) * duration;
    audio.currentTime = time;
    setCurrentTime(time);
  }, [duration]);

  return (
    <AudioCtx.Provider value={{ isPlaying, currentTime, duration, volume, track: TRACK, togglePlay, seek, setVolume }}>
      {children}
    </AudioCtx.Provider>
  );
};
