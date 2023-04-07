import React from "react";
import "./CardInformatii1.css"

export const CardInformatii1 = (props) => {
    return(
        <div className="Container-CardInformatii1">
            <div className="Container-CardInformatii1-Titlu">
                <h4>Titlu</h4>
            </div>
            <div className="Container-CardInformatii1-Text">
                {props.children}
            </div>

        </div>
    )
}