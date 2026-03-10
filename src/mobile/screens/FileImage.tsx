import type { LocationChild } from "#types";

type Props = { file: LocationChild };

export default function FileImage({ file }: Props) {
  const imageUrl = file.imageUrl ?? file.image;

  if (!imageUrl) {
    return (
      <div className="min-h-full flex items-center justify-center bg-gray-100 text-gray-500">
        No image
      </div>
    );
  }

  return (
    <div className="min-h-full bg-black flex items-center justify-center p-4">
      <img
        src={imageUrl}
        alt={file.name}
        className="max-w-full max-h-[85vh] object-contain rounded-lg"
      />
    </div>
  );
}
