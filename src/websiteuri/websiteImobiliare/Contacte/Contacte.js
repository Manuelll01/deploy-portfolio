import React from "react";
import { Acordeon } from "../../../components/Acordeon/Acordeon";
import { Acordeon1 } from "../../../components/Acordeon1/Acordeon1";

import { CasetaPozaAgentDeVanzare, CasetaPozaAgentDeVanzare1 } from "../../../components/CasetaPozaAgentDeVanzare/CasetaPozaAgentDeVanzare1";
import { Footer2 } from "../../../components/Footer2/Footer2";
import { Form1 } from "../../../components/Form1/Form1";
import { IconitaContact2 } from "../../../components/IconitaContact2/IconitaContact2";
import { NavBar3 } from "../../../components/NavBar3/NavBar3";
import { ScrollUpButton } from "../../../components/ScrollUpButton/ScrollUpButton";
import "./Contacte.css"


export const Contacte = () => {


    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()
    return(
        <div className="container-pagina-contacte">
            
            <div className="container-pagina-contacte-2">{/* div-ul asta e facut special pt a fixa footer-ul la baza paginii in css
                                                        chiar daca nu aveam nevoie sa o fac la pagina asta, vreau sa am salvat ca model */}
                
                
                <NavBar3
                    path1="/Versiune2"
                    titlu="Acasă"></NavBar3>
                    
                <div className="container-img-contact"></div>

                <ScrollUpButton></ScrollUpButton>
                
                <div className="container-forum-contact">
                    <div className="container-forum-contact-part-1">
                        <div className="caseta-informatii-contacte">
                            <div className="titlu-part-1">
                                <h2>Informații</h2>
                            </div>
                            <div className="container-iconitacontact-imobiliare">
                                <IconitaContact2 titlu='Adresă' continut='Str. Imaginară, Nr. 54, Brașov'
                                clasa_iconita='fa-sharp fa-solid fa-location-dot'></IconitaContact2>
                            </div>
                            <div className="container-iconitacontact-imobiliare">
                                <IconitaContact2 titlu='Telefon' continut='0774.649.357'
                                clasa_iconita='fa-solid fa-phone'></IconitaContact2>
                            </div>
                            <div className="container-iconitacontact-imobiliare">
                                <IconitaContact2 titlu='E-mail' continut='Negoitamanuel@yahoo.com'
                                clasa_iconita='fa-solid fa-envelope'></IconitaContact2>
                            </div>
                        </div>
                        <div className="caseta-informatii-contacte">
                            <div className="titlu-part-1">
                                <h2>Program</h2>
                            </div>
                            <div className="propgram-part-1">
                                <i class="fa-solid fa-greater-than"></i>
                                <p>Luni-Vineri: 9:00 - 18:00</p>
                            </div>
                            <div className="propgram-part-1">
                                <i class="fa-solid fa-greater-than"></i>
                                <p>Sâmbătă: 10:00 - 14:00 (pe baza de programare)</p>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9934.617849257995!2d-0.13288614140206848!3d51.50120811657396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sPalatul%20Buckingham!5e0!3m2!1sro!2sro!4v1676903398656!5m2!1sro!2sro"></iframe>
                        
                        
                        
                        
                    </div>

                    <div className="container-forum-contact-part-2">
                        <div className="container-form-contact-interior">
                            <Form1></Form1>
                        </div>
                        
                        <div className="container-caseta-poza-agent-de-vanzare">
                            <div className="caseta-poza-agent-de-vanzare">
                                <CasetaPozaAgentDeVanzare1></CasetaPozaAgentDeVanzare1>
                            </div>
                            <div className="caseta-poza-agent-de-vanzare">
                                <CasetaPozaAgentDeVanzare1></CasetaPozaAgentDeVanzare1>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <Footer2></Footer2>
        </div>
        
    )
}