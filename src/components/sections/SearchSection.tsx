import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { getAllLibraryItems, Experience, Education, Project, BlogPost } from "@/data/profileData";
import { Briefcase, GraduationCap, FolderKanban, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { DetailItem } from "@/components/DetailPanel";

interface SearchSectionProps {
  onNavigate: (section: string) => void;
  onSelectItem: (item: DetailItem) => void;
}

const SearchSection = ({ onNavigate, onSelectItem }: SearchSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const allItems = getAllLibraryItems();

  const filteredItems = searchQuery
    ? allItems.filter((item) => {
        const searchLower = searchQuery.toLowerCase();
        if (item.type === "experience") {
          const exp = item.data as Experience;
          return (
            exp.company.toLowerCase().includes(searchLower) ||
            exp.role.toLowerCase().includes(searchLower) ||
            exp.description.toLowerCase().includes(searchLower) ||
            exp.skills.some((s) => s.toLowerCase().includes(searchLower))
          );
        } else if (item.type === "education") {
          const edu = item.data as Education;
          return (
            edu.institution.toLowerCase().includes(searchLower) ||
            edu.degree.toLowerCase().includes(searchLower) ||
            edu.description.toLowerCase().includes(searchLower)
          );
        } else if (item.type === "project") {
          const proj = item.data as Project;
          return (
            proj.title.toLowerCase().includes(searchLower) ||
            proj.description.toLowerCase().includes(searchLower) ||
            proj.technologies.some((t) => t.toLowerCase().includes(searchLower))
          );
        } else {
          const blog = item.data as BlogPost;
          return (
            blog.title.toLowerCase().includes(searchLower) ||
            blog.excerpt.toLowerCase().includes(searchLower)
          );
        }
      })
    : [];

  const getIcon = (type: string) => {
    switch (type) {
      case "experience":
        return Briefcase;
      case "education":
        return GraduationCap;
      case "project":
        return FolderKanban;
      case "blog":
        return BookOpen;
      default:
        return Briefcase;
    }
  };

  const getTitle = (item: typeof allItems[0]) => {
    switch (item.type) {
      case "experience":
        return (item.data as Experience).role;
      case "education":
        return (item.data as Education).degree;
      case "project":
        return (item.data as Project).title;
      case "blog":
        return (item.data as BlogPost).title;
    }
  };

  const getSubtitle = (item: typeof allItems[0]) => {
    switch (item.type) {
      case "experience":
        return (item.data as Experience).company;
      case "education":
        return (item.data as Education).institution;
      case "project":
        return (item.data as Project).technologies.join(" · ");
      case "blog":
        return (item.data as BlogPost).date;
    }
  };

  const categories = [
    { id: "experience", label: "Experience", color: "bg-orange-600" },
    { id: "education", label: "Education", color: "bg-blue-600" },
    { id: "projects", label: "Projects", color: "bg-purple-600" },
    { id: "blog", label: "Blog", color: "bg-emerald-600" },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {!searchQuery ? (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Browse all</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate(cat.id)}
                className={cn(
                  "relative h-48 rounded-lg overflow-hidden transition-transform hover:scale-105",
                  cat.color
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
                <span className="absolute bottom-4 left-4 text-2xl font-bold">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""} for "{searchQuery}"
          </h2>

          {filteredItems.length === 0 ? (
            <p className="text-muted-foreground">No results found. Try a different search term.</p>
          ) : (
            <div className="space-y-2">
              {filteredItems.map((item) => {
                const Icon = getIcon(item.type);
                return (
                  <button
                    key={item.data.id}
                    onClick={() => onSelectItem({ type: item.type, data: item.data })}
                    className="w-full flex items-center gap-4 p-3 rounded-md hover:bg-secondary transition-colors text-left"
                  >
                    <img
                      src={(item.data as any).image}
                      alt={getTitle(item)}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{getTitle(item)}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="capitalize">{item.type}</span>
                        <span>·</span>
                        <span className="truncate">{getSubtitle(item)}</span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSection;
