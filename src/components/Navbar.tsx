import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants/index";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/black-logo.svg" alt="logo" />
        <p>Anil's Portfolio</p>

        {/* Navbar Links - Left Side */}
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar Icons - Right Side */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt={`icon-${id}`}
                className="icon-hover cursor-pointer"
              />
            </li>
          ))}
        </ul>

        {/* Current Time */}
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
