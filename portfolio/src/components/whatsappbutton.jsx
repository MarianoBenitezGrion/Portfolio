import { FaWhatsapp } from "react-icons/fa";
import './whatsapp-button.css';
const WhatsappButton=()=>{
    return(

        <div className="wpp-button-container">
            <a href="https://wa.me/+541155935520"><FaWhatsapp size={'90%'} color="white"/></a>
        </div>
       
    );
}
export default WhatsappButton;