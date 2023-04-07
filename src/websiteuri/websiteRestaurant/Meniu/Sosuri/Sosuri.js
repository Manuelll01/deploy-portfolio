import React, {useState} from "react";
import "./Sosuri.css";


import { BackgroundImgCuImgInterior } from "../../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { DropDownNavBar } from "../../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../../components/Footer3/Footer3";
import { Link } from "react-router-dom";
import { ContainerSageti } from "../../../../components/Container-sageti/ContainerSageti";
import { ContainerAlimentRestaurant } from "../../../../components/ContainerAlimentRestaurant/ContainerAlimentRestaurant";
import { Popup } from "../../../../components/Popup/Popup";
import { Popup2 } from "../../../../components/Popup2/Popup2";
import { ItemRestaurantPopup } from "../../../../components/Popup2/ItemRestaurantPopup/ItemRestaurantPopup";

export const Sosuri = () => {
    const [buttonPopup1, setButtonPopup1] = useState(false)
    const [buttonPopup2, setButtonPopup2] = useState(false)
    const [buttonPopup3, setButtonPopup3] = useState(false)
    
    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Sosuri-Restaurant">
                <DropDownNavBar path1='/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior  src="./img/sos1.jpg"></BackgroundImgCuImgInterior>
                <div className="container-container-sageti">
                    <ContainerSageti children='Sosuri'
                                     link1='/meniu.restaurant.pui'
                                     link2='/meniu.restaurant.bauturi'></ContainerSageti>
                </div>
                <div className="container-grid-iteme-Restaurant">
                    <div className="container-item" onClick={ () => {setButtonPopup1(true)}}>
                    <ContainerAlimentRestaurant 
                                    src='./img/sos2.jpg'titlu='Sos de Roșii Dulce' pret='2 lei' link='/'
                                    cantitate='50gr' descriere='roșii, boia dulge, oregano, sare, zahăr'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => {setButtonPopup2(true)}}>
                    <ContainerAlimentRestaurant 
                                    src='./img/sos3.jpg'titlu='Sos de Roșii Picant' pret='2 lei' link='/'
                                    cantitate='50gr' descriere='roșii, ceapă, usturoi, boia dulge, sare, boia iute, chilli, oregano'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => {setButtonPopup3(true)}}>
                    <ContainerAlimentRestaurant 
                                    src='./img/sos4.jpg'titlu='Sos Tzatziki' pret='2 lei' link='/'
                                    cantitate='50gr' descriere='iaurt grecesc, usturoi, castravete, ulei de masline, sare, piper, mentă'></ContainerAlimentRestaurant>
                    </div>
                </div>
            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
            <Popup2 trigger={buttonPopup1} inchidere={setButtonPopup1}><ItemRestaurantPopup imagine='./img/sos2.jpg'
             titlu='Sos de Roșii Dulce' cantitate='50gr' descriere='Ingrediente: roșii, boia dulge, oregano, sare, zahăr'
             pret='2' unitate='1 portie'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup2} inchidere={setButtonPopup2}><ItemRestaurantPopup imagine='./img/sos3.jpg'
             titlu='Sos de Roșii Picant' cantitate='50gr' descriere='Ingrediente: roșii, ceapă, usturoi, boia dulge, sare, boia iute, chilli, oregano'
             pret='2' unitate='1 portie'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup3} inchidere={setButtonPopup3}><ItemRestaurantPopup imagine='./img/sos4.jpg'
             titlu='Sos Tzatziki' cantitate='50gr' descriere='Ingrediente: iaurt grecesc, usturoi, castravete, ulei de masline, sare, piper, mentă'
             pret='2' unitate='1 portie'></ItemRestaurantPopup></Popup2>
        </div>
    )
}