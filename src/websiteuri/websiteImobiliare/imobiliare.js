import React, { useState } from "react";
import "./imobiliare.css";
import { Link } from "react-router-dom";
import { NavBar3 } from "../../components/NavBar3/NavBar3";


export const WebsiteImobiliare = () => {
    const [sunaAcum, setSunaAcum] = useState("Sună acum")
    return(
    <div className="pagina-imobiliare">
        
            <NavBar3 className="NavBar3"
                    titlu={'Acasă'}
                    path1="/deploy-portfolio"></NavBar3>





            
                <video autoPlay loop muted plays-inline src="img/realestate4.mp4" class="loop-video"><p></p></video>
            
            <div className="container-aliniat-prima-pagina">
                <div className="titlu-aliniat"><h1>Totul pentru calitate</h1></div>
                <div className="container-butoane-prima-pagina">
                    <div className="buton1-prima-pagina"><Link to="/Apartamente">Vezi apartamente</Link></div>
                    <div className="buton2-prima-pagina"><Link onClick={() => {setSunaAcum("0774 649 357")}} to="/Versiune2">{sunaAcum}</Link></div>
                </div>
                              
            </div>
                
            
        
        
         
    </div>
    )
    
}