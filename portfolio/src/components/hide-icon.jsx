import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import './hide-icon.css';
const HideIcon=({close})=>{
    return(
        
        <>
            {close?
                (<><FaChevronUp className="hide-icon"/></>)
                :
                (<><FaChevronDown className="hide-icon"/></>)
            }
        </>
    )
}
export default HideIcon;
