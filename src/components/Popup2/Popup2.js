import React from "react";
import "./Popup2.css"

export const Popup2 = (props) => {
    return (props.trigger) ? (/*daca props.trigger e adevarat se randeaza, daca nu, atunci nu se randeaza nimic*/
        <div className="Popup2-container">
            <div className="popup2" onClick={() => props.inchidere(false)}>
                
            </div>
            <div className="popup2-inner">
                    <button className="close-btn-2" onClick={() => props.inchidere(false)}>&times;</button>
                    {props.children}
            </div>
        </div>
        
    ) : "";/*celalate parti ale popup ului cu care se deschide si inchide componentul sunt in fodlerul CasetaDisplayApartamenteCuPopup
            daca vreau sa am un model dupa care sa lucrez pe viitor in cazul in care uit cum functioneaza */
}