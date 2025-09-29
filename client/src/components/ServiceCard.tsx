import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-200 bg-card border-card-border">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid="text-service-title">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-service-description">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}