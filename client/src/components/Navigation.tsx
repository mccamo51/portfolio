import { useState } from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="mb-8" role="tablist">
      <div className="flex gap-8 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`text-lg font-medium py-2 px-1 relative transition-all duration-300 hover-elevate focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid={`button-nav-${tab.id}`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out animate-in slide-in-from-left-2"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}