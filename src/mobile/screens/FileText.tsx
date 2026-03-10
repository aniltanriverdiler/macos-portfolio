import type { LocationChild } from "#types";

type Props = { file: LocationChild };

export default function FileText({ file }: Props) {
  return (
    <div className="p-4 min-h-full bg-white text-black">
      <p className="font-semibold">{file.name}</p>
      {file.description?.map((p, i) => (
        <p key={i} className="mt-2 text-sm text-gray-600">
          {p}
        </p>
      ))}
    </div>
  );
}