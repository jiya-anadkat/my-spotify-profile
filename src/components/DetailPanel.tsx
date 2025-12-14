import { X } from "lucide-react";
import { Experience, Education, Project, BlogPost } from "@/data/profileData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type DetailItem = {
  type: 'experience' | 'education' | 'project' | 'blog';
  data: Experience | Education | Project | BlogPost;
};

interface DetailPanelProps {
  item: DetailItem | null;
  onClose: () => void;
}

const DetailPanel = ({ item, onClose }: DetailPanelProps) => {
  if (!item) return null;

  const renderContent = () => {
    switch (item.type) {
      case 'experience': {
        const exp = item.data as Experience;
        return (
          <>
            <img
              src={exp.image}
              alt={exp.company}
              className="w-full aspect-square object-cover rounded-lg shadow-2xl mb-6"
            />
            <h2 className="text-2xl font-bold mb-1">{exp.role}</h2>
            <p className="text-lg text-primary mb-1">{exp.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>
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
      case 'education': {
        const edu = item.data as Education;
        return (
          <>
            <img
              src={edu.image}
              alt={edu.institution}
              className="w-full aspect-square object-cover rounded-lg shadow-2xl mb-6"
            />
            <h2 className="text-2xl font-bold mb-1">{edu.degree}</h2>
            <p className="text-lg text-primary mb-1">{edu.institution}</p>
            <p className="text-sm text-muted-foreground mb-4">{edu.duration}</p>
            <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
          </>
        );
      }
      case 'project': {
        const proj = item.data as Project;
        return (
          <>
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full aspect-square object-cover rounded-lg shadow-2xl mb-6"
            />
            <h2 className="text-2xl font-bold mb-2">{proj.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{proj.description}</p>
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
      case 'blog': {
        const blog = item.data as BlogPost;
        return (
          <>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full aspect-square object-cover rounded-lg shadow-2xl mb-6"
            />
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {blog.date} · {blog.readTime}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">{blog.excerpt}</p>
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
    <aside className="hidden xl:block fixed top-0 right-0 w-80 h-screen bg-spotify-darkgray border-l border-border overflow-y-auto animate-slide-in-right">
      <div className="p-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close panel"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        {renderContent()}
      </div>
    </aside>
  );
};

export default DetailPanel;
