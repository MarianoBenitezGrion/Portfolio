import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import './hide-icon.css';

const HideIcon=({close})=>{
    
    return(
        
        <>
            {close?
                (<div className="icon-container">
                    <FaChevronUp className="hide-icon" />
                    <FaChevronUp className="icon-shadow"/>
                    </div>)
                :
                (<div className="icon-container">
                    <FaChevronDown className="hide-icon"/>
                    <FaChevronDown className="icon-shadow"/>
                </div>)
            }
        </>
    );
}
export default HideIcon;
