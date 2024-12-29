import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import './contacto.css';
const Contacto=()=>{
    return (
        <div className="contact-container">
        <h3> Información de contacto</h3>
        <span><CiMail /><a href="mailto:marianobenitezgrion@gmail.com">marianobenitezgrion@gmail.com</a></span>
        <span><FaGithub /><a href="https://github.com/MarianoBenitezGrion">MarianoBenitezGrion</a></span>
        <span><IoLogoLinkedin /><a href="https://www.linkedin.com/in/mariano-benitez-grion-04076426a/">Mariano Benitez Grion</a></span>
        <span><FaPhoneAlt />+54 11 5593-5520</span>
        </div>
    );
}
export default Contacto;