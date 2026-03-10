import { socials } from "#constants/index";
import useTranslation from "#hooks/useTranslation";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-full px-4 py-6 bg-white text-black overflow-y-auto">
      {/* Profile section */}
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src="/images/anil.jpg"
          alt="Anil"
          className="w-24 h-24 rounded-full object-cover ring-2 ring-black/80 mb-4"
        />
        <h2 className="text-xl font-bold text-black mb-2">
          {t("contact.getInTouch")}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
          {t("contact.description")}
        </p>
      </div>

      {/* Contact buttons */}
      <div className="space-y-3 mx-16">
        {socials.map(({ id, bg, link, icon, text }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full px-4 py-6 rounded-xl text-white font-medium active:scale-[0.98] transition-transform"
            style={{ backgroundColor: bg }}
          >
            <img src={icon} alt={text} className="w-6 h-6 shrink-0 invert" />
            <span>{text}</span>
          </a>
        ))}
      </div>

      {/* Email */}
      <a
        href="mailto:tanriverdileranil@gmail.com"
        className="block mt-6 text-center text-md text-gray-600 hover:text-blue-600 font-bold"
      >
        tanriverdileranil@gmail.com
      </a>
    </div>
  );
}
