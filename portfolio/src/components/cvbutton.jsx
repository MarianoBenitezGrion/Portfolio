import { IoMdDownload } from "react-icons/io";
import './cvbutton.css';
import { Button } from 'react-bootstrap-buttons';
import { useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import CVIcon from "./cv-icon";
const CVButton=()=>{
    const [descarga, setDescarga]=useState(false);
 
    
    return(
        <>
            <div id="cv-button" class="cv-button-container" onClick={()=>{setDescarga(true)}}> 
            <a href="https://MarianoBenitezGrion.github.io/Portfolio/assets/files/CV-Mariano-Benitez-Grion.pdf" download="CV-Mariano-Benitez-Grion.pdf" className="cv-button-style" >
                <CVIcon download={descarga} /></a>
            </div>
        </>
    )
}

export default CVButton;