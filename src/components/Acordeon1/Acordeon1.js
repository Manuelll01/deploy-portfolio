import React, { useState } from "react";
import "./Acordeon1.css"

export const Acordeon1 = () => {  
    const [variabila, setVariabila] = useState(false)
    const [variabila2, setVariabila2] = useState(false)
    const [variabila3, setVariabila3] = useState(false)
    const clickHandler = () => {
        setVariabila(!variabila)
    }
    const clickHandler2 = () => {
        setVariabila2(!variabila2)
    }
    const clickHandler3 = () => {
        setVariabila3(!variabila3)
    }
    return(
        <div className="Container-Acordeon">
                <div className={variabila ? "Cutie-Acordeon active": "Cutie-Acordeon "} >
                    <div onClick={clickHandler} className="Titlu-Acordeon">
                        <h3>Titluaaaaaaaaaaaaaaaaa!!!!</h3>
                        <i  className={variabila ? "fa-solid fa-minus" : "fa-solid fa-plus"} ></i>
                    </div>
                    <div className="Continut-Acordeon">
                        <p>blaaaaaa bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                    </div>
                </div>
                <div className={variabila2 ? "Cutie-Acordeon active": "Cutie-Acordeon "} >
                    <div onClick={clickHandler2} className="Titlu-Acordeon">
                        <h3>Titlu!!!!</h3>
                        <i  className={variabila2 ? "fa-solid fa-minus" : "fa-solid fa-plus"} ></i>
                    </div>
                    <div className="Continut-Acordeon">
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                    </div>
                </div>
                <div className={variabila3 ? "Cutie-Acordeon active": "Cutie-Acordeon "} >
                    <div onClick={clickHandler3} className="Titlu-Acordeon">
                        <h3>Titlu!!!!</h3>
                        <i  className={variabila3 ? "fa-solid fa-minus" : "fa-solid fa-plus"} ></i>
                    </div>
                    <div className="Continut-Acordeon">
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                    </div>
                </div>
        </div>
    )
}