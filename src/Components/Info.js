import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../style.css";
import MySelf from "../madzia.jpg";

function Info() {
  return (
    <header>
      <img src={MySelf} alt="Yes, He's Me!" className="info--img" />
      <h1>Magdalena Całus</h1>
      <p className="header--title">Architect</p>
      <p className="header--website">magdalenacalus.website</p>
      <div className="header--buttons">
        <a
          className="header--envelope button-social"
          href="mailto:magdalena.calus21@gmail.com"
        >
          <FaEnvelope className="header--icon" />
          <span>Email</span>
        </a>
        <a
          className="header--linkedin button-social"
          href="https://www.linkedin.com/in/magdalena-ca%C5%82us-5000a8269/"
        >
          <FaLinkedin className="header--icon" />
          <span>Linkedin</span>
        </a>
      </div>
    </header>
  );
}

export default Info;
