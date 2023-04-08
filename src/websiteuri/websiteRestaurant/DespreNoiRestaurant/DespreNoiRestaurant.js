import React from "react";
import { BackgroundImgCuImgInterior } from "../../../components/BackgroundImgCuImgInterior/BackgroundImgCuImgInterior";
import { DropDownNavBar } from "../../../components/DropDownNavBar/DropDownNavBar";
import { Footer3 } from "../../../components/Footer3/Footer3";
import "./DespreNoiRestaurant.css"


export const DespreNoiRestaurant = () => {

    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()

    return(
        <div className="container-continut-Restaurant">
            <div className="Container-DespreNoi-Restaurant">
                <DropDownNavBar path1='/deploy-portfolio/Versiune3' titlu1='Home'></DropDownNavBar>
                
                
                <div className="Container-Content-DespreNoi-Restaurant">
                    <div className="poza-Los-Pollos-Hermanos">
                        <div className="caseta-poza-Los-Pollos-Hermanos">
                            <div className="element1-poza-Los-Pollos-Hermanos">
                                <h2>Los Pollos Hermanos</h2>
                                <p>O Nouă Experiență Culinară!</p>
                            </div>
                            <div className="element2-poza-Los-Pollos-Hermanos">
                                <p>Specialitățile Spartan sunt inspirate din bucătăria grecească însă modul de preparare este unul propriu, iar gama largă de ingrediente duce la o combinație unică de gusturi</p>
                                <p>Spre exemplu, Souvlaki-ul Spartan nu amintește deloc de tradiționalele frigărui. În schimb, această delicatesă se servește pe farfurie cu carne rotisată, cartofi prăjiți, ceapă roșie, salată, și castraveciori murați. Sosurile reci, ca cel de măsline, usturoi, dulce-acrișor, tomate, și topping-ul tzatziki, reprezintă alegerea ideală pentru acest preparat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="element-1-DespreNoi-Restaurant">
                        
                        <div className="element-1-DespreNoi-Restaurant-part1">

                        </div>
                        <div className="element-1-DespreNoi-Restaurant-part2">
                            <p>Spre deosebire de lipia clasică, maeștrii bucătari Spartan folosesc lipia-pită și turta-pită, două sortimente ușor crocante ce sunt folosite la gyrosul clasic, cheese gyro și Leonidas pita.</p>
                            <p>Carnea Spartan reprezintă unul din elementele cheie, deoarece nu se limitează doar la pui.</p>
                            <p>Mai precis, specialitățile Spartan pot conține, după preferință, și carne de vițel, berbecuț, și purcel.</p>
                        </div>
                        <div className="element-1-DespreNoi-Restaurant-part3">
                            <p>Spre deosebire de lipia clasică, maeștrii bucătari Spartan folosesc lipia-pită și turta-pită, două sortimente ușor crocante ce sunt folosite la gyrosul clasic, cheese gyro și Leonidas pita.</p>
                            <p>Carnea Spartan reprezintă unul din elementele cheie, deoarece nu se limitează doar la pui.</p>
                            <p>Mai precis, specialitățile Spartan pot conține, după preferință, și carne de vițel, berbecuț, și purcel.</p>
                        </div>
                        <div className="element-1-DespreNoi-Restaurant-part4">

                        </div>
                        <div className="element-1-DespreNoi-Restaurant-part5">

                        </div>
                        <div className="element-1-DespreNoi-Restaurant-part6">
                            <p>Spre deosebire de lipia clasică, maeștrii bucătari Spartan folosesc lipia-pită și turta-pită, două sortimente ușor crocante ce sunt folosite la gyrosul clasic, cheese gyro și Leonidas pita.</p>
                            <p>Carnea Spartan reprezintă unul din elementele cheie, deoarece nu se limitează doar la pui.</p>
                            <p>Mai precis, specialitățile Spartan pot conține, după preferință, și carne de vițel, berbecuț, și purcel.</p>
                        </div>
                    </div>
                    <div className="poza-Los-Pollos-Hermanos-2">
                        <div className="caseta-poza-Los-Pollos-Hermanos-2">
                            <div className="titlu-caseta-poza-Los-Pollos-Hermanos-2"><h2>FAST FOOD CA PARTE DIN DIETĂ</h2></div>
                            <div className="content-caseta-poza-Los-Pollos-Hermanos-2">
                                <p>Mulți dintre noi asociem o masă la un restaurant fast-food cu un mare plus de calorii și carbohidrați. Însă nu este cazul întotdeauna, mai ales când vine vorba de specialitățile Spartan.</p>
                                <p>Salata fresh Spartan este una din alegerile de bază pentru cei ce sunt la dieta. Aceasta are un conținut scăzut de calorii, este revigorantă mai ales în zilele călduroase, și poate fi combinată cu sosul „multitudine de legume.”</p>
                                <p>Interesant la acest sos este faptul că el conține 0% grăsimi, fiind preparat din ingrediente naturale, incluzând roșii, morcovi, țelină, ardei kapia, și o notă de ardei iute. Dar nu vă faceți griji, salata va fi doar ușor picantă în combinație cu acest sos.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-footer3">
                <Footer3></Footer3>
            </div>
        </div>
        
    )
}