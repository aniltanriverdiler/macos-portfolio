import type { LocationChild } from "#types";
import useTranslation from "#hooks/useTranslation";

type Props = { file: LocationChild };

export default function FileText({ file }: Props) {
  const { lang } = useTranslation();
  const paragraphs =
    lang === "tr" && file.description_tr
      ? file.description_tr
      : (file.description ?? []);

  return (
    <div className="p-4 min-h-full bg-white text-black overflow-y-auto">
      <p className="font-semibold">
        {lang === "tr" && file.name_tr ? file.name_tr : file.name}
      </p>
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-2 text-sm text-gray-600">
          {p}
        </p>
      ))}
    </div>
  );
}
