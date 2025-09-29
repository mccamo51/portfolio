import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProfileSidebar from "@/components/ProfileSidebar";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import PortfolioSection from "@/components/PortfolioSection";
import MobileProfileHeader from "@/components/MobileProfileHeader";
import MobileNavigation from "@/components/MobileNavigation";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Add smooth entrance animation
    setIsVisible(true);
  }, []);

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "blog":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground relative" data-testid="text-blog-title">
              Blog
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full mt-2"></div>
            </h2>
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg" data-testid="text-blog-coming-soon">
                Blog posts coming soon...
              </p>
            </div>
          </div>
        );
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Desktop Sidebar */}
      <ProfileSidebar />
      
      {/* Mobile Profile Header */}
      <MobileProfileHeader />
      
      <main className={`lg:ml-80 h-screen overflow-y-auto transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="p-4 lg:p-8 xl:p-12 pb-20 lg:pb-8">
          <div className="max-w-4xl">
            {/* Desktop Navigation */}
            <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
            
            <div className={`transition-all duration-300 ease-in-out transform ${
              isTransitioning 
                ? 'opacity-0 translate-y-2' 
                : isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
            }`}>
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Bottom Navigation */}
      <MobileNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Force dark mode for exact replica
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Portfolio />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
