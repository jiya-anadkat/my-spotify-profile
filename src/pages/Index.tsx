import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import NowPlaying from "@/components/NowPlaying";
import HomeSection from "@/components/sections/HomeSection";
import SearchSection from "@/components/sections/SearchSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onNavigate={setActiveSection} />;
      case "search":
        return <SearchSection onNavigate={setActiveSection} />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "projects":
        return <ProjectsSection />;
      case "blog":
        return <BlogSection />;
      default:
        return <HomeSection onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-spotify-black">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 bg-background rounded-lg m-2 mb-24 overflow-y-auto">
        {renderSection()}
      </main>

      <NowPlaying />
    </div>
  );
};

export default Index;
