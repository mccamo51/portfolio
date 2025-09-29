import { Card } from "@/components/ui/card";

interface TimelineItemProps {
  institution?: string;
  degree?: string;
  position?: string;
  company?: string;
  period: string;
  location: string;
  details?: string[];
  type: "education" | "experience";
}

export default function TimelineItem({
  institution,
  degree,
  position,
  company,
  period,
  location,
  details,
  type
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
      <div className="absolute left-1.5 top-5 w-0.5 bg-border h-full"></div>
      
      <Card className="p-6 mb-6 bg-card border-card-border hover-elevate transition-all duration-200">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-lg font-semibold text-card-foreground" data-testid={`text-${type}-title`}>
            {type === "education" ? institution : position}
          </h3>
          
          {type === "education" && degree && (
            <p className="text-muted-foreground" data-testid="text-education-degree">
              {degree}
            </p>
          )}
          
          {type === "experience" && company && (
            <p className="text-muted-foreground" data-testid="text-experience-company">
              {company}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="text-primary font-medium" data-testid={`text-${type}-period`}>
              {period}
            </span>
            <span data-testid={`text-${type}-location`}>
              {location}
            </span>
          </div>
        </div>
        
        {details && details.length > 0 && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2" data-testid={`text-${type}-detail-${index}`}>
                <span className="text-primary mt-1.5 text-xs">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}