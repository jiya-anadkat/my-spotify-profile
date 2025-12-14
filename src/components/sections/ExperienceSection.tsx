import { experiences } from "@/data/profileData";
import { Clock, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div
        className="px-8 pt-16 pb-8"
        style={{
          background: "linear-gradient(180deg, hsl(30 60% 25%) 0%, hsl(var(--background)) 100%)",
        }}
      >
        <div className="flex items-end gap-6">
          <div className="w-48 h-48 rounded bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl">
            <span className="text-6xl">💼</span>
          </div>
          <div className="pb-2">
            <p className="text-sm font-medium uppercase tracking-wider mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-4">Experience</h1>
            <p className="text-muted-foreground">
              {experiences.length} positions · My professional journey
            </p>
          </div>
        </div>
      </div>

      {/* Track list */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 text-sm text-muted-foreground border-b border-border mb-2">
          <span>#</span>
          <span>Title</span>
          <span>Company</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
          </span>
        </div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="group grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 rounded-md hover:bg-secondary transition-colors items-center animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-6 text-muted-foreground group-hover:hidden">{index + 1}</span>
            <Play className="w-4 h-4 hidden group-hover:block text-foreground" />

            <div className="flex items-center gap-3 min-w-0">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-10 h-10 rounded object-cover"
              />
              <div className="min-w-0">
                <p className="font-medium truncate">{exp.role}</p>
                <p className="text-sm text-muted-foreground truncate">{exp.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-muted-foreground">{exp.company}</span>
              {exp.skills.slice(0, 2).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>

            <span className="text-muted-foreground text-sm">{exp.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
