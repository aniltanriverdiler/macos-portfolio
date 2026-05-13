import { gallery } from "#constants/index";
import { useMobileNavStore } from "../navigation/store";
import type { LocationChild } from "#types";

export default function Photos() {
  const push = useMobileNavStore((s) => s.push);

  const openImage = (id: number, src: string, title: string) => {
    const imageData: LocationChild = {
      id,
      name: title,
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: src,
    };
    push({ name: "file-image", file: imageData });
  };

  return (
    <div className="min-h-full p-4 overflow-y-auto bg-white">
      <ul className="grid grid-cols-2 gap-3">
        {gallery.map(({ id, src, alt, title }) => (
          <li
            key={id}
            onClick={() => openImage(id, src, title)}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
