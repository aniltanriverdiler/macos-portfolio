import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import { Mail, MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Frontend Team Lead Intern",
    company: "Yazilim.xyz & OnlyJS Academy",
    period: "Jul 2025 - Sep 2025",
    description:
      "Led frontend development during a 2-month internship. Built a hotel reservation system using Next.js 15, TypeScript, TailwindCSS, and Shadcn-UI. Managed state with Zustand, integrated real-time chat via Socket.IO, and worked with JWT security and CRUD operations.",
    skills: ["Leadership", "Next.js", "TypeScript", "Zustand", "Socket.IO"],
  },
  {
    title: "Architect",
    company: "Ors Architecture & Construction",
    period: "Feb 2024 - Jul 2024",
    description:
      "Designed and executed interior architectural projects from concept to implementation, including technical drawings, custom furniture, and 3D visualizations. Coordinated site inspections and project management.",
    skills: ["Autocad", "3dsMax", "Corona Renderer", "Unreal Engine 5"],
  },
  {
    title: "Freelance Architect",
    company: "Self-employed",
    period: "Jan 2020 - Current",
    description:
      "Created realistic interior visualizations, bringing design concepts to life with high-quality renderings. Developed architectural concept, preliminary, and implementation projects.",
    skills: ["3dsMax", "Corona Renderer", "Adobe Photoshop", "Unreal Engine 5"],
  },
  {
    title: "Architect",
    company: "Yilmaz Group Construction",
    period: "Jun 2019 - Dec 2019",
    description:
      "Designed and executed interior architectural projects. Managed site inspections and project coordination to ensure quality construction and on-time delivery.",
    skills: ["Autocad", "3dsMax", "Corona Renderer", "Adobe Photoshop"],
  },
];

const Profile = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="profile" />
        <h2>About Me</h2>
      </div>

      <div className="profile-body">
        {/* Header Section */}
        <div className="profile-header">
          <img
            src="/images/anil.jpg"
            alt="Anil Tanriverdiler"
            className="profile-avatar"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Anil Tanriverdiler
            </h1>
            <p className="text-blue-500 text-md font-medium mt-1">
              Frontend & Mobile Developer &middot; React.js &middot; Next.js
              &middot; React Native &middot; Expo
            </p>
          </div>
        </div>

        <div className="profile-grid">
          {/* Left Column */}
          <div className="profile-left">
            {/* Summary */}
            <div className="profile-section">
              <h3 className="section-label">SUMMARY</h3>
              <div className="profile-card">
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  Architecture graduate turned frontend and mobile developer,
                  focused on building responsive and performance-driven web and
                  mobile applications using React.js, TypeScript, and the modern
                  JavaScript ecosystem. With a design-oriented background, I
                  enjoy crafting user-focused interfaces and translating complex
                  ideas into clean, maintainable code. Currently focusing on
                  React Native development and creating practical applications
                  that deliver real user value.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="profile-section">
              <h3 className="section-label">EXPERIENCE</h3>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.title + exp.company} className="profile-exp">
                    <div className="exp-icon">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900">
                        {exp.title} @ {exp.company}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3 h-3 text-gray-400 font-medium" />
                        <span className="text-xs text-gray-400 font-medium uppercase">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-medium leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="exp-skill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="profile-right">
            <div className="profile-info-card">
              <h3 className="info-card-label">CONTACT</h3>
              <div className="info-card-row">
                <div className="info-card-icon bg-blue-100">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <span className="info-card-title">EMAIL</span>
                  <p className="info-card-value">tanriverdileranil@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="profile-info-card">
              <h3 className="info-card-label">INFORMATION</h3>
              <div className="info-card-row">
                <div className="info-card-icon bg-green-100">
                  <MapPin className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <span className="info-card-title">LOCATION</span>
                  <p className="info-card-value">Istanbul, Turkey</p>
                </div>
              </div>
              <div className="info-card-row mt-3">
                <div className="info-card-icon bg-purple-100">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <span className="info-card-title">EDUCATION</span>
                  <p className="info-card-value">
                    Istanbul Arel University &middot; Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileWindow = WindowsWrapper(Profile, "profile");

export default ProfileWindow;
