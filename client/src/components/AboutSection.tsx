import { Card } from "@/components/ui/card";
import ServiceCard from "./ServiceCard";
import { Smartphone, Monitor, Code, Server } from "lucide-react";
import Dart from '../../../attached_assets/icons/Dart.svg'
import Flutter from '../../../attached_assets/icons/Flutter.svg'
import Firebase from '../../../attached_assets/icons/Firebase.svg'
import Android from '../../../attached_assets/icons/AndroidStudio.svg'
import NextJs from '../../../attached_assets/icons/nextjs-icon.svg'
import Postman from '../../../attached_assets/icons/Postman.svg'
import ReactIcon from '../../../attached_assets/icons/React-icon.svg.png'
import GoLang from '../../../attached_assets/icons/Go-Logo_Blue.png'
import Git from '../../../attached_assets/icons/Git_icon.svg.png'

export default function AboutSection() {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Mobile Development",
      description:
        "Expert Flutter and Native Android development for iOS and Android platforms with seamless user experiences.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Web Development",
      description:
        "Full-stack web applications using React, Next.js, Redux, and modern frontend technologies.",
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Backend Development",
      description:
        "Scalable backend services with Node.js, GoLang, MongoDB, PostgreSQL, and microservices architecture.",
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "DevOps & CI/CD",
      description:
        "Robust CI/CD pipelines with automated testing, code reviews, and deployment automation.",
    },
  ];

  const skills = [
    Dart, Flutter, Firebase, ReactIcon, NextJs, Postman, Android,GoLang , Git
  ]

  return (
    <div className="space-y-8">
      <div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p data-testid="text-about-description-1">
            A versatile Full-Stack Engineer with 6+ years of experience building
            innovative mobile and web applications. Currently leading
            development at Payswitch Company, I specialize in creating payment
            solutions, fintech applications, and enterprise systems using
            Flutter, React, Node.js, and GoLang. My expertise spans across
            mobile development, backend architecture, and leading
            high-performing development teams.
          </p>

          <p data-testid="text-about-description-2">
            I've successfully delivered solutions for major companies including
            MTN, built comprehensive payment platforms, and mentored development
            teams to excellence. With a strong foundation in both frontend and
            backend technologies, I bring a holistic approach to software
            development. Whether it's implementing EMV payment systems, building
            CI/CD pipelines, or crafting intuitive user interfaces, I'm
            committed to delivering scalable, high-quality solutions that exceed
            expectations.
          </p>
        </div>
      </div>

      <div>
        <h3
          className="text-2xl font-bold text-foreground mb-6"
          data-testid="text-services-title"
        >
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

      <div className="w-full">
        <h3
          className="text-2xl font-bold text-foreground mb-6"
          data-testid="text-skills-title"
        >
          Skills
        </h3>

        <div className="overflow-x-auto custom-scrollbar pb-4">
          <div className="flex space-x-5 h-[130px]">
            {skills.map((icon, index) => (
              <img 
                key={index}
                src={icon} 
                alt={`Skill ${index + 1}`}
                className="h-full object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #3a3a3a;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #fbbf24 0%, #fbbf24 100%);
            border-radius: 10px;
            transition: background 0.3s ease;
            width: 50%;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #f59e0b 0%, #f59e0b 100%);
          }

          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #fbbf24 #3a3a3a;
          }
        `}</style>
      </div>
    </div>
  );
}