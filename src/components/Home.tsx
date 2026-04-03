import { locations } from "#constants/index";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import useLocationStore from "#store/location";
import useTranslation from "#hooks/useTranslation";
import { Draggable } from "gsap/Draggable";

// Desktop shows a single "Projects" folder — contains Web & Mobile sub-folders.
const projectsFolder = locations.work;

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const { lang } = useTranslation();

  const localName = (item: { name: string; name_tr?: string }) =>
    lang === "tr" && item.name_tr ? item.name_tr : item.name;

  const handleOpen = () => {
    setActiveLocation(projectsFolder);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        <li className="group folder" onClick={handleOpen}>
          <img src="/images/folder.png" alt={localName(projectsFolder)} />
          <p>{localName(projectsFolder)}</p>
        </li>
      </ul>
    </section>
  );
};

export default Home;
