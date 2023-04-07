import React from "react";
import "./CasetaScris.css";

export const CasetaScris = (props) => {
    return(
        <div className="container-CasetaScris">
            <div className="titlu-CasetaScris"><h3>{props.titlu}</h3></div>
            <div className="continut-CasetaScris">{props.continut}</div>
        </div>
    )
}