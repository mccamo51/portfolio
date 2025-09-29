import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 bg-card border-card-border group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid="img-project-thumbnail"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              className="w-10 h-10 bg-background/90 rounded-lg flex items-center justify-center hover-elevate transition-all duration-200"
              aria-label="View GitHub"
              data-testid="link-project-github"
            >
              <Github className="w-4 h-4 text-foreground" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className="w-10 h-10 bg-background/90 rounded-lg flex items-center justify-center hover-elevate transition-all duration-200"
              aria-label="View Live Site"
              data-testid="link-project-live"
            >
              <ExternalLink className="w-4 h-4 text-foreground" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid="text-project-title">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid="text-project-description">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-muted text-muted-foreground hover:bg-muted/80"
              data-testid={`badge-tech-${index}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}