import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowsControls from "#components/WindowControls";
import useWindowStore from "#store/window";
import useTranslation from "#hooks/useTranslation";
import { Plus, Share2, SquarePen } from "lucide-react";

const Image = () => {
  const { windows } = useWindowStore();
  const { lang } = useTranslation();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, name_tr, imageUrl } = data;
  const displayName = lang === "tr" && name_tr ? name_tr : name;

  return (
    <>
      <div id="window-header">
        <WindowsControls target="imgfile" />

        <h2 className="flex-1 text-center font-bold text-sm text-gray-400">
          {displayName}
        </h2>

        <div className="flex items-center gap-2 text-gray-400">
          <SquarePen className="icon" />
          <Plus className="icon" />
          <Share2 className="icon" />
        </div>
      </div>

      <div className="preview">
        {imageUrl ? <img src={imageUrl} alt={displayName} /> : null}
      </div>
    </>
  );
};

const ImageWindow = WindowsWrapper(Image, "imgfile");

export default ImageWindow;
