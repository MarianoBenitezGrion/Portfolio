import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Contacto from "./contacto";
import './footer.css';
import Estudios from "./estudios";
import Navegacion from "./navegacion"
import { HashRouter } from "react-router-dom";
const Footer=()=>{
    return(
        <div className="footer-container">
        <Contacto />
        <Estudios />
        
        <Navegacion />
        
        
        </div>
    );
}
export default Footer;