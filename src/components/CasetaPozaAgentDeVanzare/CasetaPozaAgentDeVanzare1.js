import React from "react";
import { Link } from "react-router-dom";
import "./CasetaPozaAgentDeVanzare1.css"

export const CasetaPozaAgentDeVanzare1 = () => {
    return(
        <div className="caseta-poza-agenta-de-vanzare1">
            <div className="pozitie-angajat">
                <p>Agent de vânzări</p>
                
            </div>
            <div className="poza-si-restul">
                
                <div className="container-poza-CasetaPozaAgentDeVanzare1"><img className="poza1-noutati" src="./img/poza1.jpg"></img></div>
                <div className="adresa-sediu">
                    <div className="iconita-1-CasetaPozaAgentDeVanzare1"><i class="fa-sharp fa-solid fa-location-dot"></i></div>
                    <p>Str. imaginară, Nr. 48</p>
                </div>
                <h5 className="nume-CasetaPozaAgentDeVanzare1">Negoiță Mircea Manuel</h5>
                <div className="butoane-iconite-social-media">
                    <Link to="/Contacte"><i class="fa-brands fa-facebook"></i></Link>
                    <Link to="/Contacte"><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to="/Contacte"><i class="fa-brands fa-twitter"></i></Link>
                    <Link to="/Contacte"><i class="fa-brands fa-square-instagram"></i></Link>
                    
                    
                    
                </div>
                <div className="butoane-contactare">
                    <Link to="/Contacte"><i class="fa-solid fa-envelope"></i> Mesaj</Link>
                    <Link to="/Contacte"><i class="fa-solid fa-phone"></i></Link>
                </div>
            </div>
        </div>
    )
}