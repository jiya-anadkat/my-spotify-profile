import { profile } from "@/data/profileData";
import { MapPin, Mail, Linkedin, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/contexts/AudioContext";

const ProfileHeader = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div
      className="relative px-4 pt-8 pb-6 md:px-8 md:pt-16 md:pb-8"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      <div className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left gap-4 md:gap-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl animate-scale-in"
        />
        <div className="md:pb-4 animate-slide-up min-w-0 w-full">
          <p className="text-xs md:text-sm font-medium uppercase tracking-wider mb-2">Profile</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 break-words">{profile.name}</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-4">{profile.bio}</p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-muted-foreground items-center">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              {profile.location}
            </span>
            <span className="flex items-center gap-2 max-w-full min-w-0">
              <Mail className="w-4 h-4 shrink-0" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:underline truncate"
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
              <Linkedin className="w-4 h-4 shrink-0" />
              linkedin
            </a>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="mt-6 md:mt-8 flex items-center gap-6 justify-center md:justify-start">
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
