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
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate transition-all duration-300 bg-card border-card-border group cursor-pointer"
      onClick={onClick}
      data-testid="project-card"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid="img-project-thumbnail"
        />
      </div>

      <div className="p-6">
        <h3
          className="text-sm font-semibold text-card-foreground mb-1"
          data-testid="text-project-title"
        >
          {title}
        </h3>

        {/* <p
          className="text-muted-foreground text-sm leading-relaxed mb-4"
          data-testid="text-project-description"
        >
          {description}
        </p> */}

        {/* <div className="flex flex-wrap gap-2">
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
        </div> */}
      </div>
    </Card>
  );
}
