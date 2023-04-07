import React, {useState} from "react";
import "./Burgers.css";


import { BackgroundImgCuImgInterior } from "../../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { DropDownNavBar } from "../../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../../components/Footer3/Footer3";
import { Link } from "react-router-dom";
import { ContainerSageti } from "../../../../components/Container-sageti/ContainerSageti";
import { ContainerAlimentRestaurant } from "../../../../components/ContainerAlimentRestaurant/ContainerAlimentRestaurant";
import { Popup } from "../../../../components/Popup/Popup";
import { Popup2 } from "../../../../components/Popup2/Popup2";
import { ItemRestaurantPopup } from "../../../../components/Popup2/ItemRestaurantPopup/ItemRestaurantPopup";

export const Burgers = () => {
    const [buttonPopup1, setButtonPopup1] = useState(false)
    const [buttonPopup2, setButtonPopup2] = useState(false)
    const [buttonPopup3, setButtonPopup3] = useState(false)
    const [buttonPopup4, setButtonPopup4] = useState(false)
    const [buttonPopup5, setButtonPopup5] = useState(false)
    const [buttonPopup6, setButtonPopup6] = useState(false)
    const [buttonPopup7, setButtonPopup7] = useState(false)
    
    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Burgers-Restaurant">
                <DropDownNavBar path1='/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior  src="./img/hamburger2.jpg"></BackgroundImgCuImgInterior>
                <div className="container-container-sageti">
                    <ContainerSageti children='Burgers'
                                     link1='/meniu.restaurant.deserturi'
                                     link2='/meniu.restaurant.pui'></ContainerSageti>
                </div>
                

                <div className="container-grid-iteme-Restaurant">{/*il gasesti in Bauturi.css */}
                    
                    <div className="container-item" onClick={ () => setButtonPopup1(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/bur1.jpg'titlu='Burger Crispy Toast Mare' pret='15.50 lei' link='/'
                                    cantitate='600gr' descriere='Chiflă, cașcaval topit, carne de vită, ceapă, castraveți murați, maioneză'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item"  onClick={ () => setButtonPopup2(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/burger5.jpg'titlu='Burger Crispy Toast Mic' pret='11.50 lei' link='/'
                                    cantitate='350gr' descriere='Chiflă, cașcaval topit, carne de vită, ceapă, castraveți murați, maioneză'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item"  onClick={ () => setButtonPopup3(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/bur2.jpg'titlu='Burger Mini Patty' pret='11.50 lei' link='/'
                                    cantitate='350gr' descriere='chiflă, șnițel de pui, ceapă, salata de varză, ketchup și maioneză'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item"  onClick={ () => setButtonPopup4(true)}>
                    <ContainerAlimentRestaurant
                                    src='./img/burger1.jpg'titlu='Burger cu Bacon Mare' pret='16.50 lei' link='/'
                                    cantitate='550gr' descriere='Chiflă, cașcaval topit, bacon, ceapă, ketchup și maioneză'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item"  onClick={ () => setButtonPopup5(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/burger2.jpg'titlu='Burger cu Pui Grill' pret='14 lei' link='/'
                                    cantitate='500gr' descriere='Chiflă, cașcaval topit, piept de pui la grătar, salată de varză, roșii, ketchup și maioneză'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item"  onClick={ () => setButtonPopup6(true)}>
                    <ContainerAlimentRestaurant 
                                    src='./img/burger3.jpg'titlu='Burger cu Bacon Mic' pret='12.50 lei' link='/'
                                    cantitate='400gr' descriere='Chiflă, cașcaval topit, cartofi prăjiți(congelati), salată de varză, ketchup și maioneză'></ContainerAlimentRestaurant>
                    </div>
                    <div className="container-item"  onClick={ () => setButtonPopup7(true)}>
                    <ContainerAlimentRestaurant
                                    src='./img/burger6.jpg'titlu='Burger cu pește' pret='13.50 lei' link='/'
                                    cantitate='425gr' descriere='chifla, peste(congelat) salau pane, cartofi prajiti(congelati), salata de varza, roșii, castraveți, sos de usturoi'></ContainerAlimentRestaurant>
                    
                    </div>
                </div>
            <Popup2 trigger={buttonPopup1} inchidere={setButtonPopup1}><ItemRestaurantPopup imagine='./img/bur1.jpg'
             titlu='Burger Crispy Toast Mare' cantitate='600gr' descriere='Ingrediente: Chiflă, cașcaval pane, carne de vită, ceapă, castraveți murați, maioneză'
             pret='15.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>

            <Popup2 trigger={buttonPopup2} inchidere={setButtonPopup2}><ItemRestaurantPopup imagine='./img/burger5.jpg'
             titlu='Burger Crispy Toast Mic' cantitate='350gr' descriere='Ingrediente: Chiflă, cașcaval pane, carne de vită, ceapă, castraveți murați, maioneză'
             pret='11.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>

            <Popup2 trigger={buttonPopup3} inchidere={setButtonPopup3}><ItemRestaurantPopup imagine='./img/bur2.jpg'
             titlu='Burger Mini Patty' cantitate='350gr' descriere='Ingrediente: chiflă, șnițel de pui, ceapă, salata de varză, ketchup și maioneză'
             pret='11.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>

            <Popup2 trigger={buttonPopup4} inchidere={setButtonPopup4}><ItemRestaurantPopup imagine='./img/burger1.jpg'
             titlu='Burger cu Bacon Mare' cantitate='550gr' descriere='Ingrediente: Chiflă, cașcaval topit, bacon, ceapă, ketchup și maioneză'
             pret='16.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>

            <Popup2 trigger={buttonPopup5} inchidere={setButtonPopup5}><ItemRestaurantPopup imagine='./img/burger2.jpg'
             titlu='Burger cu Pui Grill' cantitate='500gr' descriere='Ingrediente: Chiflă, cașcaval topit, piept de pui la grătar, salată de varză, roșii, ketchup și maioneză'
             pret='14' unitate='1 buc'></ItemRestaurantPopup></Popup2>

            <Popup2 trigger={buttonPopup6} inchidere={setButtonPopup6}><ItemRestaurantPopup imagine='./img/burger3.jpg'
             titlu='Burger cu Bacon Mic' cantitate='400gr' descriere='Ingrediente: Chiflă, cașcaval topit, bacon, ceapă, ketchup și maioneză'
             pret='12.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>

            <Popup2 trigger={buttonPopup7} inchidere={setButtonPopup7}><ItemRestaurantPopup imagine='./img/burger6.jpg'
             titlu='Burger cu Pește' cantitate='425gr' descriere='chifla, peste(congelat) salau pane, cartofi prajiti(congelati), salata de varza, roșii, castraveți, sos de usturoi'
             pret='13.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            

            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
        </div>
    )
}