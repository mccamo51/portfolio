import { Card } from "@/components/ui/card";
import ServiceCard from "./ServiceCard";
import { Smartphone, Monitor, Palette, Server } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Mobile Apps",
      description: "Professional development of applications for Android and iOS."
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Web Development",
      description: "High-quality development of sites at the professional level"
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "UI/UX Design",
      description: "The most modern and high-quality design made at a professional level."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Backend Development",
      description: "High-performance backend services designed for scalability and seamless user experience."
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4 relative" data-testid="text-about-title">
          About Me
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full mt-2"></div>
        </h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p data-testid="text-about-description-1">
            A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs, UI/UX, widgets, and state
            management solutions. Proven track record in delivering cutting-edge solutions, including API integration, third-
            party libraries, and performance optimization. Adept at debugging to ensure high-quality, responsive apps and
            An agile collaborator committed to staying current with industry trends.
          </p>
          
          <p data-testid="text-about-description-2">
            If you're seeking a skilled Flutter developer to breathe life into your project and exceed your expectations, I am
            here to collaborate and create magic together. Reach out, and let's transform your vision into a reality!
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-services-title">
          What I'm Doing
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}