import { ChevronDown } from "lucide-react";
import { Experience, Education, Project, BlogPost } from "@/data/profileData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailItem } from "@/components/DetailPanel";

interface MobileDetailViewProps {
  item: DetailItem | null;
  onClose: () => void;
}

const MobileDetailView = ({ item, onClose }: MobileDetailViewProps) => {
  if (!item) return null;

  // Extract dominant color hint per type for gradient background
  const gradientMap = {
    experience: "from-amber-900/80 via-background to-background",
    education: "from-blue-900/80 via-background to-background",
    project: "from-purple-900/80 via-background to-background",
    blog: "from-rose-900/80 via-background to-background",
  };

  const getImageAndTitle = () => {
    switch (item.type) {
      case "experience": {
        const d = item.data as Experience;
        return { image: d.image, title: d.role, subtitle: d.company };
      }
      case "education": {
        const d = item.data as Education;
        return { image: d.image, title: d.degree, subtitle: d.institution };
      }
      case "project": {
        const d = item.data as Project;
        return { image: d.image, title: d.title, subtitle: d.technologies.join(" · ") };
      }
      case "blog": {
        const d = item.data as BlogPost;
        return { image: d.image, title: d.title, subtitle: `${d.date} · ${d.readTime}` };
      }
    }
  };

  const { image, title, subtitle } = getImageAndTitle();

  const renderBody = () => {
    switch (item.type) {
      case "experience": {
        const exp = item.data as Experience;
        return (
          <>
            <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
            <p className="text-lg leading-relaxed font-medium mb-6">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-muted text-muted-foreground">
                  {skill}
                </Badge>
              ))}
            </div>
          </>
        );
      }
      case "education": {
        const edu = item.data as Education;
        return (
          <>
            <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
            <p className="text-lg leading-relaxed font-medium">{edu.description}</p>
          </>
        );
      }
      case "project": {
        const proj = item.data as Project;
        return (
          <>
            <p className="text-lg leading-relaxed font-medium mb-6">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
            {proj.link && (
              <Button asChild variant="outline" className="w-full">
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            )}
          </>
        );
      }
      case "blog": {
        const blog = item.data as BlogPost;
        return (
          <>
            <p className="text-lg leading-relaxed font-medium mb-6">{blog.excerpt}</p>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                Read on Medium
              </a>
            </Button>
          </>
        );
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] md:hidden flex flex-col bg-background animate-slide-up overflow-y-auto">
      {/* Gradient background like lyrics view */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradientMap[item.type]} pointer-events-none`} />

      <div className="relative z-10 flex flex-col min-h-full">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Close"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {item.type}
          </p>
          <div className="w-10" />
        </div>

        {/* Large image */}
        <div className="px-10 py-4">
          <img
            src={image}
            alt={title}
            className="w-full aspect-square object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Title area */}
        <div className="px-6 pb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Body / "Lyrics" area */}
        <div className="px-6 py-4 flex-1">
          <div className="bg-muted/30 rounded-xl p-5">
            {renderBody()}
          </div>
        </div>

        {/* Bottom spacer for safe area */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default MobileDetailView;
