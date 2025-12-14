import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  image: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  className?: string;
}

const ContentCard = ({ image, title, subtitle, onClick, className }: ContentCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group bg-card hover:bg-card-hover p-4 rounded-lg transition-all duration-300 text-left w-full",
        className
      )}
    >
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
            <Play className="w-5 h-5 fill-current text-primary-foreground ml-0.5" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-foreground truncate mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{subtitle}</p>
    </button>
  );
};

export default ContentCard;
