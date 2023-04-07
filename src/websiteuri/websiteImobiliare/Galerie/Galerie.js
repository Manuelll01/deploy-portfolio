import React, {useState, useRef, useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { Link } from "react-router-dom";
import { BaraCountUpAnimation2 } from "../../../components/BaraCountUpAnimation2/BaraCountUpAnimation2";
import { DespreNoiDescriere } from "../../../components/DespreNoiDescriere/DespreNoiDescriere";
import { Footer1 } from "../../../components/Footer/Footer1";
import { Footer2 } from "../../../components/Footer2/Footer2";
import { ImgGallery } from "../../../components/ImgGallery1/ImgGallery";
import { ImgGallery2 } from "../../../components/ImgGallery1/ImgGallery2";
import { ImgGallery3 } from "../../../components/ImgGallery1/ImgGallery3";
import { NavBar3 } from "../../../components/NavBar3/NavBar3";
import { ScrollUpButton } from "../../../components/ScrollUpButton/ScrollUpButton";
import "./Galerie.css";


export const Galerie = () =>{

    /*const {ref, inView, entry} = useInView(options); ----> model de tinut minte <-------- */
    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()
    
    return(
        <div className="finisaje-container">
            <NavBar3  className="NavBar3"
                    titlu={'Acasă'}
                    path1="/Versiune2"></NavBar3>
            <div className="continut-finisaje">

                <div className="container-img-finisaje"></div>

                
                <div className="container-mare primul-item">

                        <h2>Exterior</h2>
                        <ImgGallery2></ImgGallery2>

                </div>
                <div className="container-mare">
                        <h2>Interior</h2>
                        <ImgGallery3></ImgGallery3>
                </div>
                <div className="  container-mare">
                        <h2>Poze din stadiul de constructie</h2>
                        <ImgGallery></ImgGallery>
                </div>
            </div>
            <div className="Footer1-galerie">
                <Footer2></Footer2>
            </div>
            
        </div>
    )
}