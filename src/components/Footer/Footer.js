import { AiOutlineGithub } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className='container footer'>
      <ul>
        <li>
          <a href='https://github.com/imbaman'>
            <AiOutlineGithub size={40} />
          </a>
        </li>
        <li>Made by Grzegorz</li>
      </ul>
    </footer>
  );
};
export default Footer;
