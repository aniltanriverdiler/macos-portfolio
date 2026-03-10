import useTranslation from "#hooks/useTranslation";
import { techStack } from "#constants/index";
import type { TranslationKey } from "@/lib/i18n";
import type { TechStackCategory } from "#types";

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
    skills: [
      "Leadership",
      "Teamwork",
      "Problem Solving",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Socket.IO",
    ],
  },
  {
    titleKey: "exp.architect1.title",
    companyKey: "exp.architect1.company",
    periodKey: "exp.architect1.period",
    descriptionKey: "exp.architect1.description",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Autocad",
      "3dsMax",
      "Corona Renderer",
      "Adobe Photoshop",
      "Unreal Engine 5",
    ],
  },
  {
    titleKey: "exp.freelance.title",
    companyKey: "exp.freelance.company",
    periodKey: "exp.freelance.period",
    descriptionKey: "exp.freelance.description",
    skills: [
      "Autocad",
      "3dsMax",
      "Corona Renderer",
      "Adobe Photoshop",
      "Unreal Engine 5",
    ],
  },
  {
    titleKey: "exp.architect2.title",
    companyKey: "exp.architect2.company",
    periodKey: "exp.architect2.period",
    descriptionKey: "exp.architect2.description",
    skills: [
      "Quality Control",
      "Teamwork",
      "Autocad",
      "3dsMax",
      "Corona Renderer",
      "Adobe Photoshop",
      "Unreal Engine 5",
    ],
  },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/an%C4%B1l-tanr%C4%B1verdiler-31791a23a/";
const GITHUB_URL = "https://github.com/aniltanriverdiler";

export default function Resume() {
  const { t } = useTranslation();

  const allTechnologies = techStack.flatMap(
    (cat: TechStackCategory) => cat.items,
  );

  return (
    <div className="min-h-full px-3 py-3 pb-6 bg-white text-black max-w-full overflow-x-hidden text-[13px]">
      {/* Personal info */}
      <div className="flex flex-col items-center text-center gap-1 mb-3">
        <h1 className="text-base font-bold text-black">
          {t("settings.profileName")}
        </h1>
        <p className="text-[11px] text-black">{t("profile.locationValue")}</p>
        <a
          href="mailto:tanriverdileranil@gmail.com"
          className="text-[11px] text-black hover:text-blue-600"
        >
          tanriverdileranil@gmail.com
        </a>
        <div className="flex gap-3 justify-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 underline  text-[11px]"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 underline text-[11px]"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Summary */}
      <p className="text-[12px] text-black leading-snug mb-3 break-normal">
        {t("resume.summaryShort")}
      </p>

      {/* Work Experience */}
      <h2 className="text-blue-600 underline font-bold text-[13px] mb-2">
        {t("resume.workExperience")}
      </h2>
      <div className="space-y-2 mb-3">
        {experiences.map((exp) => (
          <div key={exp.titleKey + exp.companyKey}>
            <h3 className="font-semibold text-black text-[12px]">
              {t(exp.titleKey)} @ {t(exp.companyKey)}
            </h3>
            <p className="text-[10px] text-black opacity-80">
              {t(exp.periodKey)}
            </p>
            <p className="text-[11px] text-black mt-1 leading-snug line-clamp-2">
              {t(exp.descriptionKey)}
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <h2 className="text-blue-600 underline font-bold text-[13px] mb-2">
        {t("resume.educationCertifications")}
      </h2>
      <p className="text-[11px] text-black mb-3">
        {t("profile.educationValue")}
      </p>

      {/* Technologies */}
      <h2 className="text-blue-600 underline font-bold text-[13px] mb-2">
        {t("resume.technologiesLanguages")}
      </h2>
      <p className="text-[11px] text-black leading-snug break-normal mb-3">
        {allTechnologies.join(", ")}
      </p>

      {/* Download */}
      <a
        href="files/anil-resume.pdf"
        download
        className="text-blue-600 underline text-[11px] font-medium"
      >
        {t("resume.download")}
      </a>
    </div>
  );
}
