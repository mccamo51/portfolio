import { useState } from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: "about", label: "About Me" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    // { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" }
  ];

  // Find the active tab label
  const activeTabLabel = tabs.find(tab => tab.id === activeTab)?.label || "";

  return (
    <div className="flex justify-between items-center mb-8">
      {/* Active Tab Title */}
      <h2 className="text-3xl font-bold text-foreground relative" data-testid="text-section-title">
        {activeTabLabel}
        <div className="absolute bottom left-0 w-12 h-1 bg-primary rounded-full mt-2"></div>
      </h2>

      {/* Navigation Tabs */}
      <nav className="hidden lg:block bg-[#282828] rounded-bl-xl rounded-tr-xl w-fit px-4 border-[#383838] border" role="tablist">
        <div className="flex gap-8 relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`text-lg font-medium py-3 px-1 relative transition-all duration-300 hover-elevate  rounded-md  focus:ring-primary focus:ring-offset-2 ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`button-nav-${tab.id}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}