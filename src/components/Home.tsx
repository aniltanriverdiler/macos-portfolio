import { locations } from "#constants/index";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import useLocationStore from "#store/location";
import useTranslation from "#hooks/useTranslation";
import type { LocationChild } from "#types";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const { lang } = useTranslation();

  const localName = (item: { name: string; name_tr?: string }) =>
    lang === "tr" && item.name_tr ? item.name_tr : item.name;

  const handleOpenProjectFinder = (project: LocationChild) => {
    if (project.kind === "folder") {
      setActiveLocation(project as any);
      openWindow("finder");
    }
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="group folder"
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={localName(project)} />
            <p>{localName(project)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
