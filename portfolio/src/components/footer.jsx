import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Contacto from "./contacto";
import './footer.css';
import Estudios from "./estudios";
const Footer=()=>{
    return(
        <div className="footer-container">
        <Contacto />
        <Estudios />
        </div>
    );
}
export default Footer;