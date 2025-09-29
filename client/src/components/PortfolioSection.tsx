import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  // todo: remove mock functionality - replace with real project data from backend/database
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured Flutter e-commerce application with payment integration, user authentication, and real-time notifications. Built with modern UI/UX principles.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Stripe", "REST API", "Provider"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management Dashboard",
      description: "A responsive web dashboard for project and task management with real-time collaboration features, built using React and Node.js.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Tracking App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using OpenWeather API.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["Flutter", "OpenWeather API", "Google Maps", "SQLite"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics Tool",
      description: "A comprehensive analytics dashboard for social media performance tracking with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "A complete LMS platform with course creation, student progress tracking, interactive quizzes, and video streaming capabilities.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      technologies: ["React", "Django", "PostgreSQL", "AWS S3", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Food Delivery Mobile App",
      description: "A feature-rich food delivery application with real-time order tracking, payment processing, and restaurant management system.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Google Maps", "Razorpay", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4 relative" data-testid="text-portfolio-title">
          Portfolio
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full mt-2"></div>
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-portfolio-description">
          Here are some of my recent projects that showcase my skills in mobile and web development. 
          Each project demonstrates different aspects of my expertise in creating user-centered applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}