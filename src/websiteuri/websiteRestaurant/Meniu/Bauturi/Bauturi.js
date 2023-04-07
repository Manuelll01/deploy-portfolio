import React, {useState} from "react";
import { Link } from "react-router-dom";
import { BackgroundImgCuImgInterior } from "../../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { ContainerSageti } from "../../../../components/Container-sageti/ContainerSageti";
import { ContainerAlimentRestaurant } from "../../../../components/ContainerAlimentRestaurant/ContainerAlimentRestaurant";
import { DropDownNavBar } from "../../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../../components/Footer3/Footer3";
import { Popup } from "../../../../components/Popup/Popup";
import { ItemRestaurantPopup } from "../../../../components/Popup2/ItemRestaurantPopup/ItemRestaurantPopup";
import { Popup2 } from "../../../../components/Popup2/Popup2";
import "./Bauturi.css"

export const Bauturi = () => {
    const [buttonPopup1, setButtonPopup1] = useState(false)
    const [buttonPopup2, setButtonPopup2] = useState(false)
    const [buttonPopup3, setButtonPopup3] = useState(false)
    const [buttonPopup4, setButtonPopup4] = useState(false)
    const [buttonPopup5, setButtonPopup5] = useState(false)
    
    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Bauturi-Restaurant">
                <DropDownNavBar path1='/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior  src="./img/bur8.jpg"></BackgroundImgCuImgInterior>
                <div className="container-container-sageti">
                    <ContainerSageti children='Bauturi'
                                     link1='/meniu.restaurant.sosuri'
                                     link2='/meniu.restaurant.deserturi'></ContainerSageti>
                </div>
                <div className="container-grid-iteme-Restaurant">{/*il gasesti in Bauturi.css */}
                    
                        <div className="container-item" onClick={ () => setButtonPopup1(true)}>
                                <div><ContainerAlimentRestaurant
                                        src='./img/bautura8.jpg'titlu='Coca Cola' pret='5 lei' link='/'
                                         cantitate='330ml'></ContainerAlimentRestaurant></div>
                            </div>
                            <div className="container-item" onClick={ () => setButtonPopup2(true)}>
                                <div><ContainerAlimentRestaurant 
                                        src='./img/bautura7.jpg'titlu='Red Bull' pret='6.50 lei' link='/'
                                        cantitate='330ml'></ContainerAlimentRestaurant></div>
                            </div>
                            <div className="container-item" onClick={ () => setButtonPopup3(true)}>
                                <div><ContainerAlimentRestaurant
                                        src='./img/sticla-apa.jpg'titlu='Sticla Aqua Carpatica' pret='8 lei' link='/'
                                        cantitate='1.5l'></ContainerAlimentRestaurant></div>
                            </div>
                            <div className="container-item" onClick={ () => setButtonPopup4(true)}>
                                <div><ContainerAlimentRestaurant
                                        src='./img/bautura4.jpg'titlu='Fanta' pret='5 lei' link='/'
                                        cantitate='330ml'></ContainerAlimentRestaurant></div>
                            </div>
                            <div className="container-item" onClick={ () => setButtonPopup5(true)}>
                                <div><ContainerAlimentRestaurant
                                    src='./img/sticla-bere.jpg'titlu='Sticla Bere' pret='7 lei' link='/'
                                    cantitate='500ml'></ContainerAlimentRestaurant></div>
                        
                            </div>
                            
                </div>
                
            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
            <Popup2 trigger={buttonPopup1} inchidere={setButtonPopup1}><ItemRestaurantPopup imagine='./img/bautura8.jpg'
             titlu='Coca Cola' cantitate='330ml' pret='5' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup2} inchidere={setButtonPopup2}><ItemRestaurantPopup imagine='./img/bautura7.jpg'
             titlu='Red Bull' cantitate='600gr'pret='6.50' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup3} inchidere={setButtonPopup3}><ItemRestaurantPopup imagine='./img/sticla-apa.jpg'
             titlu='Sticla Aqua Carpatica' cantitate='1.5l' pret='8' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup4} inchidere={setButtonPopup4}><ItemRestaurantPopup imagine='./img/bautura4.jpg'
             titlu='Fanta' cantitate='330ml' pret='5' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            <Popup2 trigger={buttonPopup5} inchidere={setButtonPopup5}><ItemRestaurantPopup imagine='./img/sticla-bere.jpg'
             titlu='Sticla Bere' cantitate='500ml' pret='7' unitate='1 buc'></ItemRestaurantPopup></Popup2>
            
        </div>
    )
}