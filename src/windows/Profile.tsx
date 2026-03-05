import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useTranslation from "#hooks/useTranslation";
import { Mail, MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react";
import type { TranslationKey } from "@/lib/i18n";

interface Experience {
  titleKey: TranslationKey;
  companyKey: TranslationKey;
  periodKey: TranslationKey;
  descriptionKey: TranslationKey;
  skills: string[];
}

const experiences: Experience[] = [
  {
    titleKey: "exp.frontendLead.title",
    companyKey: "exp.frontendLead.company",
    periodKey: "exp.frontendLead.period",
    descriptionKey: "exp.frontendLead.description",
    skills: ["Leadership", "Next.js", "TypeScript", "Zustand", "Socket.IO"],
  },
  {
    titleKey: "exp.architect1.title",
    companyKey: "exp.architect1.company",
    periodKey: "exp.architect1.period",
    descriptionKey: "exp.architect1.description",
    skills: ["Autocad", "3dsMax", "Corona Renderer", "Unreal Engine 5"],
  },
  {
    titleKey: "exp.freelance.title",
    companyKey: "exp.freelance.company",
    periodKey: "exp.freelance.period",
    descriptionKey: "exp.freelance.description",
    skills: ["3dsMax", "Corona Renderer", "Adobe Photoshop", "Unreal Engine 5"],
  },
  {
    titleKey: "exp.architect2.title",
    companyKey: "exp.architect2.company",
    periodKey: "exp.architect2.period",
    descriptionKey: "exp.architect2.description",
    skills: ["Autocad", "3dsMax", "Corona Renderer", "Adobe Photoshop"],
  },
];

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="window-header">
        <WindowControls target="profile" />
        <h2>{t("profile.title")}</h2>
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Anil Tanriverdiler
            </h1>
            <p className="text-blue-500 text-md font-medium mt-1">
              {t("profile.subtitle")}
            </p>
          </div>
        </div>

        <div className="profile-grid">
          {/* Left Column */}
          <div className="profile-left">
            {/* Summary */}
            <div className="profile-section">
              <h3 className="section-label">{t("profile.summary")}</h3>
              <div className="profile-card">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">
                  {t("profile.summaryText")}
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="profile-section">
              <h3 className="section-label">{t("profile.experience")}</h3>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.titleKey + exp.companyKey} className="profile-exp">
                    <div className="exp-icon">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                        {t(exp.titleKey)} @ {t(exp.companyKey)}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3 h-3 text-gray-400 font-medium" />
                        <span className="text-xs text-gray-400 font-medium uppercase">
                          {t(exp.periodKey)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium leading-relaxed">
                        {t(exp.descriptionKey)}
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
              <h3 className="info-card-label">{t("profile.contactLabel")}</h3>
              <div className="info-card-row">
                <div className="info-card-icon bg-blue-100 dark:bg-blue-900/30">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <span className="info-card-title">{t("profile.email")}</span>
                  <p className="info-card-value">tanriverdileranil@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="profile-info-card">
              <h3 className="info-card-label">{t("profile.information")}</h3>
              <div className="info-card-row">
                <div className="info-card-icon bg-green-100 dark:bg-green-900/30">
                  <MapPin className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <span className="info-card-title">{t("profile.location")}</span>
                  <p className="info-card-value">{t("profile.locationValue")}</p>
                </div>
              </div>
              <div className="info-card-row mt-3">
                <div className="info-card-icon bg-purple-100 dark:bg-purple-900/30">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <span className="info-card-title">{t("profile.education")}</span>
                  <p className="info-card-value">{t("profile.educationValue")}</p>
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
