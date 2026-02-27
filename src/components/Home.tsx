import { locations } from "#constants/index";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import useLocationStore from "#store/location";
import type { LocationChild } from "#types";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

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
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
