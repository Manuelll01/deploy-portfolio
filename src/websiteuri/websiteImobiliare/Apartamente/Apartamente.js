import React, { useState } from "react";
import { CasetaDisplayApartamente } from "../../../components/CasetaDisplayApartamente/CasetaDisplayApartamente";
import { NavBar3 } from "../../../components/NavBar3/NavBar3";
import "./Apartamente.css";
import { Popup } from "../../../components/Popup/Popup";
import { CasetaDespreNoiInformatii } from "../../../components/CasetaDespreNoiInformatii/CasetaDespreNoiInformatii";
import { ProductCard } from "../../../components/ProductCard/productCard";
import { Apartament1CamerePopup } from "../../../components/Popup/Apartament1CamerePopup/Apartament1CamerePopup";
import { CasetaDisplayApartamenteCuPopup } from "../../../components/CasetaDisplayApartamenteCuPopup/CasetaDisplayApartamenteCuPopup";
import { FormMic1 } from "../../../components/FormMic1/FormMic1";
import { ProductSlider } from "../../../components/ProductSlider(swiper)/ProductSlider";
import { Footer2 } from "../../../components/Footer2/Footer2";


export const Apartamente = () =>{
    const [buttonPopup, setButtonPopup] = useState(false)


    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()
    return(
        <div className={buttonPopup ? "container-apartamente filtru" : "container-apartamente"}>
            
                <NavBar3
                className="navbar-apartamente"
                titlu={'Acasă'}
                path1={'/Versiune2'}></NavBar3>
                <div className="img1-container"></div>
                
                <div className="container-caseta-display">
                    <CasetaDisplayApartamenteCuPopup></CasetaDisplayApartamenteCuPopup>
                </div>
                <div className="productslider-apartamente">
                    <ProductSlider></ProductSlider>
                </div>
                
                
            
            <div className='footer-1'>
                <Footer2></Footer2>
            </div>
            
            
        </div>
    )
}