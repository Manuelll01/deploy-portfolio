import React, { useState } from "react";
import "./imobiliare.css";
import { Link } from "react-router-dom";
import { NavBar3 } from "../../components/NavBar3/NavBar3";
import { Footer2 } from "../../components/Footer2/Footer2";


export const WebsiteImobiliare = () => {
    const [sunaAcum, setSunaAcum] = useState("Sună acum")
    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()
    return(
    <div className="pagina-imobiliare">
        <div className="pagina-imobiliare-interior">
            <NavBar3 className="NavBar3"
                    titlu={'Acasă'}
                    path1="/"></NavBar3>
            <div className="Layout-Imobiliare">
                <div className="Container-Scris-Layout">
                    <div className="Casuta-Principala-Layout">
                        <h2>Explore Residence</h2>
                        <h3>un nou mod de a trăi</h3>
                        <p>În acest proiect imobiliar misiunea noastră a fost de a găsi moduri inovative de a înfrunta problemele asociate cu viața urbană. Ne mândrim cu faptul că în urma eforturilor noastre am ajutat 3000 de famili să aibă o viață mai frumoasă</p>
                        <Link to='/Apartamente'>Apartamente</Link>
                    </div>
                    <div className="Casuta-Secundara-Layout">
                        <div className="secundara-mica">
                            <h2>Titlu frumos si aratos</h2>
                            <p> multe cuvinte scrise si rescrise vai vai vai e 2:00 noaptea si nu ma mai gandesc la nimic</p>
                        </div>
                        <div className="secundara-mica">
                            <h2>Titlu frumos si aratos</h2>
                            <p> multe cuvinte scrise si rescrise vai vai vai e 2:00 noaptea si nu ma mai gandesc la nimic</p>
                        </div>
                    </div>
                </div>
                <div className="container-imagine-imobiliare">
                <img src="img/salesman-no-background.png"></img>
                </div>
            </div>




            
            
            
                
        </div>
            
            
        
            <div className='footer-1'>
                <Footer2></Footer2>
            </div>
         
    </div>
    )
    
}