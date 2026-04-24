import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useTranslation from "#hooks/useTranslation";
import {
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Calendar,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
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

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/aniltanriverdiler",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/an%C4%B1l-tanr%C4%B1verdiler-31791a23a/",
    label: "LinkedIn",
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
        {/* Hero Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/10 dark:to-pink-500/20" />
          <div className="relative px-8 py-7 flex items-center gap-6">
            <div className="relative">
              <img
                src="/images/anil.jpg"
                alt="Anil Tanriverdiler"
                className="profile-avatar w-24! h-24! ring-4! ring-white/80! dark:ring-gray-700/80! shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-[3px] border-white dark:border-gray-800" />
            </div>
            <div className="flex-1">
              <h1 className="text-[22px] font-bold text-gray-900 dark:text-white tracking-tight">
                Anil Tanriverdiler
              </h1>
              <p className="text-blue-500 dark:text-blue-400 text-[13px] font-semibold mt-1">
                {t("profile.subtitle")}
              </p>
              <div className="flex items-center gap-2 mt-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-gray-900/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-900/10 dark:hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                    <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="profile-grid gap-5! p-6!">
          {/* Left Column */}
          <div className="profile-left space-y-5!">
            {/* Summary */}
            <div className="profile-section">
              <h3 className="section-label">{t("profile.summary")}</h3>
              <div className="profile-card p-4!">
                <p className="text-gray-600 dark:text-gray-300 text-[13px] font-medium leading-[1.7]">
                  {t("profile.summaryText")}
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="profile-section">
              <h3 className="section-label">{t("profile.experience")}</h3>
              <div className="space-y-3">
                {experiences.map((exp) => (
                  <div
                    key={exp.titleKey + exp.companyKey}
                    className="profile-exp group/exp relative p-3.5 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 transition-colors"
                  >
                    <div className="exp-icon mt-0!">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                        {t(exp.titleKey)}
                      </h4>
                      <p className="text-[12px] font-semibold text-blue-500/80 dark:text-blue-400/80 mt-0.5">
                        @ {t(exp.companyKey)}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">
                          {t(exp.periodKey)}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-2 font-medium leading-relaxed">
                        {t(exp.descriptionKey)}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30"
                          >
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
          <div className="profile-right space-y-4!">
            {/* Contact Card */}
            <div className="profile-info-card rounded-xl!">
              <h3 className="info-card-label">{t("profile.contactLabel")}</h3>
              <div className="info-card-row">
                <div className="info-card-icon bg-blue-50 dark:bg-blue-900/30">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <div className="min-w-0">
                  <span className="info-card-title">{t("profile.email")}</span>
                  <p className="info-card-value text-[13px]! truncate">
                    tanriverdileranil@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="profile-info-card rounded-xl!">
              <h3 className="info-card-label">{t("profile.information")}</h3>
              <div className="space-y-3">
                <div className="info-card-row">
                  <div className="info-card-icon bg-green-50 dark:bg-green-900/30">
                    <MapPin className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <span className="info-card-title">{t("profile.location")}</span>
                    <p className="info-card-value text-[13px]!">
                      {t("profile.locationValue")}
                    </p>
                  </div>
                </div>
                <div className="info-card-row">
                  <div className="info-card-icon bg-purple-50 dark:bg-purple-900/30">
                    <GraduationCap className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <span className="info-card-title">{t("profile.education")}</span>
                    <p className="info-card-value text-[13px]!">
                      {t("profile.educationValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="profile-info-card rounded-xl!">
              <h3 className="info-card-label">HIGHLIGHTS</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "React", label: "Primary" },
                  { value: "Next.js", label: "Framework" },
                  { value: "TypeScript", label: "Language" },
                  { value: "Expo", label: "Mobile" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700/50"
                  >
                    <p className="text-[13px] font-bold text-gray-900 dark:text-white">
                      {value}
                    </p>
                    <p className="text-[10px] font-medium text-gray-400 mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
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
