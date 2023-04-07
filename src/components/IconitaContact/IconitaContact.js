import React from "react";
import "./IconitaContact.css"

export const IconitaContact = (props) => {
    return(
        <div className="Container-IconitaContact">
            <div className="iconita-informatii"><i class={props.clasa_iconita}></i></div>
            <div className="text-infromatii">
                <h3>{props.titlu}</h3>
                <p>{props.continut}</p>
            </div>    
        </div>
    )
}