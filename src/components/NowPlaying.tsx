import { profile } from "@/data/profileData";
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const NowPlaying = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-20 bg-spotify-black border-t border-border px-4 flex items-center justify-between z-50">
      {/* Now playing info */}
      <div className="flex items-center gap-3 w-72">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-14 h-14 rounded"
        />
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{profile.name}</p>
          <p className="text-xs text-muted-foreground truncate">{profile.title}</p>
        </div>
      </div>

      {/* Playback controls */}
      <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">
        <div className="flex items-center gap-6">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Play className="w-4 h-4 ml-0.5 fill-current" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-muted-foreground">0:00</span>
          <Slider defaultValue={[33]} max={100} step={1} className="flex-1" />
          <span className="text-xs text-muted-foreground">3:45</span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 w-72 justify-end">
        <Volume2 className="w-4 h-4 text-muted-foreground" />
        <Slider defaultValue={[70]} max={100} step={1} className="w-24" />
      </div>
    </footer>
  );
};

export default NowPlaying;
