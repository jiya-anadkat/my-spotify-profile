import { blogPosts } from "@/data/profileData";
import { Clock, Play, ExternalLink } from "lucide-react";

const BlogSection = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div
        className="px-8 pt-16 pb-8"
        style={{
          background: "linear-gradient(180deg, hsl(160 60% 25%) 0%, hsl(var(--background)) 100%)",
        }}
      >
        <div className="flex items-end gap-6">
          <div className="w-48 h-48 rounded bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl">
            <span className="text-6xl">✍️</span>
          </div>
          <div className="pb-2">
            <p className="text-sm font-medium uppercase tracking-wider mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-4">Medium Blog</h1>
            <p className="text-muted-foreground">
              {blogPosts.length} articles · Thoughts on product management
            </p>
          </div>
        </div>
      </div>

      {/* Blog list */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 text-sm text-muted-foreground border-b border-border mb-2">
          <span>#</span>
          <span>Title</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
          </span>
          <span></span>
        </div>

        {blogPosts.map((blog, index) => (
          <a
            key={blog.id}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-3 rounded-md hover:bg-secondary transition-colors items-center animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-6 text-muted-foreground group-hover:hidden">{index + 1}</span>
            <Play className="w-4 h-4 hidden group-hover:block text-foreground" />

            <div className="flex items-center gap-3 min-w-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-10 h-10 rounded object-cover"
              />
              <div className="min-w-0">
                <p className="font-medium truncate group-hover:text-primary transition-colors">
                  {blog.title}
                </p>
                <p className="text-sm text-muted-foreground truncate">{blog.excerpt}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>

            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
