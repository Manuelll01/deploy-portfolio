import React from "react";
import "./Popup.css"

export const Popup = (props) => {
    return (props.trigger) ? (/*daca props.trigger e adevarat se randeaza, daca nu, atunci nu se randeaza nimic*/
        <div className="Popup-container">
            <div className="popup" onClick={() => props.inchidere(false)}>
                
            </div>
            <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.inchidere(false)}>&times;</button>
                    {props.children}
            </div>
        </div>
        
    ) : "";/*celalate parti ale popup ului cu care se deschide si inchide componentul sunt in fodlerul CasetaDisplayApartamenteCuPopup
            daca vreau sa am un model dupa care sa lucrez pe viitor in cazul in care uit cum functioneaza */
}