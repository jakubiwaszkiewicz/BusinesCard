import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import "../style.css";

import { FaBehance } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com/profile.php?id=100012492014729">
        <FaFacebookSquare className="footer--icon" />
      </a>
      <a href="https://www.instagram.com/calu.sfx/">
        <FaInstagramSquare className="footer--icon" />
      </a>
      <a href="https://www.behance.net/magdacaus1">
        <FaBehance className="footer--icon" />
      </a>
    </footer>
  );
}

export default Footer;
