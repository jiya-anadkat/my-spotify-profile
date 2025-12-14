import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "What do you want to find?" }: SearchBarProps) => {
  return (
    <div className="relative max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-12 pr-10 py-6 bg-card border-0 rounded-full text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-foreground"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
