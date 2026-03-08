import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import NowPlaying from "@/components/NowPlaying";
import MobileBottomNav from "@/components/MobileBottomNav";
import MobileDetailView from "@/components/MobileDetailView";
import HomeSection from "@/components/sections/HomeSection";
import SearchSection from "@/components/sections/SearchSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import DetailPanel, { DetailItem } from "@/components/DetailPanel";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedItem, setSelectedItem] = useState<DetailItem | null>(null);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onNavigate={setActiveSection} onSelectItem={setSelectedItem} />;
      case "search":
        return <SearchSection onNavigate={setActiveSection} onSelectItem={setSelectedItem} />;
      case "experience":
        return <ExperienceSection onSelectItem={setSelectedItem} />;
      case "education":
        return <EducationSection onSelectItem={setSelectedItem} />;
      case "projects":
        return <ProjectsSection onSelectItem={setSelectedItem} />;
      case "blog":
        return <BlogSection onSelectItem={setSelectedItem} />;
      default:
        return <HomeSection onNavigate={setActiveSection} onSelectItem={setSelectedItem} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-spotify-black">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className={`flex-1 bg-background rounded-lg m-2 mb-24 md:mb-24 mb-[7.5rem] overflow-y-auto transition-all duration-300 ${selectedItem ? 'xl:mr-80' : ''}`}>
        {renderSection()}
      </main>

      <DetailPanel item={selectedItem} onClose={() => setSelectedItem(null)} />
      <MobileDetailView item={selectedItem} onClose={() => setSelectedItem(null)} />
      <NowPlaying />
      <MobileBottomNav activeSection={activeSection} onSectionChange={setActiveSection} />
    </div>
  );
};

export default Index;
