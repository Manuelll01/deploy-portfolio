import React from "react";
import "./IconitaContact2.css"

export const IconitaContact2 = (props) => {
    return(/* același component ca si IconitaContact doar ca ii schimb stilul ca sa se vada pe back-gound alb */
        <div className="Container-IconitaContact2">
            <div className="iconita-informatii2"><i class={props.clasa_iconita}></i></div>
            <div className="text-infromatii2">
                <h3>{props.titlu}</h3>
                <p>{props.continut}</p>
            </div>    
        </div>
    )
}