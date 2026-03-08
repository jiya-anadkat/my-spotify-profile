import { Home, Search, Library, Briefcase, GraduationCap, FolderKanban, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const mainNav = [
    { id: "home", label: "Home", icon: Home },
    { id: "search", label: "Search", icon: Search },
  ];

  const libraryItems = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "blog", label: "Medium Blog", icon: BookOpen },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-spotify-black p-2 flex-col gap-2">
      {/* Main Navigation */}
      <nav className="bg-card rounded-lg p-4">
        <ul className="space-y-2">
          {mainNav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex items-center gap-4 w-full px-3 py-2 rounded-md transition-colors font-medium",
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Library */}
      <nav className="bg-card rounded-lg p-4 flex-1">
        <div className="flex items-center gap-3 px-3 mb-4">
          <Library className="w-6 h-6 text-muted-foreground" />
          <span className="font-semibold text-muted-foreground">Your Library</span>
        </div>

        <ul className="space-y-1">
          {libraryItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex items-center gap-3 w-full px-3 py-3 rounded-md transition-all group",
                  activeSection === item.id
                    ? "bg-secondary text-foreground"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded flex items-center justify-center transition-colors",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted group-hover:bg-muted/80"
                  )}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">Playlist</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
