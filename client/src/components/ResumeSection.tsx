import TimelineItem from "./TimelineItem";

export default function ResumeSection() {
  const education = [
    {
      institution: "Kwame Nkrumah University of Science and Technology",
      degree: "BSc Computer Science",
      period: "Oct. 2022 — Sep. 2024",
      location: "Kumasi, Ghana"
    },
    {
      institution: "Koforidua Technical University",
      degree: "HND Computer Science",
      period: "Aug. 2016 — Aug. 2019",
      location: "Eastern Region, Ghana"
    }
  ];

  const experience = [
    {
      position: "Full-Stack Engineer",
      company: "Payswitch Company LTD",
      period: "Sep. 2021 — Present • 4+ yrs",
      location: "East Legon, Accra, Ghana",
      details: [
        "Developed Telapay iOS app for merchants to collect payments and generate payment links using Flutter.",
        "Built the Telapay Dashboard in collaboration with MTN for payment recording, transaction reports, and branch management using React, Tailwind, Redux, and Next.js.",
        "Created PaySwitch payment checkout plugin using Flutter.",
        "Designed backend services for invoice system using Node.js, MongoDB, and Redis, managing hundreds of daily requests.",
        "Developed mPOS Application with Flutter and Native Android XML for smart card transactions (EMV integration).",
        "Built Vending Machine App with Flutter and Android for MDB-based vending operations.",
        "Implemented EMV Parser using Node.js + TypeScript for ISO 8583 chip data extraction and parsing.",
        "Provided leadership and mentorship to development team, fostering collaboration and professional growth.",
        "Established robust CI/CD pipeline with pull requests, code reviews, load testing, and comprehensive testing strategies."
      ]
    },
    {
      position: "Mobile Application Developer",
      company: "Spectra Health Imaging",
      period: "Oct. 2023 — Jan. 2024 • 4 mos",
      location: "Patasi, Kumasi, Ghana",
      details: [
        "Built mobile app for radiology appointment management and diagnostic report access using Flutter and Provider state management.",
        "Delivered solution for both iOS and Android platforms with seamless user experience."
      ]
    },
    {
      position: "Mobile Application Developer",
      company: "Kost Konsult & Solutions Ltd",
      period: "Jun. 2023 — Oct. 2023 • 5 mos",
      location: "Accra, Ghana",
      details: [
        "Developed fuel purchasing and payment app with QR code scanning for secure payments.",
        "Implemented loyalty point system, nearby station locator, and fuel gifting features.",
        "Created user-friendly experience with integrated payment system for iOS and Android."
      ]
    },
    {
      position: "Mobile Application Developer",
      company: "JPGhana",
      period: "Feb. 2023 — Apr. 2023 • 3 mos",
      location: "Accra, Ghana",
      details: [
        "Built mobile app enabling fuel purchases using loyalty points and cash.",
        "Integrated seamlessly with existing loyalty systems for point redemption.",
        "Developed intuitive interface for Android platform."
      ]
    },
    {
      position: "Frontend Engineer",
      company: "Javolin Group",
      period: "Dec. 2021 — Feb. 2024 • 2+ yrs",
      location: "Atlanta, Georgia, USA (Remote)",
      details: [
        "Built comprehensive forex trading platform using React, Tailwind, and Redux with real-time exchange rates and advanced charting.",
        "Developed mobile version of trading platform using Flutter with responsive user experience.",
        "Created fintech app with money transfer, airtime purchase, and financial services using Flutter for iOS."
      ]
    },
    {
      position: "Mobile Application Developer",
      company: "Oya Ghana",
      period: "Sep. 2021 — Oct. 2022 • 1+ yr",
      location: "Accra, Ghana",
      details: [
        "Developed bus ticketing platform using Flutter for route searching, seat selection, and secure payments.",
        "Implemented real-time seat availability, booking history, and e-ticket generation.",
        "Delivered responsive interface for both iOS and Android platforms."
      ]
    },
    {
      position: "Mobile Application Developer",
      company: "Gitplus Company Limited",
      period: "Aug. 2019 — Feb. 2021 • 1+ yr",
      location: "Ghana",
      details: [
        "Created Telehealth solution using Flutter for remote medical consultations.",
        "Implemented video calls, messaging, appointment management, and electronic health records.",
        "Ensured secure patient data protection with robust security measures for iOS and Android."
      ]
    }
  ];

  return (
    <div className="space-y-12">
  

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
          {experience.map((exp, index) => (
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