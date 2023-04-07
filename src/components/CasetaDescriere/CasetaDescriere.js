import React, { useState } from "react";
import "./CasetaDescriere.css"
import "./CasetaDescriereb.js"


export const CasetaDescriere = () => {
    const [selected, setSelected] = useState(0);
    const toggle = (i) => {
        
        setSelected(i)
    };

    const data = [
        {
            titlu: 'Detalii personale',
            scris: 'bla bla bla bla bla detalii personale bla bla bla bla bla'
        },
        {
            titlu: 'Despre mine',
            scris: 'bla bla bla bla bla despre mine bla bla bla bla bla'
        },
        {
            titlu: 'contactează-mă',
            scris: 'bla bla bla bla bla contacteaza-ma bla bla bla bla bla'
        },
    ];
    
    return(
        <div className="container">
            <div className="butoane-selectie">
                <ul>
                    {data.map((item, i) => (
                        <li className={ selected === i ? "buton-selectie activ": "buton-selectie"} onClick={() => toggle(i)}>{item.titlu}</li>
                    ))}
                </ul>
            </div>
            <div className="container-interior">
                <div className="poza"><img src="./img/poza1.jpg"></img></div>
                <div className="informatii-personale">
                {data.map((item, i) => (
                    <div className={selected === i ? "spatiu-scris vizibil" : "spatiu-scris"} >{item.scris}</div>
                ))}
                </div>
            </div>

        </div>
    )

    
    
}