import TimelineItem from '../TimelineItem';

export default function TimelineItemExample() {
  return (
    <TimelineItem
      type="experience"
      position="Mid-Level Flutter Developer"
      company="Tekma Technologies"
      period="Aug. 2024 — Feb. 2025 • 7 mos"
      location="Kathmandu, Nepal"
      details={[
        "Developed new features and implemented UI designs into code using Flutter.",
        "Designed and created custom e-form features including scrolling features and data entries.",
        "Integrated Google and Facebook sign-in for user authentication.",
        "Designed dynamic functionalities using the BLOC design pattern.",
        "Integrated APIs for seamless data communication and backend integration.",
        "Implemented payment gateway integration like Khalti for secure transactions.",
        "Collaborated with other developers and backend team for scalable features.",
        "Participated in team meetings to discuss new features and project updates."
      ]}
    />
  );
}