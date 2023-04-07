import React, { useState } from "react";
import "./Acordeon.css"


export const Acordeon = (props) => {
    const [selected, setSelected] = useState(null)
    const data = props.data
    const toggle = (i) =>{
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <div className="Acordeon">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => {toggle(i)}}>
                            <h2>{item.titlu}</h2>
                            <span>{selected == i ? '-' : "+"}</span>
                        </div>
                        <div className={selected == i ? "content show" : "content "}>
                            <p>{item.continut}</p>
                        </div>
                    </div>
                ))}
            
        </div>
    )
    
}

