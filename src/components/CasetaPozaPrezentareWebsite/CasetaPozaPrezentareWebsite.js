import React from "react";
import { Link } from "react-router-dom";
import "./CasetaPozaPrezentareWebsite.css"

export const CasetaPozaPrezentareWebsite = (props) => {
    return(
        <div className="Container-CasetaPozaPrezentareWebsite">
            <div className="container-exterior-imagine">
                <div className="container-interior-imagine">
                    <img src={props.img}></img>
                </div>
            </div>
            
            <div className="container-interior-scris">
                <h4>{props.titlu}</h4>
                <h2>{props.subtitlu}</h2>
                <p>{props.descriere}</p>
                
            </div>
            <Link to={props.to}>Accesează siteul</Link>
           
        </div>
    )
}