import image from '../img/20240925_142247.jpg';
import './img.css';
const img=()=>{
    return (
        <div class="image-container">
            <img className='perfil' style={{width:'100%', height:'100%' }} src={image} alt='perfil'/>
        </div>
        
    )
}
export default img