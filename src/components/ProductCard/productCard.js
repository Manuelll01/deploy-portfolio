import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { ProductCard1Data } from "./productCardData";

export const ProductCard = (props) => { /* !!!!!!! din cauza faptului ca e facut cu props si cu .map in aplicatia din folderul app componentul
                                        asta poate fi folosit doar din aplicatia <ProductCard1App> pentru a se randa informatiile din card !!!!!!!! */
    return(
        <div className="container-productcard1">
            
            <div className="imagine_produs">
                <img src={props.img}></img>
            </div>
            <div className="info_produs">
                <div className="titlu"> {props.titlu} </div>
                <div className="pret">
                    <p className="e1">{props.pretVechi} €</p>
                    <p className="e2">{props.pretNou} €</p>
                    <p className="e3"></p>
                    <p className="e4">+ TVA</p>
                </div>
            
                
            <Link to='/' className="buton-final"><div className="buton-productcard1">detalii</div></Link>
            </div>
            
            
            
        </div>
    )
}