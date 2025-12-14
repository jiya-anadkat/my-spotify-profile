import { education } from "@/data/profileData";
import { Clock, Play } from "lucide-react";
import { DetailItem } from "@/components/DetailPanel";

interface EducationSectionProps {
  onSelectItem: (item: DetailItem) => void;
}

const EducationSection = ({ onSelectItem }: EducationSectionProps) => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div
        className="px-8 pt-16 pb-8"
        style={{
          background: "linear-gradient(180deg, hsl(220 60% 30%) 0%, hsl(var(--background)) 100%)",
        }}
      >
        <div className="flex items-end gap-6">
          <div className="w-48 h-48 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl">
            <span className="text-6xl">🎓</span>
          </div>
          <div className="pb-2">
            <p className="text-sm font-medium uppercase tracking-wider mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-4">Education</h1>
            <p className="text-muted-foreground">
              {education.length} degrees · Academic background
            </p>
          </div>
        </div>
      </div>

      {/* Track list */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 text-sm text-muted-foreground border-b border-border mb-2">
          <span>#</span>
          <span>Degree</span>
          <span>Institution</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
          </span>
        </div>

        {education.map((edu, index) => (
          <button
            key={edu.id}
            onClick={() => onSelectItem({ type: 'education', data: edu })}
            className="group w-full grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 rounded-md hover:bg-secondary transition-colors items-center animate-slide-up text-left"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-6 text-muted-foreground group-hover:hidden">{index + 1}</span>
            <Play className="w-4 h-4 hidden group-hover:block text-foreground" />

            <div className="flex items-center gap-3 min-w-0">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-10 h-10 rounded object-cover"
              />
              <div className="min-w-0">
                <p className="font-medium truncate">{edu.degree}</p>
                <p className="text-sm text-muted-foreground truncate">{edu.description}</p>
              </div>
            </div>

            <span className="text-muted-foreground">{edu.institution}</span>

            <span className="text-muted-foreground text-sm">{edu.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
