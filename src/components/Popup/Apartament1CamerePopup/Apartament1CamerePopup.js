import React from "react";
import "./Apartament1CamerePopup.css"
import { Footer1 } from "../../Footer/Footer1";
import { FormFullScreen1 } from "../../Form1/Form1";
import { FormMic1 } from "../../FormMic1/FormMic1";

export const Apartament1CamerePopup = () => {
    return(
        <div className="Apartament1CamerePopup-container">
            
            <div className="caseta-informatii-si-poza-apartament">
                <div className="informatii">
                    <div className="x-mp">
                                <h3>42</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                    </div>
                    <p className="paragraf spatiu">Apartamentele moderne cu două camere sunt ideale pentru oricine. Spațiul oferit prin compartimentarea inteligentă oferă posibilitatea personalizării în stil propriu.</p>
                    <p className="paragraf spatiu">Avantajele apartamentului de o camera:</p>
                    <ul className=" spatiu lista">
                        <li>compartimentare care oferă intimitate;</li>
                        <li>suprafață utilă generoasă;</li>
                        <li>spații vitrate și acces la terasă atât din camere, cât și din bucatarie</li>
                        <li>confort termic ridicat.</li>
                    </ul>
                    <div className="pret">
                                <p>Preț de la: 53.300 €</p>
                    </div>
                </div>
                <div className="poza-apartament-popup"><img className="img-popup1" src="img/schita_apartament_1camere.jpg"></img></div>
            </div>
            <div className="poze-grid-apartament-popup">
                <div className="coloana"><img src="img/apartament_interior1.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior2.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior3.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior4.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior5.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior6.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior7.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior8.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior9.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior10.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior11.jpg"></img></div>
                <div className="coloana"><img src="img/apartament_interior12.jpg"></img></div>
            </div>
            <div className="footer1">
                <Footer1></Footer1>
            </div>
            <div className="contact-form-si-alte-informatii-popup">
                <div className="contact-form-popup">
                    <FormMic1></FormMic1>
                </div>
                <div className="alte-informatii-plus-nota">
                    <div className="alte-informatii">
                        <div className="celula-titlu-popup"><p>Incapere</p></div>
                        <div className="celula-titlu-popup"><p>Suprafata utila</p></div>
                        <div className="celula"><p>Living & Bucatarie</p></div>
                        <div className="celula"><p>20,50 m²</p></div>
                        <div className="celula"><p>Dormitor</p></div>
                        <div className="celula"><p>10,35 m²</p></div>
                        <div className="celula"><p>Baie</p></div>
                        <div className="celula"><p>4,50 m²</p></div>
                        <div className="celula"><p>Terasa</p></div>
                        <div className="celula"><p>	6,65 m²</p></div>
                    </div>
                    <p className="nota">Notă: Imaginile tip randări, cu apartamente, sunt cu titlu de prezentare și e posibil să apară modificări. Mobilierul este exclusiv cu titlu de prezentare, nefiind inclus în oferta constructorului.</p>
                </div>
                

            </div>
            
        </div>
    )
}