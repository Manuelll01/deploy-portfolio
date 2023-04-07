import React from "react";
import { BackgroundImgCuImgInterior } from "../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { FormMic2 } from "../../../components/FormMic2/FormMic2";
import { DropDownNavBar } from "../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../components/Footer3/Footer3";
import "./Contact.css"
import { IconitaContact } from "../../../components/IconitaContact/IconitaContact";


export const ContactRestaurant = () => {

    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()

    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Contact-Restaurant">
                <DropDownNavBar path1='/Versiune3' titlu1='Home'></DropDownNavBar>
                <div className="background-img-restaurant-contact">
                    <div className="background-img-restaurant-contact-part1">
                        <div className="container-iconita-restaurant">
                            <IconitaContact titlu='Adresă' continut='Str. Imaginara, Nr54, Brasov'
                            clasa_iconita='fa-sharp fa-solid fa-location-dot'></IconitaContact>
                        </div>
                        <div className="container-iconita-restaurant">
                            <IconitaContact titlu='Telefon' continut='0774.649.357'
                            clasa_iconita='fa-solid fa-phone'></IconitaContact> 
                        </div>
                        <div className="container-iconita-restaurant">
                            <IconitaContact titlu='E-mail' continut='Negoitamanuel@yahoo.com'
                            clasa_iconita='fa-solid fa-envelope'></IconitaContact>
                        </div>
                    </div>
                    <div className="background-img-restaurant-contact-part2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.9178483654928!2d25.60904005825843!3d45.649873769751224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35d8938c03771%3A0x21dbf8fcb700207a!2sAFI%20Bra%C8%99ov!5e1!3m2!1sro!2sro!4v1676473792479!5m2!1sro!2sro
                                    &amp;output=embed"></iframe> 
                                    
                    </div>
                </div>
                <div className="Container-Content-Contact-Restaurant">
                <div className="Form-Contact-Restaurant">
                    <FormMic2></FormMic2>
                </div>
                </div>
            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
        </div>
        
    )
}