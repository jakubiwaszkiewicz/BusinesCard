import { FaLinkedin ,FaEnvelope } from "react-icons/fa";
import MySelf from '../myself.jpg'
import '../style.css';

function Info () {
    return(
        <header>
            <img src={MySelf} alt="Yes, He's Me!" className="info--img" />
            <h1>Jakub Iwaszkiewicz</h1>
            <p className="header--title">Frontend Developer</p>
            <p className="header--website">jakubiwaszkiewicz.website</p>
            <div className="header--buttons">
                <button className="header--envelope"><FaEnvelope className="header--icon"/><span>Email</span></button>
                <button className="header--linkedin"><FaLinkedin className="header--icon"/><span>Linkedin</span></button>
            </div>
        </header>
    );
}

export default Info