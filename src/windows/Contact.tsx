import { socials } from "#constants/index";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/anil.jpg" alt="Anil" className="w-30 rounded-full" />

        <h3>Let's Connect</h3>
        <p>Got a project or question? Let's chat!</p>
        <p>tanriverdileranil@gmail.com</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowsWrapper(Contact, "contact");

export default ContactWindow;
