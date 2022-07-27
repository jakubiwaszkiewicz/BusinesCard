import { FaLinkedin ,FaEnvelope } from "react-icons/fa";
import MySelf from '../myself.jpg'

function Info () {
    return(
        <header>
            <img src={MySelf} alt="Yes, He's Me!" className="info--img" />
            <h1>Jakub Iwaszkiewicz</h1>
            <p>jakubiwaszkiewicz.website</p>
            <div className="buttons">
                <button> <FaEnvelope />Email</button>
                <button> <FaLinkedin />Linkedin</button>
            </div>
        </header>
    );
}

export default Info