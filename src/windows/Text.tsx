import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowsControls from "#components/WindowControls";
import useWindowStore from "#store/window";
import useTranslation from "#hooks/useTranslation";

const Text = () => {
  const { windows } = useWindowStore();
  const { lang } = useTranslation();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, name_tr, image, subtitle, subtitle_tr, description, description_tr } = data;

  const displayName = lang === "tr" && name_tr ? name_tr : name;
  const displaySubtitle = lang === "tr" && subtitle_tr ? subtitle_tr : subtitle;
  const displayDescription = lang === "tr" && description_tr ? description_tr : description;

  return (
    <>
      <div id="window-header">
        <WindowsControls target="txtfile" />
        <h2>{displayName}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white dark:bg-gray-900">
        {image ? (
          <div className="w-full">
            <img src={image} alt={displayName} className="w-full h-auto rounded" />
          </div>
        ) : null}

        {displaySubtitle ? (
          <h3 className="text-lg font-semibold dark:text-white">{displaySubtitle}</h3>
        ) : null}

        {Array.isArray(displayDescription) && displayDescription.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800 dark:text-gray-200">
            {displayDescription.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowsWrapper(Text, "txtfile");

export default TextWindow;
