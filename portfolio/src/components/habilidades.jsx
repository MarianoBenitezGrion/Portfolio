import { DiJava } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import './habilidades.css';
const Habilidades=()=>{
    const classItem="item";
    const boxSize='cover';
    
    return (
        <>
        <h3>Habilidades</h3>
        <div class="d-grid">
            <div className={classItem}>
                <DiJava size={boxSize}/>
                <span>Java</span>
            </div>
            <div className={classItem}>
                <DiJsBadge size={boxSize}/>
                <span>Javascript</span>
            </div>
            <div className={classItem}>
                <DiGit size={boxSize}/>
                <span>Git</span>
            </div>
            <div className={classItem}>
                <FaReact size={boxSize}/>
                <span>React</span>
            </div>
            <div className={classItem}>
                <FaDatabase size={boxSize}/>
                <span>SQL</span>
            </div>
            <div className={classItem}>
                <FaHtml5 size={boxSize}/>
                <span>HTML</span>
            </div>
            <div className={classItem}>
                <IoLogoCss3 size={boxSize}/>
            <span>CSS</span>
            </div>
            <div className={classItem}>
                <SiSpring size={boxSize}/>
            <span>Spring</span>
            </div>
        </div>
        </>
    );
}
export default Habilidades;