import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CasetaDisplayApartamente.css"
import { data } from "./content";
import { FaFontAwesome } from "react-icons/fa";


export const CasetaDisplayApartamente = () =>{
    const [toate, setToate] = useState(true)
    const [garsoniera, setGarsoniera] = useState(false)
    const [douaCamere, setDouaCamere] = useState(false)
    const [treiCamere, setTreiCamere] = useState(false)
    const [patruCamere, setPatruCamere] = useState(false)

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
                            <Link to='/' className="link-imagine">
                                <img className="img-mica" src="img/schita_apartament_1camere.jpg"></img>
                                <p>Garsoniera</p>
                            </Link>  
                        </div>
                        <div className="container-imagine">
                            <Link to='/' className="link-imagine">
                                <img className="img-mica" src="img/schita_apartament_2camere.jpg"></img>
                                <p>Apartament doua camere</p>
                            </Link>
                        </div>
                    
                        <div className="container-imagine">
                            <Link to='/' className="link-imagine">
                                <img className="img-mica" src="img/schita_apartament_3camere.jpg"></img>
                                <p>Apartament trei camere</p>
                            </Link>
                        </div>
                        <div className="container-imagine">
                            <Link to='/' className="link-imagine">
                                <img className="img-mica" src="img/schita_apartament_4camere.jpg"></img>
                                <p>Apartament patru camere</p>
                            </Link>
                        </div>
                        
                </div>

                <div className={garsoniera ? "display-garsoniera": "display-garsoniera oprit"}>
                    <div className="img garsoniera">
                        <img className="img-mare" src="img/schita_apartament_1camere.jpg"></img>
                        <Link to='/' className="buton2-poze-apartamente">vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-garsoniera">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>42</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                            <p>Apartamentul tip studio este ideal pentru cei tineri, care doresc un stil de viață modern sau pentru persoanele care vor să investească într-un oraș turistic.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 53.300 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/' className="buton-poze-apartamente">vizioneaza apartamentul</Link>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className={douaCamere ? "display-doua-camere": "display-douaCamere oprit"}>
                    <div className="img doua-camere">
                        <img className="img-mare" src="img/schita_apartament_2camere.jpg"></img>
                        <Link to='/' className="buton2-poze-apartamente">vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-doua-camere">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>58</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                                <p>Apartamentul tip studio este ideal pentru cei tineri, care doresc un stil de viață modern sau pentru persoanele care vor să investească într-un oraș turistic.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 73.700 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/' className="buton-poze-apartamente">vizioneaza apartamentul</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={treiCamere ? "display-trei-camere": "display-trei-camere oprit"}>
                    <div className="img trei-camere">
                        <img className="img-mare" src="img/schita_apartament_3camere.jpg"></img>
                        <Link to='/' className="buton2-poze-apartamente">vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-trei-camere">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>74</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                                <p>Apartamentul tip studio este ideal pentru cei tineri, care doresc un stil de viață modern sau pentru persoanele care vor să investească într-un oraș turistic.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 92.800 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/' className="buton-poze-apartamente">vizioneaza apartamentul</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={patruCamere ? "display-patru-camere": "display-patru-camere oprit"}>
                    <div className="img patru-camere">
                        <img className="img-mare" src="img/schita_apartament_4camere.jpg"></img>
                        <Link to='/' className="buton2-poze-apartamente">vizioneaza apartamentul</Link>
                    </div>
                    <div className="informatii-patru-camere">
                    <div className="titlu-informatii-generale">
                            <div className="x-mp">
                                <h3>74</h3>
                                <div className="mp"><p className="mp1">m</p><p className="mp2">2</p></div>
                                <p className="suprafata-utila">Suprafata utila</p>
                            </div>
                            <div>
                                <p>Apartamentul tip studio este ideal pentru cei tineri, care doresc un stil de viață modern sau pentru persoanele care vor să investească într-un oraș turistic.</p>
                            </div>
                            <div className="pret">
                                <p>Preț de la: 92.800 €</p>
                            </div>
                            <div className="container-buton-poze-apartamente">
                                <Link to='/' className="buton-poze-apartamente">vizioneaza apartamentul</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}