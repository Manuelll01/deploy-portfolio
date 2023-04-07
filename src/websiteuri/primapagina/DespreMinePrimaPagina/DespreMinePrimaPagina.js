import React from "react";
import "./DespreMinePrimaPagina.css"


export const DespreMine = () => {
    return(
        <div className="Container-DespreMinePrimaPagina">
            <h1 className="Titlu-pagina-DespreMinePrimaPagina">Despre Mine</h1>
            <div className="Container-Poza-Si-Scris">
                <div className="Container-img-poza-1">
                    <img src="./img/poza1.jpg"></img>
                </div>
                <div className="Conttainer-Content-Despre-Mine">
                    <div className="Titlu-Content-Despre-Mine">
                        <h1>Entry Level Front End Developer</h1>
                    </div>
                    <div className="Container-Cutii">
                        <div className="cutie-informatie">
                            <h4>Nume: </h4>
                            <p>Negoiță Mircea-Manuel</p>
                        </div>
                        <div className="cutie-informatie">
                            <h4>Vârstă: </h4>
                            <p>21 Ani</p>
                        </div>
                        <div className="cutie-informatie">
                            <h4>Telefon: </h4>
                            <p>+40 774 649 357</p>
                        </div>
                        <div className="cutie-informatie">
                            <h4>Gmail: </h4>
                            <p>GmailNou@gmail.com</p>
                        </div>
                        <div className="cutie-informatie">
                            <h4>Limbi Străine: </h4>
                            <p>Engleză</p>
                        </div>
                        <div className="cutie-informatie">
                            <h4>Studii: </h4>
                            <p>Finanțe și Bănci (schimb asta mai incolo)</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}