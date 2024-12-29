import { useRef } from 'react';
import ImagenProyectoAeropuerto from '../img/Captura de pantalla 2024-12-18 104622.png';
import ImagenProyectoConsultorioMedico from '../img/imagen-consultorio-medico.png';
import './proyectos.css';
const Proyectos=()=>{
    
    return(
        <>
        <h3>Proyectos</h3>
        <p>A continuación presento los proyectos realizados durante mis estudios o de forma personal.</p>
        <div className="projects-container">
        <div className="project-item">
            <picture className='project-picture'>
                <source type="image/png" srcSet={ImagenProyectoConsultorioMedico}/>
                <img  alt="proyecto-consultorio-medico" />
            </picture>
            <div id='descripcion-consultorio-medico' className='project-description'>
                <h3>Consultorio Medico</h3>
                <p>Java, Spring, Hibernate, MySQL</p>
                <div className='description-button'>
                    <a href="https://github.com/MarianoBenitezGrion/Consultorio-Medico">Ver repositorio</a>
                </div>
            </div>
        </div>
        <div className="project-item" onPointerOver={()=>{
            opacityOn('proyectoaeropuerto')}} 
        onPointerOut={()=>{
            opacityOff('proyectoaeropuerto')}}>
            <picture id='proyectoaeropuerto' className='project-picture'>
                <source type="image/png" srcSet={ImagenProyectoAeropuerto}/>
                <img  alt="proyecto-aeropuerto" />
            </picture>
            <div id='descripcion-aeropuerto' className='project-description'>
                <h3>Aeropuerto</h3>
                <p>C#, ASP.NET, MySQL</p>
                <div className='description-button'>
                    <a href="https://github.com/MarianoBenitezGrion/Aeropuerto">Ver repositorio</a>
                </div>
            </div>
        </div>
        </div>
        </>
    );

}
let opacityOn=(id)=>{
    const img=document.getElementById(id);
    img.classList.add('over');
}
let opacityOff=(id)=>{
    const img=document.getElementById(id);
    img.classList.remove('over');
}
export default Proyectos;