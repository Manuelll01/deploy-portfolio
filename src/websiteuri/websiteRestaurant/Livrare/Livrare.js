import React from "react";
import { BackgroundImgCuImgInterior } from "../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { DropDownNavBar } from "../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../components/Footer3/Footer3";
import "./Livrare.css"


export const Livrare = () => {

    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()
    
    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Livrare-Restaurant">
                <DropDownNavBar path1='/deploy-portfolio/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior src='./img/livrare3.jpg'></BackgroundImgCuImgInterior>
                <div className="Container-Content-Livrare-Restaurant">
                    <div className="container-input">
                        <input type='text'  placeholder="Introdu o stradă și un număr"></input>
                        <button >
                            <h2><i class="fa-regular fa-greater-than"></i></h2>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
        </div>
        
    )
}