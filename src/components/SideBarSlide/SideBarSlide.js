import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBarSlide.css";
import {FaBars} from "react-icons/fa"

export const SideBarSlide = (props) => {
    const [mic, setMic] = useState(false)
    const faMic = () => {
        setMic(!mic)
    }
    const [selected, setSelected] = useState(0);
    const toggle = (i) => {
        
        setSelected(i)
    };

    const data = [
        {
            titlu: <div title="Acasă" className="titlu-SideBarSlide"><i  class="fa-solid fa-house"></i><p>Acasă</p></div>,
            scris: props.Acasa
        },
        {
            titlu: <div title="Proiecte" className="titlu-SideBarSlide"><i  class="fa-solid fa-file"></i><p>Proiecte</p></div>,
            scris: props.Proiecte
        },
        {
            titlu: <div title="Despre mine" className="titlu-SideBarSlide"><i  class="fa-solid fa-user"></i><p>Despre mine</p></div>,
            scris: props.DespreMine
        },
        {
            titlu: <div title="Contactează-mă" className="titlu-SideBarSlide"><i  class="fa-solid fa-phone"></i><p>Contactează-mă</p></div>,
            scris: props.Contacteazama
        },
    ];
    
    return(
        <div className="container-SideBarSlide">
            <div className={mic ? "SideBarSlide-side mic2" : "SideBarSlide-side"}>
                <div className= "buton-meniu-SideBarSlide">
                    <h4 className={mic ? "h4-buton-meniu-SideBarSlide  mic" : "h4-buton-meniu-SideBarSlide"}>Website Portfolio</h4>
                    <Link to='/'  onClick={ () => faMic()}><FaBars></FaBars></Link>
                </div>
                
                <div className="SideBarSlide-side-list">
                    {data.map((item, i) => (
                        <Link className={ selected === i ? "buton-selectie activ": "buton-selectie"} onClick={() => toggle(i)} >{item.titlu}</Link>
                    ))}
                </div>
                <div className={mic ? "poza-SideBarSlide mic4" : "poza-SideBarSlide"}>
                    <h2 className="h2-n1">Negoiță Mircea</h2>
                    <h2 className="h2-n2">N. M.</h2>
                </div>
            </div>
            <div className={mic ? "container-display-content mic3" : "container-display-content"}>
                
                <div className="informatii-personale">
                {data.map((item, i) => (
                    <div className={selected === i ? "spatiu-scris vizibil" : "spatiu-scris"} >{item.scris}</div>
                ))}
                </div>
            </div>
        </div>
    )

    
    
}