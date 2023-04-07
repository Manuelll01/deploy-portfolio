import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemRestaurantPopup.css"

export const ItemRestaurantPopup = (props) => {
    
    const [number, setNumber] = useState(1)
    const pret = props.pret
    const pretTotal = pret * number
    const minus = () => {
        if (number === 1){
            setNumber(1)
        }
        else{setNumber(number - 1)}
        
    }
    const plus = () => {
        setNumber(number + 1)
    }
    return(
        <div className="Container-ItemRestaurantPopup">
            <div className="Container-Imagine-ItemRestaurantPopup"><img src={props.imagine}></img></div>
            <div className="Continut-ItemRestaurantPopup">
                <div className="titlu-ItemRestaurantPopup"><h2>{props.titlu}</h2></div>
                <div className="cantitate-ItemRestaurantPopup"><p>{props.cantitate}</p></div>
                <div className="descriere-ItemRestaurantPopup">
                    <p> {props.descriere}</p>
                </div>
                <div className="pret-plus-unitate-ItemRestaurantPopup">
                    <p>{props.pret} RON</p>
                    <p>{props.unitate}</p>
                </div>
                <div className="sugestii-ItemRestaurantPopup">
                    <p>Sugestii:</p>
                    <textarea placeholder="Adaugă orice informatie suplimentară legată de comandă..."></textarea>
                </div>
                <div className="counter-plus-buton">
                    <div className="counter">
                        <i class="fa-solid fa-minus" onClick={minus}></i>
                        <p>{number}</p>    
                        <i class="fa-solid fa-plus" onClick={plus}></i>
                    </div>
                    <div className="buton-ItemRestaurantPopup">
                        <Link>adaugă în coș {pretTotal} RON</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}