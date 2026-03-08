import { profile } from "@/data/profileData";
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useAudio } from "@/contexts/AudioContext";

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const NowPlaying = () => {
  const { isPlaying, currentTime, duration, volume, track, togglePlay, seek, setVolume } = useAudio();
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const PlayPauseIcon = isPlaying ? Pause : Play;

  return (
    <>
      {/* Mobile compact bar */}
      <footer className="fixed bottom-14 left-0 right-0 h-14 bg-spotify-black border-t border-border px-3 flex items-center z-40 md:hidden">
        <img src={profile.avatar} alt={profile.name} className="w-10 h-10 rounded" />
        <div className="ml-3 min-w-0 flex-1">
          <p className="text-sm font-medium truncate">{track.title}</p>
          <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
        </div>
        <button onClick={togglePlay} className="w-8 h-8 flex items-center justify-center">
          <PlayPauseIcon className="w-5 h-5 fill-current" />
        </button>
      </footer>

      {/* Desktop full bar */}
      <footer className="hidden md:flex fixed bottom-0 left-0 right-0 h-20 bg-spotify-black border-t border-border px-4 items-center justify-between z-50">
        <div className="flex items-center gap-3 w-72">
          <img src={profile.avatar} alt={profile.name} className="w-14 h-14 rounded" />
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">{track.title}</p>
            <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">
          <div className="flex items-center gap-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors"><Shuffle className="w-4 h-4" /></button>
            <button className="text-muted-foreground hover:text-foreground transition-colors"><SkipBack className="w-5 h-5" /></button>
            <button onClick={togglePlay} className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <PlayPauseIcon className={`w-4 h-4 ${!isPlaying ? "ml-0.5" : ""} fill-current`} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors"><SkipForward className="w-5 h-5" /></button>
            <button className="text-muted-foreground hover:text-foreground transition-colors"><Repeat className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            <Slider value={[progress]} max={100} step={0.1} onValueChange={seek} className="flex-1" />
            <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-72 justify-end">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <Slider value={[volume]} max={100} step={1} onValueChange={(v) => setVolume(v[0])} className="w-24" />
        </div>
      </footer>
    </>
  );
};

export default NowPlaying;
