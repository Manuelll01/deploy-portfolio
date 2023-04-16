import React from "react";
import "./Form1.css"


export const Form1 = () => {
    return(
        <div className="Container-Form1">
            <form>
                    <div className="titlu-Form1">
                        <h2>Contactează-ne !</h2>
                    </div>
                    <div className="container-input-Form1"  id="input1-Form1">
                        <input type='text' required='required' ></input>
                        <span><i class="fa-solid fa-user"></i><p>Nume*</p></span>
                    </div>
                     <div className="container-input-Form1" id="input2-Form1">
                        <input type='text' required='required'  ></input>
                        <span><i class="fa-solid fa-envelope"></i><p>E-mail*</p></span>
                    </div>
                    <div className="aceasi-linie">
                        <div className="container-input-Form1" id="input3-Form1">
                            <input type='text' required='required'  ></input>
                            <span><i class="fa-solid fa-phone"></i><p>Telefon*</p></span>
                        </div>
                        <div className="container-input-Form1" id="input4-Form1">
                            <input type='text' required='required'  ></input>
                            <span><i class="fa-solid fa-envelopes-bulk"></i><p>Cod Poștal*</p></span>
                        </div>
                    </div>
                    
                    <div className="container-input-Form1" id="text-area">
                        <textarea className="text" type='text' required='required'></textarea>
                        <span><i class="fa-solid fa-message"></i><p>Mesaj</p></span>
                    </div>
                    <div className="container-input-Form1">
                        <div className="politica-de-confidentialitate-contact-restaurant">
                            <p> <input type="checkbox" name="vehicle1" value="Bike"></input> Bifează aici daca ești deacord cu politica de confidentialitate și îți dai consimțământul pentru colectarea datelor personale in cazul formularului de angajare.Am citit și sunt de acord cu <a href="">politica de confidentialitate</a>, Termeni si conditii, Politica Cookies</p>
                        </div>
                    </div>
                    <div className="container-input-Form1" id="submit">
                        <input type='submit' name="" value='Trimite'></input>
                    </div>
            </form>
        </div>
    )
}