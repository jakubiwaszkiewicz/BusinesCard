import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import '../style.css';

function Footer () {
    return(
        <footer>
            <FaTwitterSquare className="footer--icon"/> <FaFacebookSquare className="footer--icon"/>
            <FaInstagramSquare className="footer--icon"/> <FaGithubSquare className="footer--icon"/>
        </footer>
    );
}

export default Footer