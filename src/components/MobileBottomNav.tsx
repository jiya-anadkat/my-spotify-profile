import { Home, Search, Library } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MobileBottomNav = ({ activeSection, onSectionChange }: MobileBottomNavProps) => {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "search", label: "Search", icon: Search },
    { id: "library", label: "Your Library", icon: Library },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-spotify-black border-t border-border md:hidden">
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const isActive =
            tab.id === "library"
              ? ["experience", "education", "projects", "blog"].includes(activeSection)
              : activeSection === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSectionChange(tab.id === "library" ? "experience" : tab.id)}
              className={cn(
                "flex flex-col items-center gap-0.5 py-1 px-4 transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
