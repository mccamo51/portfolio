import TimelineItem from "./TimelineItem";

export default function ResumeSection() {
  const education = [
    {
      institution: "Nishareeka College Of Management And Information Technology",
      degree: "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
      period: "2017 — 2021",
      location: ""
    },
    {
      institution: "Greenland International College",
      degree: "+2 Science",
      period: "2015 — 2017",
      location: ""
    }
  ];

  const experience = [
    {
      position: "Mid-Level Flutter Developer",
      company: "Tekma Technologies",
      period: "Aug. 2024 — Feb. 2025 • 7 mos",
      location: "Kathmandu, Nepal",
      details: [
        "Developed new features and implemented UI designs into code using Flutter.",
        "Designed and created custom e-form features including scrolling features and data entries.",
        "Integrated Google and Facebook sign-in for user authentication.",
        "Designed dynamic functionalities using the BLOC design pattern.",
        "Integrated APIs for seamless data communication and backend integration.",
        "Implemented payment gateway integration like Khalti for secure transactions.",
        "Collaborated with other developers and backend team for scalable features.",
        "Participated in team meetings to discuss new features and project updates."
      ]
    },
    {
      position: "Flutter Developer Intern",
      company: "YAJ Tech Pvt. Ltd",
      period: "May. 2022 — Sep. 2022 • 5 mos",
      location: "Kathmandu, Nepal",
      details: [
        "Assisted in developing and maintaining Flutter applications, ensuring seamless functionality and user-friendly interfaces.",
        "Supported the implementation of visually appealing UI designs that aligned with client requirements and design principles.",
        "Collaborated with cross-functional teams, including back-end developers and designers, to deliver efficient, high-quality, and scalable solutions.",
        "Gained hands-on experience in debugging, troubleshooting, and refining app features to improve user experience."
      ]
    }
  ];

  //todo: remove mock functionality - replace with real data from backend/database
  const moreExperience = [
    {
      position: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "Oct. 2022 — Aug. 2024 • 1yr, 11 mos",
      location: "Kathmandu, Nepal",
      details: [
        "Developed new features and transformed UI designs into fully functional user interfaces.",
        "Integrated payment solution like eSewa for secure and seamless transactions.",
        "Optimized application performance to ensure a smooth and engaging user experience.",
        "Supported other team members initiatives by developing solutions to common problems and sharing those learnings.",
        "Identified and resolved bugs, improving app stability and performance.",
        "Wrote clean, maintainable, and testable code following best practices.",
        "Utilization of latest version of support libraries to ensure backend compatibility.",
        "Integrated payment solution like eSewa for secure and seamless transactions.",
        "Collaborated with backend developers, designers, and cross-functional teams to deliver scalable, high-quality solutions.",
        "Performed code review and deployed the app in Playstore and Appstore."
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-8 relative" data-testid="text-resume-title">
          Resume
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full mt-2"></div>
        </h2>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-sm"></div>
          </div>
          <h3 className="text-2xl font-bold text-foreground" data-testid="text-education-title">
            Education
          </h3>
        </div>
        
        <div>
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              type="education"
              institution={edu.institution}
              degree={edu.degree}
              period={edu.period}
              location={edu.location}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-sm"></div>
          </div>
          <h3 className="text-2xl font-bold text-foreground" data-testid="text-experience-title">
            Experience
          </h3>
        </div>
        
        <div>
          {[...experience, ...moreExperience].map((exp, index) => (
            <TimelineItem
              key={index}
              type="experience"
              position={exp.position}
              company={exp.company}
              period={exp.period}
              location={exp.location}
              details={exp.details}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover-elevate transition-all duration-200 font-medium"
          onClick={() => console.log('Download CV triggered')}
          data-testid="button-download-cv"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </button>
      </div>
    </div>
  );
}