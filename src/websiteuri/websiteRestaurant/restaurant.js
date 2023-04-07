import React from "react";
import "./restaurant.css"
import { Link } from "react-router-dom";
import { DropDownNavBar } from "../../components/DropDownNavBar/DropDownNavBar";
import { ProductSliderRestaurant } from "../../components/ProductSlider(swiper)/ProductSliderRestaurant";
import { Footer3 } from "../../components/Footer3/Footer3";

export const WebsiteRestaurant = () => {

    const descidePaginaLaTop = () => {
        window.scrollTo(0, 0)
    }
    descidePaginaLaTop()
    
    return(
    
    <div className="container-WebsiteRestaurant">
        <DropDownNavBar path1='/' titlu1='Home'></DropDownNavBar>
        <div className="container-grid-restaurant">
            
            <div className="container-product-slider-restaurant">
                <ProductSliderRestaurant></ProductSliderRestaurant>
            </div>
            <div className="container-caseta-1-restaurant">
                <div className="titlu-caseta-restaurant"><h2>Despre noi</h2></div>
                <div className="container-imagine-caseta-restaurant-1">
                    <img className="imagine-caseta-restaurant" src="./img/oferta_burger.jpg"></img>
                </div>
                <div className="container-butoane-caseta-restaurant-1">
                    <div className="buton-caseta-1-restaurant">
                        <Link to='/despreNoi.restaurant'>Vezi detalii</Link>
                    </div>
                </div>
            </div>
            <div className="container-caseta-2-restaurant">
                <div className="titlu-caseta-restaurant">Livrare</div>
                <div className="container-imagine-caseta-restaurant">
                    <img className="imagine-caseta-restaurant-jos" src="./img/food_delivery1.jpg"></img>
                </div>
                <div className="container-butoane-caseta-restaurant">
                    <div className="buton-caseta-1-restaurant">
                        <Link to='/livrare.restaurant'>Vezi detalii</Link>
                    </div>
                </div>
            </div>
            <div className="container-caseta-3-restaurant">
                <div className="titlu-caseta-restaurant">Meniul nostru</div>
                <div className="container-imagine-caseta-restaurant">
                    <img className="imagine-caseta-restaurant-jos" src="./img/meniu1.jpg"></img>
                </div>
                <div className="container-butoane-caseta-restaurant">
                    <div className="buton-caseta-1-restaurant">
                        <Link to='/meniu.restaurant'>Vezi meniul</Link>
                    </div>
                </div>
            </div>
            <div className="container-caseta-4-restaurant">
                <div className="titlu-caseta-restaurant">Contactează-ne</div>
                <div className="container-imagine-caseta-restaurant">
                    <img className="imagine-caseta-restaurant-jos" src="./img/contact-2.jpg"></img>
                </div>
                <div className="container-butoane-caseta-restaurant">
                    <div className="buton-caseta-1-restaurant">
                        <Link to='/contact.restaurant'>Contactează-ne</Link>
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