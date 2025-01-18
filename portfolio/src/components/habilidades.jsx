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
        <div className="habilidades-container">
        <h3>Habilidades</h3>
        <div class="d-grid">
            <div className={classItem}>
            <div className="item-icon">
                <DiJava size={boxSize}/>
                <span>Java</span>
            </div>
            </div>
            <div className={classItem}>
                <div className="item-icon">
                    <DiJsBadge size={boxSize}/>
                    <span>Javascript</span>
                </div>
            </div>
            <div className={classItem}>
                <div className="item-icon">
                    <DiGit size={boxSize}/>
                    <span>Git</span>
                </div>
            </div>
            <div className={classItem}>
                <div className="item-icon">
                    <FaReact size={boxSize}/>
                    <span>React</span>
                </div>
            </div>
            <div className={classItem}>
                <div className="item-icon">
                    <FaDatabase size={boxSize}/>
                    <span>SQL</span>
                </div>
            </div>
            <div className={classItem}>
                <div className="item-icon">
                    <FaHtml5 size={boxSize}/>
                    <span>HTML</span>
                </div>
            </div>
            <div className={classItem}>
                <div className="item-icon">
                    <IoLogoCss3 size={boxSize}/>
                <span>CSS</span>
                </div>
            </div>
            <div className={classItem}>
                <div className="item-icon">
                    <SiSpring size={boxSize}/>
                <span>Spring</span>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Habilidades;