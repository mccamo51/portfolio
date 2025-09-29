import { Smartphone } from "lucide-react";
import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <ServiceCard
      icon={<Smartphone className="w-6 h-6 text-primary" />}
      title="Mobile Apps"
      description="Professional development of applications for Android and iOS."
    />
  );
}