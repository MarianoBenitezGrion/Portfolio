import { Link } from 'react-router-dom';
import './navegacion.css';
const Navegacion=()=>{
    return(
        <div className='nav-footer-container'>
        <h3>Navegación</h3>
        
        <span><Link to={'/'} className='link-footer'>Perfil</Link></span>
        <span><Link to={'/Habilidades'} className='link-footer'>Habilidades</Link></span>
        <span><Link to={'/Proyectos'} className='link-footer'>Proyectos</Link></span>
        <span><Link to={'/Contacto'} className='link-footer'>Contacto</Link></span>
        <span><Link to={'/Estudios'} className='link-footer'>Estudios</Link></span>
        
        </div>
    );
}
export default Navegacion;