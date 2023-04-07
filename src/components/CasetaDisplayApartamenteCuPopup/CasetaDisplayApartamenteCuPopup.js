import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CasetaDisplayApartamenteCuPopup.css"
import { data } from "./content";
import { FaFontAwesome } from "react-icons/fa";
import { Popup } from "../Popup/Popup";
import { Apartament1CamerePopup } from "../Popup/Apartament1CamerePopup/Apartament1CamerePopup";
import { Apartament2CamerePopup } from "../Popup/Apartament2CamerePopup/Apartament2CamerePopup";
import { Apartament3CamerePopup } from "../Popup/Apartament3CamerePopup/Apartament3CamerePopup";
import { Apartament4CamerePopup } from "../Popup/Apartament4CamerePopup/Apartament4CamerePopup";

export const CasetaDisplayApartamenteCuPopup = () =>{
    const [toate, setToate] = useState(true)
    const [garsoniera, setGarsoniera] = useState(false)
    const [douaCamere, setDouaCamere] = useState(false)
    const [treiCamere, setTreiCamere] = useState(false)
    const [patruCamere, setPatruCamere] = useState(false)


    const [buttonPopup1, setButtonPopup1] = useState(false)
    const [buttonPopup2, setButtonPopup2] = useState(false)
    const [buttonPopup3, setButtonPopup3] = useState(false)
    const [buttonPopup4, setButtonPopup4] = useState(false)

    const numar1 = () =>{
        setToate(true)
        setGarsoniera(false)
        setDouaCamere(false)
        setTreiCamere(false)
        setPatruCamere(false)
        
    }
    const numar2 = () =>{
        setToate(false)
        setGarsoniera(true)
        setDouaCamere(false)
        setTreiCamere(false)
        setPatruCamere(false)
    }
    const numar3 = () =>{
        setToate(false)
        setGarsoniera(false)
        setDouaCamere(true)
        setTreiCamere(false)
        setPatruCamere(false)
    }
    const numar4 = () =>{
        setToate(false)
        setGarsoniera(false)
        setDouaCamere(false)
        setTreiCamere(true)
        setPatruCamere(false)
    }
    const numar5 = () =>{
        setToate(false)
        setGarsoniera(false)
        setDouaCamere(false)
        setTreiCamere(false)
        setPatruCamere(true)
    }
    return(
        <div className="caseta-container">

                            

            
            <div className="titluri-container">
                <div className="titlu-container">
                    <h3 className="titlu-lista">Apartamente disponibile</h3>
                </div>
                <ul className="titluri-ul">
                    <li className={toate ? "link-apartamente activ2": "link-apartamente"}><Link onClick={numar1} >Toate <i class={toate ? "fa-sharp fa-solid fa-arrow-right": "fa-sharp fa-solid fa-arrow-right oprit"}></i></Link></li>
                    <li  className={garsoniera ? "link-apartamente activ2": "link-apartamente"}><Link onClick={numar2}>Garsoniera <i class={garsoniera ? "fa-sharp fa-solid fa-arrow-right": "fa-sharp fa-solid fa-arrow-right oprit"}></i></Link></li>
                    <li  className={douaCamere ? "link-apartamente activ2": "link-apartamente"}><Link onClick={numar3}>Apartament doua camere <i class={douaCamere ? "fa-sharp fa-solid fa-arrow-right": "fa-sharp fa-solid fa-arrow-right oprit"}></i></Link></li>
                    <li  className={treiCamere ? "link-apartamente activ2": "link-apartamente"}><Link onClick={numar4}>Apartament trei camere <i class={treiCamere ? "fa-sharp fa-solid fa-arrow-right": "fa-sharp fa-solid fa-arrow-right oprit"}></i></Link></li>
                    <li  className={patruCamere ? "link-apartamente activ2": "link-apartamente"}><Link onClick={numar5}>Apartament patru camere <i class={patruCamere ? "fa-sharp fa-solid fa-arrow-right": "fa-sharp fa-solid fa-arrow-right oprit"}></i></Link></li>
                </ul>
            </div>
            <div className="display-container">
                <div className={toate ? "display-toate": "display-toate oprit"}>
                    
                        <div className="container-imagine">
                            <Link to='/Apartamente' className="link-imagine" onClick={() => setButtonPopup1(true)}>
                                <img className="img-mica" src="img/schita_apartament_1camere.jpg"></img>
                                <p>Garsoniera</p>
                            </Link> 
                        </div>
                        <div className="container-imagine">
                            <Link to='/Apartamente' className="link-imagine" onClick={() => setButtonPopup2(true)}>
                                <img className="img-mica" src="img/schita_apartament_2camere.jpg"></img>
                                <p>Apartament doua camere</p>
                            </Link>
                             
                        </div>
                    
                        <div className="container-imagine">
                            <Link to='/Apartamente' className="link-imagine" onClick={() => setButtonPopup3(true)}>
                                <img className="img-mica" src="img/schita_apartament_3camere.jpg"></img>
                                <p>Apartament trei camere</p>
                            </Link>
                             
                        </div>
                        <div className="container-imagine">
                            <Link to='/Apartamente' className="link-imagine" onClick={() => setButtonPopup4(true)}>
                                <img className="img-mica" src="img/schita_apartament_4camere.jpg"></img>
                                <p>Apartament patru camere</p>
                            </Link>
                             
                        </div>
                        
                </div>

                <div className={garsoniera ? "display-garsoniera": "display-garsoniera oprit"}>
                    <div className="img garsoniera">
                        <img className="img-mare" src="img/schita_apartament_1camere.jpg"></img>
                        <Link to='/Apartamente' className="buton2-poze-apartamente" onClick={() => setButtonPopup1(true)}>vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-garsoniera">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>42</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                            <p>Apartamentul tip garsonieră este ideal pentru cei tineri, care doresc un stil de viață modern sau pentru persoanele care vor să investească într-un oraș turistic.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 53.300 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/Apartamente' className="buton-poze-apartamente" onClick={() => setButtonPopup1(true)}>vizioneaza apartamentul</Link>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className={douaCamere ? "display-doua-camere": "display-douaCamere oprit"}>
                    <div className="img doua-camere">
                        <img className="img-mare" src="img/schita_apartament_2camere.jpg"></img>
                        <Link to='/Apartamente' className="buton2-poze-apartamente"onClick={() => setButtonPopup2(true)}>vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-doua-camere">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>53.70</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                                <p>Apartamentele moderne cu două camere sunt ideale pentru oricine. Spațiul oferit prin compartimentarea inteligentă oferă posibilitatea personalizării în stil propriu.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 73.700 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/Apartamente' className="buton-poze-apartamente" onClick={() => setButtonPopup2(true)}>vizioneaza apartamentul</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={treiCamere ? "display-trei-camere": "display-trei-camere oprit"}>
                    <div className="img trei-camere">
                        <img className="img-mare" src="img/schita_apartament_3camere.jpg"></img>
                        <Link to='/Apartamente' className="buton2-poze-apartamente" onClick={() => setButtonPopup3(true)}>vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-trei-camere">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>62</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                                <p>Apartamentele moderne cu trei camere sunt ideale pentru oricine. Spațiul oferit prin compartimentarea inteligentă oferă posibilitatea personalizării în stil propriu.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 83.700 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/Apartamente' className="buton-poze-apartamente" onClick={() => setButtonPopup3(true)}>vizioneaza apartamentul</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={patruCamere ? "display-patru-camere": "display-patru-camere oprit"}>
                    <div className="img patru-camere">
                        <img className="img-mare" src="img/schita_apartament_4camere.jpg"></img>
                        <Link to='/Apartamente' className="buton2-poze-apartamente" onClick={() => setButtonPopup4(true)}>vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-patru-camere">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>77</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                                <p>Apartamentele moderne cu patru camere sunt ideale pentru oricine. Spațiul oferit prin compartimentarea inteligentă oferă posibilitatea personalizării în stil propriu.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 92.800 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/Apartamente' className="buton-poze-apartamente" onClick={() => setButtonPopup4(true)}>vizioneaza apartamentul</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>{/*aveam intentia sa le pun intr-un div ca sa le dau style de position absolute sau ceva de genul ca sa nu mai ocupe spatiu
                    de randat pe ecran si sa nu se mai miste cele 4 poze cand dau click dar pur si simplu prin faptul ca sunt intr-un div a
                    rezolvat problema si nu stiu de ce */}
                            <Popup trigger={buttonPopup1} inchidere={setButtonPopup1}>
                                <Apartament1CamerePopup></Apartament1CamerePopup>{/*asta poate fi adaugata pt ca am pus in componenta un {props.children}*/}
                            </Popup> 
                            <Popup trigger={buttonPopup2} inchidere={setButtonPopup2}>
                                <Apartament2CamerePopup></Apartament2CamerePopup>
                            </Popup> 
                            <Popup trigger={buttonPopup3} inchidere={setButtonPopup3}>
                                <Apartament3CamerePopup></Apartament3CamerePopup>
                            </Popup> 
                            <Popup trigger={buttonPopup4} inchidere={setButtonPopup4}>{/*nu stiu de ce dar cand le pun la sfarsit se aseaza si backgound-color ul de la divul pe post de filtru cum trebuie*/}
                                <Apartament4CamerePopup></Apartament4CamerePopup>
                            </Popup>
            </div>
                             

        </div>
    )
}