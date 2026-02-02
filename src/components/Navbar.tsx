import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants/index";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p>Adrian's Portfolio</p>

        {/* Navbar Links - Right Side */}
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar Icons - Left Side */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
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
