import { projects } from "@/data/profileData";
import ContentCard from "@/components/ContentCard";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div
        className="px-8 pt-16 pb-8"
        style={{
          background: "linear-gradient(180deg, hsl(270 60% 30%) 0%, hsl(var(--background)) 100%)",
        }}
      >
        <div className="flex items-end gap-6">
          <div className="w-48 h-48 rounded bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl">
            <span className="text-6xl">🚀</span>
          </div>
          <div className="pb-2">
            <p className="text-sm font-medium uppercase tracking-wider mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground">
              {projects.length} projects · Side projects & work highlights
            </p>
          </div>
        </div>
      </div>

      {/* Project grid */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ContentCard
                image={project.image}
                title={project.title}
                subtitle={project.technologies.join(" · ")}
              />
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
