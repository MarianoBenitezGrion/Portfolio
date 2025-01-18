import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar=()=>{
    
return(
    <div className='nav-container'>
        <Link to={'/'} className='link'>Perfil</Link>
        <Link to={'/Habilidades'} className='link'>Habilidades</Link>
        <Link to={'/Proyectos'} className='link'>Proyectos</Link>
        <Link to={'/Contacto'} className='link'>Contacto</Link>
        <Link to={'/Estudios'} className='link'>Estudios</Link>
    </div>
)
}
export default Navbar;