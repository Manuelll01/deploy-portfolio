import React from "react";
import { Link } from "react-router-dom";
import "./CasetaMicaPozaPrezentareWebsite.css"

export const CasetaMicaPozaPrezentareWebsite = (props) => {
    return(
        <div className="Container-CasetaMicaPozaPrezentareWebsite">
            <h2>{props.descriere}</h2>
            <div className="Container-Buton-CasetaMica">
                <Link to={props.to}>Accesează Siteul <i class="fa-thin fa-greater-than"></i></Link>
            </div>
            <img src={props.img}></img>
            
           
        </div>
    )
}