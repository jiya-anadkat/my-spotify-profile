import { profile } from "@/data/profileData";
import { MapPin, Mail, Linkedin, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/contexts/AudioContext";

const ProfileHeader = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div
      className="relative px-8 pt-16 pb-8"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      <div className="flex items-end gap-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-56 h-56 rounded-full object-cover shadow-2xl animate-scale-in"
        />
        <div className="pb-4 animate-slide-up">
          <p className="text-sm font-medium uppercase tracking-wider mb-2">Profile</p>
          <h1 className="text-7xl font-bold mb-6">{profile.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">{profile.bio}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:underline"
                aria-label={`Email ${profile.name}`}
              >
                {profile.email}
              </a>
            </span>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              linkedin
            </a>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="mt-8 flex items-center gap-6">
        <Button
          size="lg"
          onClick={togglePlay}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-lg"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-1" />
          )}
        </Button>
        <span className="text-muted-foreground text-sm">{profile.title}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
