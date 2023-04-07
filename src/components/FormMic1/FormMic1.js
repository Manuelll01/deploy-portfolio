import React from "react";
import "./FormMic1.css"


export const FormMic1 = () => {
    return(
        <div className="FormMic1">
            <form>
                    <div className="titlu-FormMic1">
                        <h2>Contactează-ne</h2>
                    </div>
                    <div className="container-input-FormMic1">
                        <input type='text' required='required' ></input>
                        <span><i class="fa-solid fa-user"></i>Nume*</span>
                    </div>
                     <div className="container-input-FormMic1">
                        <input type='text' required='required' ></input>
                        <span><i class="fa-solid fa-envelope"></i>E-mail*</span>
                    </div>
                    <div className="container-input-FormMic1">
                        <input type='text' required='required' ></input>
                        <span><i class="fa-solid fa-phone"></i>Telefon*</span>
                    </div>
                    <div className="container-input-FormMic1">
                        <textarea className="text" type='text' required='required'></textarea>
                        <span><i class="fa-solid fa-message"></i>Mesaj</span>
                    </div>
                    <div className="container-input-FormMic1">
                        <input type='submit' name="" value='Send'></input>
                    </div>
            </form>
        </div>
    )
}