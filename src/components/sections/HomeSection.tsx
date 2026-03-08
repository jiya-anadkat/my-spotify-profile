import ProfileHeader from "@/components/ProfileHeader";
import ContentCard from "@/components/ContentCard";
import { experiences, projects, blogPosts } from "@/data/profileData";
import { DetailItem } from "@/components/DetailPanel";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
  onSelectItem: (item: DetailItem) => void;
}

const HomeSection = ({ onNavigate, onSelectItem }: HomeSectionProps) => {
  return (
    <div className="animate-fade-in">
      <ProfileHeader />

      <div className="px-8 py-6 space-y-8">
        {/* Featured Experience */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold hover:underline cursor-pointer" onClick={() => onNavigate("experience")}>
              Featured Experience
            </h2>
            <button
              onClick={() => onNavigate("experience")}
              className="text-sm text-muted-foreground hover:text-foreground font-semibold transition-colors"
            >
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {experiences.slice(0, 5).map((exp) => (
              <ContentCard
                key={exp.id}
                image={exp.image}
                title={exp.role}
                subtitle={exp.company}
                onClick={() => onSelectItem({ type: 'experience', data: exp })}
              />
            ))}
          </div>
        </section>

        {/* Latest Projects */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold hover:underline cursor-pointer" onClick={() => onNavigate("projects")}>
              Latest Projects
            </h2>
            <button
              onClick={() => onNavigate("projects")}
              className="text-sm text-muted-foreground hover:text-foreground font-semibold transition-colors"
            >
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ContentCard
                key={project.id}
                image={project.image}
                title={project.title}
                subtitle={project.technologies.join(" · ")}
                onClick={() => onSelectItem({ type: 'project', data: project })}
              />
            ))}
          </div>
        </section>

        {/* Recent Blogs */}
        <section className="pb-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold hover:underline cursor-pointer" onClick={() => onNavigate("blog")}>
              Recent Blog Posts
            </h2>
            <button
              onClick={() => onNavigate("blog")}
              className="text-sm text-muted-foreground hover:text-foreground font-semibold transition-colors"
            >
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {blogPosts.slice(0, 4).map((blog) => (
              <ContentCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                subtitle={`${blog.date} · ${blog.readTime}`}
                onClick={() => onSelectItem({ type: 'blog', data: blog })}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
