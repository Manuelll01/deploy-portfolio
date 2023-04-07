import React, {useState} from "react";
import "./Deserturi.css";


import { BackgroundImgCuImgInterior } from "../../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { DropDownNavBar } from "../../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../../components/Footer3/Footer3";
import { Link } from "react-router-dom";
import { ContainerSageti } from "../../../../components/Container-sageti/ContainerSageti";
import { ContainerAlimentRestaurant } from "../../../../components/ContainerAlimentRestaurant/ContainerAlimentRestaurant";
import { Popup } from "../../../../components/Popup/Popup";
import { Popup2 } from "../../../../components/Popup2/Popup2";
import { ItemRestaurantPopup } from "../../../../components/Popup2/ItemRestaurantPopup/ItemRestaurantPopup";

export const Deserturi = () => {
    const [buttonPopup1, setButtonPopup1] = useState(false)
    const [buttonPopup2, setButtonPopup2] = useState(false)
    const [buttonPopup3, setButtonPopup3] = useState(false)
    const [buttonPopup4, setButtonPopup4] = useState(false)
    const [buttonPopup5, setButtonPopup5] = useState(false)
    const [buttonPopup6, setButtonPopup6] = useState(false)
    
    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Deserturi-Restaurant">
                <DropDownNavBar path1='/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior  src="./img/bur9.jpg"></BackgroundImgCuImgInterior>
                <div className="container-container-sageti">
                    <ContainerSageti children='Deserturi'
                                     link1='/meniu.restaurant.bauturi'
                                     link2='/meniu.restaurant.burgers'></ContainerSageti>
                </div>
                <div className="container-grid-iteme-Restaurant">
                    <div className="container-item" onClick={ () => setButtonPopup1(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/desert1.jpg'titlu='Cheesecake' pret='12.50 lei' link='/'
                                    cantitate='250gr' descriere='brânză dulce, făină de grâu, zahăr, ou, smântână, topping de fructe de padure sau ciocolată.'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup2(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/desert2.jpg'titlu='Înghețată la cornet' pret='7 lei' link='/'
                                    cantitate='150gr' descriere='frișcă naturală, lapte integral, gălbenușuri de ou, zahăr, pastaie de vanilie'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup3(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/desert3.jpg'titlu='Înghețată la farfurie' pret='12 lei' link='/'
                                    cantitate='350gr' descriere='frișcă naturală, lapte integral, gălbenușuri de ou, zahăr, pastaie de vanilie'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup4(true)}>
                    <ContainerAlimentRestaurant
                                    src='./img/desert4.jpg'titlu='Tiramisu' pret='18 lei' link='/'
                                    cantitate='200gr' descriere='piscoturi, cafea, mascarpone, ness'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup5(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/desert5.jpg'titlu='Iaurt Înghețat' pret='9.50 lei' link='/'
                                    cantitate='250gr' descriere='iaurt natural, zahăr, lapte, fulgi de ciocolată, smântână'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item" onClick={ () => setButtonPopup6(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/desert6.jpg'titlu='Tort Ciocolată' pret='15 lei' link='/'
                                    cantitate='200gr' descriere='ouă, lapte, smântână, ulei vegetal, cacao, zahar, făină, ciocolată neagră, extract vanilie, praf de copt'></ContainerAlimentRestaurant>
                    </div>
                </div>
            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
            <Popup2 trigger={buttonPopup1} inchidere={setButtonPopup1}><ItemRestaurantPopup imagine='./img/desert1.jpg'
             titlu='Cheesecake' cantitate='250gr' descriere='Ingrediente: brânză dulce, făină de grâu, zahăr, ou, smântână, topping de fructe de padure sau ciocolată.'
             pret='12.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup2} inchidere={setButtonPopup2}><ItemRestaurantPopup imagine='./img/desert2.jpg'
             titlu='Înghețată la cornet' cantitate='150gr' descriere='Ingrediente: frișcă naturală, lapte integral, gălbenușuri de ou, zahăr, pastaie de vanilie'
             pret='7' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup3} inchidere={setButtonPopup3}><ItemRestaurantPopup imagine='./img/desert3.jpg'
             titlu='Înghețată la farfurie' cantitate='350gr' descriere='Ingrediente: frișcă naturală, lapte integral, gălbenușuri de ou, zahăr, pastaie de vanilie'
             pret='12' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup4} inchidere={setButtonPopup4}><ItemRestaurantPopup imagine='./img/desert4.jpg'
             titlu='Tiramisu' cantitate='200gr' descriere='Ingrediente: piscoturi, cafea, mascarpone, ness'
             pret='18' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup5} inchidere={setButtonPopup5}><ItemRestaurantPopup imagine='./img/desert5.jpg'
             titlu='Iaurt Înghețat' cantitate='250gr' descriere='Ingrediente: iaurt natural, zahăr, lapte, fulgi de ciocolată, smântână'
             pret='9.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup6} inchidere={setButtonPopup6}><ItemRestaurantPopup imagine='./img/desert6.jpg'
             titlu='Tort Ciocolată' cantitate='200gr' descriere='Ingrediente: ouă, lapte, smântână, ulei vegetal, cacao, zahar, făină, ciocolată neagră, extract vanilie, praf de copt'
             pret='15' unitate='1 felie'></ItemRestaurantPopup></Popup2>
        </div>
    )
}