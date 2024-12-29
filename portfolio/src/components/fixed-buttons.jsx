import CVButton from './CVButton.jsx';
import WhatsappButton from './whatsappbutton';
import './fixed-buttons.css';
import HideIcon from './hide-icon.jsx';
import { useState } from 'react';

const FixedButtons=()=>{
const [hide, setHide]=useState(false);
return(
<>

        <div className='fixed-container'>
    
            <div className='pointer' onClick={()=>{
                const wpp= document.getElementById('wpp');
                const cv=document.getElementById('cv');
                wpp.classList.toggle('d-none');
                cv.classList.toggle('d-none');

                hide?setHide(false)
                :
                setHide(true);
            }}> 
            <HideIcon close={hide} />
            </div>
            <div id='wpp'><WhatsappButton /></div>
            <div id='cv'><CVButton /></div>
        </div>
</>
)
}

export default FixedButtons;