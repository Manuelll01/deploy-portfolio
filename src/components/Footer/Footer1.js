import React from "react";
import "./Footer1.css"


export const Footer1 = () => {
    return(
            <footer className="Footer-1">
                <div className="info-container">
                    <div className="titlu-Footer-1"><h2>Birou de vânzări</h2></div>
                    <div className="info-content">
                        <div className="info">
                            <i class="fa-solid fa-building"></i><p>Str. Imaginara, Nr54, Brasov</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="info-container">
                    <div className="titlu-Footer-1"><h2>Contactează-ne</h2></div>
                    <div className="info-content">
                        <div className="info">
                            <i class="fa-solid fa-phone"></i>
                            <p>0774649357</p>
                        </div>
                        <div className="info">
                            <i class="fa-solid fa-envelope"></i>
                            <p>Negoitamanuel@yahoo</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="info-container">
                    <div className="titlu-Footer-1"><h2>Socail Media</h2></div>
                    <div className="info-content">
                        <div className="info">
                            <i class="fa-brands fa-instagram"></i><p>mircea.negoita.5</p>
                        </div>
                    </div>
                    
                </div>
            </footer>
    )
}