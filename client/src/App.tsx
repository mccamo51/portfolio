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

function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add smooth entrance animation
    setIsVisible(true);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "portfolio":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground relative" data-testid="text-portfolio-title">
              Portfolio
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full mt-2"></div>
            </h2>
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg" data-testid="text-portfolio-coming-soon">
                Portfolio showcase coming soon...
              </p>
            </div>
          </div>
        );
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
      <div className="flex">
        <ProfileSidebar />
        
        <main className={`flex-1 p-8 lg:p-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="max-w-4xl">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            
            <div className="transition-all duration-500 ease-in-out">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
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
