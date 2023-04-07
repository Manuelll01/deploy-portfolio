import React, {useState, useRef} from "react"
import './ProductSliderRestaurant.css';
import { ProductCard2 } from "../ProductCard2/ProductCard2";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade} from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Aplicatie100 } from "../../App";
import { Link } from "react-router-dom";
import { Apartament1CamerePopup } from "../Popup/Apartament1CamerePopup/Apartament1CamerePopup";
import { Popup } from "../Popup/Popup";
import { Apartament2CamerePopup } from "../Popup/Apartament2CamerePopup/Apartament2CamerePopup";
import { Apartament3CamerePopup } from "../Popup/Apartament3CamerePopup/Apartament3CamerePopup";
import { Apartament4CamerePopup } from "../Popup/Apartament4CamerePopup/Apartament4CamerePopup";


export const ProductSliderRestaurant = () => {/* mai intai o sa fac product slider-ul ca in tutorial, dupa o sa il modific sa fie ca NavBarul cu .map*/

SwiperCore.use([Autoplay]);
    return(
    <div>
      
      <div className="">
        <Swiper 
        // install Swiper modules
        modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
        /*effect={'fade'}*/
        speed={600}
        spaceBetween={0}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
      }}
        slidesPerView={1}
        loop={true}
        className='Styles.mySwiper'
        navigation //(sagetile)
        >
          <SwiperSlide>
            <div className="container-imagine">
              <Link to='/meniu.restaurant.burgers' className="link-imagine-ProductSlider-Restaurant" >
                <img className="imagine-ProductSlider-Restaurant" src="img/hamburger2.jpg"></img>
              </Link> 
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="container-imagine">
              <Link to='/meniu.restaurant.burgers' className="link-imagine-ProductSlider-Restaurant">
                <img className="imagine-ProductSlider-Restaurant" src="img/bur1.jpg"></img>
              </Link>    
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-imagine">
              <Link to='/meniu.restaurant.burgers' className="link-imagine-ProductSlider-Restaurant">
                <img className="imagine-ProductSlider-Restaurant" src="img/bur2.jpg"></img>
              </Link>   
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-imagine">
              <Link to='/meniu.restaurant.burgers' className="link-imagine-ProductSlider-Restaurant">
                <img className="imagine-ProductSlider-Restaurant" src="img/bur3.jpg"></img>
              </Link>  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-imagine">
              <Link to='/meniu.restaurant.pui' className="link-imagine-ProductSlider-Restaurant">
                <img className="imagine-ProductSlider-Restaurant" src="img/bur4.jpg"></img>
              </Link>  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-imagine">
              <Link to='/meniu.restaurant.bauturi' className="link-imagine-ProductSlider-Restaurant">
                <img className="imagine-ProductSlider-Restaurant" src="img/bur8.jpg"></img>
              </Link>  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-imagine">
              <Link to='/meniu.restaurant.pui' className="link-imagine-ProductSlider-Restaurant">
                <img className="imagine-ProductSlider-Restaurant" src="img/bur6.jpg"></img>
              </Link>  
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      
    
    </div>
        
    );


};