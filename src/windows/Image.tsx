import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowsControls from "#components/WindowControls";
import useWindowStore from "#store/window";
import { Plus, Share2, SquarePen } from "lucide-react";

const Image = () => {
  // Get data from window store
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowsControls target="imgfile" />

        {/* Windows Title */}
        <h2 className="flex-1 text-center font-bold text-sm text-gray-400">
          {name}
        </h2>

        {/* Windows Actions Buttons */}
        <div className="flex items-center gap-2 text-gray-400">
          <SquarePen className="icon" />
          <Plus className="icon" />
          <Share2 className="icon" />
        </div>
      </div>

      {/* Windows Image Preview */}
      <div className="preview">
        {imageUrl ? <img src={imageUrl} alt={name} /> : null}
      </div>
    </>
  );
};

const ImageWindow = WindowsWrapper(Image, "imgfile");

export default ImageWindow;
