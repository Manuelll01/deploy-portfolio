import React from "react";
import { Link } from "react-router-dom";
import { BackgroundImgCuImgInterior } from "../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { CasetaInformatiiLarga1 } from "../../../components/CasetaInformatiiLarga1/CasetaInformatiiLarga1";
import { DropDownNavBar } from "../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../components/Footer3/Footer3";
import { FormMic2 } from "../../../components/FormMic2/FormMic2";
import { ImgGalleryProps } from "../../../components/ImgGallery1/ImgGalleryProps";
import "./Cariera.css"


export const Cariera = () => {

    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()

    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Cariera-Restaurant">
                <DropDownNavBar path1='/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior src='./img/cariera.jpg'></BackgroundImgCuImgInterior>
                <div className="Container-Content-Cariera-Restaurant">
                    <div className="Container-Scris-continut-Restaurant">
                        <h1>Alăturăte Los Pollos Hermanos !</h1>
                        <p>Echipa Los Pollos Hermanos încurajează munca în echipă, atitudinea pozitivă, dezvoltarea personală și profesională. Fă parte din echipa Los Pollos Hermanos !</p>
                        
                    </div>
                    <div className="aplica-aici-Cariera-Restaurant">
                            <a href='#form-restaurant-a'>Aplică acum</a>
                        </div>
                        <div className="containet-img-gallery-props-cariera-restaurant">
                            <ImgGalleryProps
                             poze = './img/interior-restaurant-1.jpg,./img/interior-restaurant-2.jpg,./img/interior-restaurant-3.jpg, ./img/interior-restaurant-4.jpg,./img/interior-restaurant-5.jpg,./img/interior-restaurant-6.jpg, ./img/interior-restaurant-7.jpg,./img/interior-restaurant-8.jpg,./img/interior-restaurant-9.jpg'
                             className='grid3'
                             ></ImgGalleryProps>
                        </div>
                        <div className="aplica-aici-Cariera-Restaurant">
                            <a href='#form-restaurant-a'>Aplică acum</a>
                        </div>
                        <div className="Container-CasetaInformatiiLarga1-Cariera-Restaurant">
                            <CasetaInformatiiLarga1></CasetaInformatiiLarga1>
                        </div>
                        <div className="aplica-aici-Cariera-Restaurant">
                            <a href='#form-restaurant-a'>Aplică acum</a>
                        </div>
                        <div className="Form-Contact-Restaurant" id='form-restaurant-a'>
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