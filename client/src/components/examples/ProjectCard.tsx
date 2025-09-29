import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="E-Commerce Mobile App"
      description="A full-featured Flutter e-commerce application with payment integration, user authentication, and real-time notifications."
      image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
      technologies={["Flutter", "Firebase", "Stripe", "REST API"]}
      liveUrl="#"
      githubUrl="#"
    />
  );
}