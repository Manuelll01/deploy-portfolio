import React from "react";
import "./FormMic2.css"

export const FormMic2 = () => {
    return(
        <div className="Container-ContactFormMic2">
            <form action="https://formsubmit.co/manuel.mircea20@gmail.com"  method="POST">

            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://manuelll01.github.io/deploy-portfolio/Thank-You-page"></input>

                    <div className="titlu-FormMic2">
                        <h2>Contactează-ne !</h2>
                    </div>
                    <div className="container-input-FormMic2"  id="input1">
                        <input type='text' required='required' name="Nume:" ></input>
                        <span><i class="fa-solid fa-user"></i>Nume*</span>
                    </div>
                     <div className="container-input-FormMic2" id="input2">
                        <input type='text' required='required' name="E-mail:" ></input>
                        <span><i class="fa-solid fa-envelope"></i>E-mail*</span>
                    </div>
                    <div className="container-input-FormMic2" id="input3">
                        <input type='text' required='required' name="Număr de telefon:" ></input>
                        <span><i class="fa-solid fa-phone"></i>Telefon*</span>
                    </div>
                    <div className="container-input-FormMic2" id="text-area">
                        <textarea className="text" type='text' required='required' name="Mesaj:"></textarea>
                        <span><i class="fa-solid fa-phone"></i>Mesaj</span>
                    </div>
                    <div className="container-input-FormMic2">
                        <div className="politica-de-confidentialitate-contact-restaurant">
                            <p> <input type="checkbox" name="vehicle1" value="Bike"></input> Bifează aici daca ești deacord cu politica de confidentialitate și îți dai consimțământul pentru colectarea datelor personale in cazul formularului de angajare.Am citit și sunt de acord cu <a href="">politica de confidentialitate</a>, Termeni si conditii, Politica Cookies</p>
                        </div>
                    </div>
                    <div className="container-input-FormMic2" id="submit">
                        <input type='submit' name="" value='Trimite'></input>
                    </div>
            </form>
        </div>
    )
}