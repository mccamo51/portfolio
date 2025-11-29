import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import TelaPay from "../../../attached_assets/generated_images/telapay.png";
import TelaPayIOS from "../../../attached_assets/generated_images/telapay_ios.png";
import Mira from "../../../attached_assets/generated_images/mira.png";
import MiraHome from "../../../attached_assets/generated_images/mira_home.png";
import Golf from "../../../attached_assets/generated_images/golf.png";
import Golf1 from "../../../attached_assets/generated_images/golf1.png";
import Golf4 from "../../../attached_assets/generated_images/golf4.png";
import Golf3 from "../../../attached_assets/generated_images/golf3.png";
import POS from "../../../attached_assets/generated_images/pos.png";
import Agritech from "../../../attached_assets/generated_images/javolinCom.png";
import Forex from "../../../attached_assets/generated_images/forex.png";
import Oya from "../../../attached_assets/generated_images/oya.png";
import Vending from "../../../attached_assets/generated_images/vending.jpg";
import FundpeckHome from "../../../attached_assets/generated_images/fundpeck.png";
import Fundpeck2 from "../../../attached_assets/generated_images/fundpeck2.png";
import Fundpeck3 from "../../../attached_assets/generated_images/fundpeck3.png";
import Fundpeck4 from "../../../attached_assets/generated_images/fundpeck4.png";
import FundpeckLogin from "../../../attached_assets/generated_images/fundpeck_login.png";
import LiftCreditHome from "../../../attached_assets/generated_images/lift.png";
import LiftLogin from "../../../attached_assets/generated_images/login_lift.png";
import LiftCreditSplash from "../../../attached_assets/generated_images/lift_splash.png";
import LiftCredit2 from "../../../attached_assets/generated_images/lift2.png";
import Telapay1 from "../../../attached_assets/generated_images/telapay1.png";
import LiftCredit3 from "../../../attached_assets/generated_images/lift3.png";
import LiftCredit4 from "../../../attached_assets/generated_images/lift4.png";
import LiftCredit5 from "../../../attached_assets/generated_images/lift5.png";
import Spectra1 from "../../../attached_assets/generated_images/spectra1.png";
import Spectra2 from "../../../attached_assets/generated_images/spectra2.png";
import Spectra3 from "../../../attached_assets/generated_images/spectra3.png";
import Spectra from "../../../attached_assets/generated_images/spectra.png";
import Mira3 from "../../../attached_assets/generated_images/mira3.png";
import MiraLogin from "../../../attached_assets/generated_images/mira_login.png";
import ResQTrackHome from "../../../attached_assets/generated_images/resq.png";
import ResQTrack from "../../../attached_assets/generated_images/resq1.png";
import Resq2 from "../../../attached_assets/generated_images/resq2.png";
import Resq4 from "../../../attached_assets/generated_images/resq4.png";
import Resq3 from "../../../attached_assets/generated_images/resq3.png";
import Fundstart from "../../../attached_assets/generated_images/fundstart.png";
import Fundstart1 from "../../../attached_assets/generated_images/fundstart1.png";
import Fundstart2 from "../../../attached_assets/generated_images/fundstart2.png";
import Fundstart3 from "../../../attached_assets/generated_images/fundstart3.png";
import Fundstart4 from "../../../attached_assets/generated_images/fundstart4.png";

type ProjectCategory = "all" | "application" | "web" | "ui/ux";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  gallery?: string[]; // Array of additional screenshot images
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projects: Project[] = [
    {
      title: "Spectra Ris App",
      description:
        "Healthcare application for radiology appointment management and diagnostic report access. Streamlines patient-provider communication for medical imaging services.",
      image: Spectra,
      technologies: ["Flutter", "Provider", "DICOM"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.health.spectra_health&hl=en",
      githubUrl: "#",
      category: "application",
      gallery: [Spectra1, Spectra2, Spectra3], // Additional screenshots
    },
    {
      title: "Telapay iOS App",
      description:
        "Comprehensive payment system for merchants with iOS app and dashboard. Enables payment collection, link generation, transaction reporting, and branch management. Built in collaboration with MTN.",
      image: TelaPayIOS,
      technologies: ["Flutter", "Provider", "Payment Gateway"],
      liveUrl: "https://apps.apple.com/us/app/telapay/id6478125126",
      githubUrl: "#",
      category: "application",
      gallery: [Telapay1], // Additional screenshots
    },

    {
      title: "Vending Machine Control App",
      description:
        "Android application for MDB-based vending machine operations, enabling seamless interaction with automated vending systems.",
      image: Vending,
      technologies: ["Flutter", "Android", "MDB Protocol", "IoT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "application",
    },
    {
      title: "Fundpeck",
      description:
        "A fundraising and donation platform enabling users to create campaigns, share stories, contribute securely, and track donation progress in real time.",
      image: FundpeckLogin,
      technologies: [
        "Flutter",
        "Firebase",
        "Paystack",
        "Real-time Notifications",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "application",
      gallery: [FundpeckHome, Fundpeck2, Fundpeck3, Fundpeck4], // Additional screenshots
    },

    {
      title: "Smart POS Application",
      description:
        "Point-of-sale application handling smart card transactions with EMV integration. Built for secure payment processing on mobile devices.",
      image: POS,
      technologies: ["Flutter", "Native Android", "EMV", "XML"],
      liveUrl: "#",
      githubUrl: "#",
      category: "application",
    },
    {
      title: "MIRA by MicroDynamics",
      description:
        "Mobile companion app for the MIRA intelligence platform, enabling technicians and print operators to access anilox roll data, view inspection reports, track maintenance history, and monitor equipment health in real time across multiple sites.",
      image:Mira ,
      technologies: ["Flutter", "Riverpod", "Google Maps"],
      liveUrl: "#",
      githubUrl: "#",
      category: "application",
      gallery: [MiraLogin,MiraHome , Mira3], // Additional screenshots
    },
    {
      title: "LiftCredit",
      description:
        "A financial services app that enables users to access loans for house rent or car purchases, with streamlined onboarding, eligibility checks, repayment tracking, and secure document submission.",
      image: LiftCreditSplash ,
      technologies: ["Flutter", "Riverpod", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      category: "application",
      gallery: [LiftLogin,LiftCredit2, LiftCredit3, LiftCredit4, LiftCredit5, LiftCreditHome], // Additional screenshots
    },

    {
      title: "ResQTrack",
      description:
        "A next-generation emergency response mobile app with one-touch SOS alerts, real-time GPS sharing, secure in-app communication, and AI-powered incident classification built to connect users with first responders faster and more accurately.",
      image: ResQTrackHome,
      technologies: [
        "Flutter",
        "REST API",
        "WebRTC",
        "AI/ML Integration",
        "Real-time Location Tracking",
      ],
      liveUrl: "https://devpost.com/software/resqtrack",
      githubUrl: "https://github.com/OtchereDev/ResQTrack",
      category: "application",
      gallery: [ResQTrack, Resq2, Resq4, Resq3], // Additional screenshots
    },

    {
      title: "FundStart",
      description:
        "A cross-platform investment platform connecting entrepreneurs with early-stage investors. Includes secure authentication, AI-powered investment recommendations, project funding, payment processing, and full portfolio management for users.",
      image: Fundstart,
      technologies: [
        "Next.js",
        "Flutter",
        "Stripe Payments",
        "PostgreSQL",
        "Pangea Security",
        "OpenAI",
      ],
      liveUrl: "https://devpost.com/software/fundstart",
      githubUrl:
        "https://github.com/OtchereDev/fundstart-mobile/releases/tag/v1",
      category: "application",
      gallery: [Fundstart1, Fundstart2, Fundstart3, Fundstart4], // Additional screenshots
    },

    {
      title: "Telapay Dashboard",
      description:
        "Comprehensive payment system for merchants dashboard. Enables payment collection, link generation, transaction reporting, and branch management.",
      image: `${TelaPay}`,
      technologies: ["Flutter", "React", "Next.js", "Redux", "Tailwind"],
      liveUrl: "https://mtndashboard.theteller.net/auth/sign-in",
      githubUrl: "#",
      category: "web",
    },

    {
      title: "Javolin Forex Trading Platform",
      description:
        "Full-featured forex trading platform with real-time exchange rates, advanced charting tools, secure transactions, and comprehensive trade management capabilities.",
      image: Forex,
      technologies: ["React", "Redux", "Tailwind"],
      liveUrl: "https://staging.forex.javolin.com/forex/login",
      githubUrl: "",
      category: "web",
    },

    {
      title: "Oya Bus App",
      description:
        "Comprehensive bus ticketing app with route searching, seat selection, secure payments, real-time availability, booking history, and e-ticket generation.",
      image: Oya,
      technologies: [
        "Flutter",
        "Cloud Messaging",
        "Payment Gateway",
        "Geolocation",
      ],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.oyaghana.oyaapp_porter&hl=en",
      githubUrl: "#",
      category: "application",
    },

    {
      title: "Javolin Agritech Platform",
      description: "",
      image: Agritech,
      technologies: ["React", "Redux", "Tailwind"],
      liveUrl: "https://staging.forex.javolin.com/agritech/login",
      githubUrl: "#",
      category: "web",
    },

    {
      title: "Golf Slot Booking App",
      description:
        "A mobile application that allows golfers to browse courses, view available tee times, and book playing slots seamlessly with integrated scheduling and reminders.",
      image: Golf1,
      technologies: ["Flutter", "Provider", "Firebase", "Push Notifications"],
      liveUrl: "#",
      githubUrl: "#",
      category: "application",
      gallery: [Golf, Golf3, Golf4], // Additional screenshots
    },
  ];

  const categories = [
    { id: "all" as ProjectCategory, label: "All" },
    { id: "application" as ProjectCategory, label: "Applications" },
    { id: "web" as ProjectCategory, label: "Web development" },
    { id: "ui/ux" as ProjectCategory, label: "UI/UX" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-8">
      <div>
        <p
          className="text-muted-foreground leading-relaxed mb-8"
          data-testid="text-portfolio-description"
        >
          A showcase of production-ready applications I've built across fintech,
          healthcare, transportation, and enterprise sectors. Each project
          demonstrates real-world problem-solving with cutting-edge technologies
          and scalable architectures.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-6 border-b border-border mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
              activeCategory === category.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid={`tab-${category.id}`}
          >
            {category.label}
            {activeCategory === category.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={selectedProject}
      />
    </div>
  );
}
