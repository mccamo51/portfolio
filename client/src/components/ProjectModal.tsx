import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    gallery?: string[]; // Future: array of additional images
  } | null;
}

export default function ProjectModal({
  open,
  onOpenChange,
  project,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Image Section */}
        <div className="mt-6">
          {(() => {
            const allImages = [project.image, ...(project.gallery || [])];

            // Case 1: Single Image
            if (allImages.length === 1) {
              return (
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={allImages[0]}
                    alt={project.title}
                    className="w-full h-auto max-h-[400px] object-contain bg-muted"
                    data-testid="modal-project-image"
                  />
                </div>
              );
            }

            // Case 2: 2-3 Images (Grid Layout)
            if (allImages.length <= 3) {
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allImages.map((img, index) => (
                    <div
                      key={index}
                      className={`relative rounded-lg overflow-hidden ${
                        // If 3 images, make the first one span full width on mobile,
                        // or maybe just keep them all equal sized?
                        // Let's try a simple grid.
                        // If 3 images, maybe 2 columns, last one spans 2?
                        // Or just simple grid.
                        allImages.length === 3 && index === 0
                          ? "md:col-span-2"
                          : ""
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-auto max-h-[300px] object-contain bg-muted"
                      />
                    </div>
                  ))}
                </div>
              );
            }

            // Case 3: More than 3 Images (Carousel)
            return (
              <div className="px-12">
                <Carousel
                  className="w-full max-w-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {allImages.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="relative rounded-lg overflow-hidden flex items-center justify-center bg-muted h-[400px]">
                            <img
                              src={img}
                              alt={`${project.title} ${index + 1}`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            );
          })()}
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-muted text-muted-foreground"
                data-testid={`modal-tech-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-4 mt-6 pt-6 border-t border-border">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover-elevate transition-all duration-200"
              data-testid="modal-live-link"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live Demo</span>
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover-elevate transition-all duration-200"
              data-testid="modal-github-link"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
