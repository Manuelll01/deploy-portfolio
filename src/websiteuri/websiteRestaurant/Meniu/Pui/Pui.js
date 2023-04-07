import React, {useState} from "react";
import "./Pui.css";


import { BackgroundImgCuImgInterior } from "../../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { DropDownNavBar } from "../../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../../components/Footer3/Footer3";
import { Link } from "react-router-dom";
import { ContainerSageti } from "../../../../components/Container-sageti/ContainerSageti";
import { ContainerAlimentRestaurant } from "../../../../components/ContainerAlimentRestaurant/ContainerAlimentRestaurant";
import { Popup2 } from "../../../../components/Popup2/Popup2";
import { ItemRestaurantPopup } from "../../../../components/Popup2/ItemRestaurantPopup/ItemRestaurantPopup";

export const Pui = () => {
    const [buttonPopup1, setButtonPopup1] = useState(false)
    const [buttonPopup2, setButtonPopup2] = useState(false)
    const [buttonPopup3, setButtonPopup3] = useState(false)
    const [buttonPopup4, setButtonPopup4] = useState(false)
    
    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Pui-Restaurant">
                <DropDownNavBar path1='/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior  src="./img/poza_pui.jpg"></BackgroundImgCuImgInterior>
                <div className="container-container-sageti">
                    <ContainerSageti children='Pui'
                                     link1='/meniu.restaurant.burgers'
                                     link2='/meniu.restaurant.sosuri'></ContainerSageti>
                </div>
                <div className="container-grid-iteme-Restaurant">
                    <div className="container-item" onClick={ () => setButtonPopup1(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/pui1.jpg'titlu='Aripioare Picante' pret='12 lei' link='/'
                                    cantitate='350gr' descriere='aripioare de pui, ulei, sare, piper, boia dulce, boia iute'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup2(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/pui2.jpg'titlu='Nuggets de Pui' pret='11 lei' link='/'
                                    cantitate='350gr' descriere='carne tocată de pui, ulei, făină, sare, piper, boia dulce, boia iute'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup3(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/pui3.jpg'titlu='Crunchy Bites' pret='11.50 lei' link='/'
                                    cantitate='350gr' descriere='piept de pui, ulei, unt, lapte, faina, sare, piper, boia dulce, boia iute'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup4(true)}>
                    <ContainerAlimentRestaurant
                                    src='./img/pui4.jpg'titlu='Pui Rotisat' pret='22.50 lei' link='/'
                                    cantitate='1buc' descriere='pui întreg, sare, piper'></ContainerAlimentRestaurant>
                    </div>
                </div>
            </div>
            <Popup2 trigger={buttonPopup1} inchidere={setButtonPopup1}><ItemRestaurantPopup imagine='./img/pui1.jpg'
             titlu='Aripioare Picante' cantitate='350gr' descriere='Ingrediente: aripioare de pui, ulei, sare, piper, boia dulce, boia iute'
             pret='12' unitate='1 portie'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup2} inchidere={setButtonPopup2}><ItemRestaurantPopup imagine='./img/pui2.jpg'
             titlu='Nuggets de Pui' cantitate='350gr' descriere='Ingrediente: carne tocată de pui, ulei, făină, sare, piper, boia dulce, boia iute'
             pret='11' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup3} inchidere={setButtonPopup3}><ItemRestaurantPopup imagine='./img/pui3.jpg'
             titlu='Crunchy Bites' cantitate='350gr' descriere='Ingrediente: piept de pui, ulei, unt, lapte, faina, sare, piper, boia dulce, boia iute'
             pret='11.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup4} inchidere={setButtonPopup4}><ItemRestaurantPopup imagine='./img/pui4.jpg'
             titlu='Pui Rotisat' descriere='Ingrediente: pui întreg, sare, piper'
             pret='22.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
        </div>
    )
}