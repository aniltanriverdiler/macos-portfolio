import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Search, X } from "lucide-react";

import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowsControls from "#components/WindowControls";
import { gallery, photosLinks } from "#constants/index";
import useTranslation from "#hooks/useTranslation";

const Photos = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedPhoto = selectedIndex === null ? null : gallery[selectedIndex];

  const closePreview = useCallback(() => setSelectedIndex(null), []);

  const showPreviousPhoto = useCallback(() => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null
        ? null
        : (currentIndex - 1 + gallery.length) % gallery.length
    );
  }, []);

  const showNextPhoto = useCallback(() => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex + 1) % gallery.length
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
      if (event.key === "ArrowLeft") showPreviousPhoto();
      if (event.key === "ArrowRight") showNextPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePreview, selectedIndex, showNextPhoto, showPreviousPhoto]);

  return (
    <>
      <div id="window-header">
        <WindowsControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="photos-body">
        <div className="sidebar">
          <h2>{t("photos.title")}</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <div className="gallery-heading">
            <div>
              <h2>Library</h2>
              <p>{gallery.length} photos</p>
            </div>
          </div>

          <ul className="gallery-grid">
            {gallery.map(({ id, src, alt, title }, index) => (
              <li
                key={id}
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open ${title}`}
              >
                <img src={src} alt={alt} />
                <div className="photo-overlay">
                  <p>{title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedPhoto && (
        <div className="photo-preview" onClick={closePreview}>
          <button
            type="button"
            className="preview-close"
            onClick={closePreview}
            aria-label="Close preview"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            className="preview-nav preview-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousPhoto();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="preview-image-wrap" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <p>{selectedPhoto.title}</p>
          </div>

          <button
            type="button"
            className="preview-nav preview-next"
            onClick={(event) => {
              event.stopPropagation();
              showNextPhoto();
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
};

const PhotosWindow = WindowsWrapper(Photos, "photos");

export default PhotosWindow;
