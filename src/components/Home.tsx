import { locations } from "#constants/index";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import useLocationStore from "#store/location";
import useTranslation from "#hooks/useTranslation";
import { Draggable } from "gsap/Draggable";

const projectsFolder = locations.work;

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const { lang } = useTranslation();

  const localName = (item: { name: string; name_tr?: string }) =>
    lang === "tr" && item.name_tr ? item.name_tr : item.name;

  const handleOpenProjects = () => {
    setActiveLocation(projectsFolder);
    openWindow("finder");
  };

  const handleOpenAboutMe = () => {
    openWindow("profile");
  };

  const handleOpenSettings = () => {
    openWindow("settings");
  };

  const handleOpenActivityMonitor = () => {
    openWindow("activity-monitor");
  };

  const handleOpenMail = () => {
    openWindow("mail");
  };

  useGSAP(() => {
    Draggable.create(".desktop-icon");
  }, []);

  return (
    <section id="home">
      <ul>
        <li className="group desktop-icon" onClick={handleOpenMail}>
          <img
            src="/images/mail-icon.png"
            alt="Mail"
            className="rounded-xl!"
          />
          <p>Mail</p>
        </li>
        <li className="group desktop-icon" onClick={handleOpenActivityMonitor}>
          <img
            src="/images/monitor-icon.png"
            alt={lang === "tr" ? "Etkinlik Monitörü" : "Activity Monitor"}
            className="rounded-xl!"
          />
          <p>{lang === "tr" ? "Monitör" : "Monitor"}</p>
        </li>
        <li className="group desktop-icon" onClick={handleOpenSettings}>
          <img
            src="/images/settings.png"
            alt={lang === "tr" ? "Ayarlar" : "Settings"}
            className="rounded-xl!"
          />
          <p>{lang === "tr" ? "Ayarlar" : "Settings"}</p>
        </li>
        <li className="group desktop-icon" onClick={handleOpenAboutMe}>
          <img
            src="/images/about-me.png"
            alt={lang === "tr" ? "Hakkımda" : "About Me"}
            className="rounded-xl!"
          />
          <p>{lang === "tr" ? "Hakkımda" : "About Me"}</p>
        </li>
        <li className="group desktop-icon" onClick={handleOpenProjects}>
          <img src="/images/folder.png" alt={localName(projectsFolder)} />
          <p>{localName(projectsFolder)}</p>
        </li>
      </ul>
    </section>
  );
};

export default Home;
