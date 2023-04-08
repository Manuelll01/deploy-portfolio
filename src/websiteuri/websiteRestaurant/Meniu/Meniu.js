import React from "react";
import { Link } from "react-router-dom";
import { BackgroundImgCuImgInterior } from "../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { DropDownNavBar } from "../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../components/Footer3/Footer3";
import "./Meniu.css"


export const Meniu = () => {

    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()

    return(
        <div className="container-continut-Restaurant">
            <div className="Container-Meniu-Restaurant">
                <DropDownNavBar path1='/deploy-portfolio/Versiune3' titlu1='Home'></DropDownNavBar>
                <BackgroundImgCuImgInterior src="./img/meniu.jpg"></BackgroundImgCuImgInterior>
                <div className="Container-Content-Meniu-Restaurant">
                    <Link to='/meniu.restaurant.burgers' className="Container-Categorie-Meniu-Restaurant">
                        <div className="container-img-Categorie-Meniu-Restaurant">
                            <img src="./img/hamburger2.jpg"></img>
                        </div>
                        
                        <div className="Titlu-Categorie-Meniu-Restaurant">
                            <h2>burgers</h2>
                        </div>
                    </Link>
                    <Link to='/meniu.restaurant.pui' className="Container-Categorie-Meniu-Restaurant">
                        <div className="container-img-Categorie-Meniu-Restaurant">
                            <img  src="./img/poza_pui.jpg"></img>
                        </div>
                        <div className="Titlu-Categorie-Meniu-Restaurant">
                            <h2>pui</h2>
                        </div>
                    </Link>
                    <Link to='/meniu.restaurant.sosuri' className="Container-Categorie-Meniu-Restaurant">
                        <div className="container-img-Categorie-Meniu-Restaurant">
                            <img src="./img/sos1.jpg"></img>
                        </div>
                        <div className="Titlu-Categorie-Meniu-Restaurant">
                            <h2>sosuri</h2>
                        </div>
                    </Link>
                    <Link to='/meniu.restaurant.bauturi' className="Container-Categorie-Meniu-Restaurant">
                        <div className="container-img-Categorie-Meniu-Restaurant">
                            <img src="./img/bur8.jpg"></img>
                        </div>
                        <div className="Titlu-Categorie-Meniu-Restaurant">
                            <h2>bauturi</h2>
                        </div>
                    </Link>
                    <Link to='/meniu.restaurant.deserturi' className="Container-Categorie-Meniu-Restaurant">
                        <div className="container-img-Categorie-Meniu-Restaurant">
                            <img src="./img/bur9.jpg"></img>
                        </div>
                        
                        <div className="Titlu-Categorie-Meniu-Restaurant">
                            <h2>deserturi</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
        </div>
        
    )
}