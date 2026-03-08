import { useState } from "react";
import { Briefcase, GraduationCap, FolderKanban, BookOpen, ChevronLeft, Play, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { experiences, education, projects, blogPosts } from "@/data/profileData";
import { Badge } from "@/components/ui/badge";
import { DetailItem } from "@/components/DetailPanel";

type LibraryCategory = "experience" | "education" | "projects" | "blog";

interface MobileLibrarySectionProps {
  onSelectItem: (item: DetailItem) => void;
}

const playlists: { id: LibraryCategory; label: string; icon: typeof Briefcase; count: number; gradient: string }[] = [
  { id: "experience", label: "Experience", icon: Briefcase, count: experiences.length, gradient: "from-amber-600 to-orange-700" },
  { id: "education", label: "Education", icon: GraduationCap, count: education.length, gradient: "from-blue-600 to-indigo-700" },
  { id: "projects", label: "Projects", icon: FolderKanban, count: projects.length, gradient: "from-purple-600 to-pink-700" },
  { id: "blog", label: "Medium Blog", icon: BookOpen, count: blogPosts.length, gradient: "from-rose-600 to-red-700" },
];

const MobileLibrarySection = ({ onSelectItem }: MobileLibrarySectionProps) => {
  const [activePlaylist, setActivePlaylist] = useState<LibraryCategory | null>(null);

  if (activePlaylist) {
    return (
      <PlaylistDetail
        category={activePlaylist}
        onBack={() => setActivePlaylist(null)}
        onSelectItem={onSelectItem}
      />
    );
  }

  return (
    <div className="animate-fade-in px-4 pt-12 pb-8">
      <h1 className="text-2xl font-bold mb-6">Your Library</h1>

      {/* Filter chips */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {["Playlists", "Recently Added"].map((chip) => (
          <span
            key={chip}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-foreground whitespace-nowrap"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Playlist list */}
      <div className="space-y-2">
        {playlists.map((pl) => (
          <button
            key={pl.id}
            onClick={() => setActivePlaylist(pl.id)}
            className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-secondary/50 transition-colors text-left"
          >
            <div className={cn("w-14 h-14 rounded flex items-center justify-center bg-gradient-to-br shadow-lg", pl.gradient)}>
              <pl.icon className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <p className="font-medium">{pl.label}</p>
              <p className="text-xs text-muted-foreground">Playlist · {pl.count} items</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Sub-view: list of items in a playlist
interface PlaylistDetailProps {
  category: LibraryCategory;
  onBack: () => void;
  onSelectItem: (item: DetailItem) => void;
}

const PlaylistDetail = ({ category, onBack, onSelectItem }: PlaylistDetailProps) => {
  const playlist = playlists.find((p) => p.id === category)!;

  const items = (() => {
    switch (category) {
      case "experience":
        return experiences.map((exp) => ({
          key: exp.id,
          image: exp.image,
          title: exp.role,
          subtitle: exp.company,
          meta: exp.duration,
          detailItem: { type: "experience" as const, data: exp },
        }));
      case "education":
        return education.map((edu) => ({
          key: edu.id,
          image: edu.image,
          title: edu.degree,
          subtitle: edu.institution,
          meta: edu.duration,
          detailItem: { type: "education" as const, data: edu },
        }));
      case "projects":
        return projects.map((proj) => ({
          key: proj.id,
          image: proj.image,
          title: proj.title,
          subtitle: proj.technologies.join(" · "),
          meta: "",
          detailItem: { type: "project" as const, data: proj },
        }));
      case "blog":
        return blogPosts.map((blog) => ({
          key: blog.id,
          image: blog.image,
          title: blog.title,
          subtitle: `${blog.date} · ${blog.readTime}`,
          meta: blog.readTime,
          detailItem: { type: "blog" as const, data: blog },
        }));
    }
  })();

  return (
    <div className="animate-fade-in">
      {/* Header with gradient */}
      <div
        className="px-4 pt-10 pb-6"
        style={{
          background: `linear-gradient(180deg, hsl(var(--muted)) 0%, hsl(var(--background)) 100%)`,
        }}
      >
        <button onClick={onBack} className="mb-4 p-1">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-end gap-4">
          <div className={cn("w-28 h-28 rounded flex items-center justify-center bg-gradient-to-br shadow-2xl", playlist.gradient)}>
            <playlist.icon className="w-12 h-12 text-foreground" />
          </div>
          <div className="pb-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Playlist</p>
            <h1 className="text-2xl font-bold">{playlist.label}</h1>
            <p className="text-xs text-muted-foreground">{items.length} items</p>
          </div>
        </div>
      </div>

      {/* Track list */}
      <div className="px-4 py-2">
        {items.map((item, index) => (
          <button
            key={item.key}
            onClick={() => onSelectItem(item.detailItem)}
            className="group flex items-center gap-3 w-full py-3 px-1 rounded-md hover:bg-secondary/50 transition-colors text-left animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 rounded object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{item.title}</p>
              <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileLibrarySection;
