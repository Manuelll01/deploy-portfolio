import React, {useState} from "react"
import './ProductSlider.css';
import { ProductCard2 } from "../ProductCard2/ProductCard2";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Aplicatie100 } from "../../App";
import { Link } from "react-router-dom";
import { Apartament1CamerePopup } from "../Popup/Apartament1CamerePopup/Apartament1CamerePopup";
import { Popup } from "../Popup/Popup";
import { Apartament2CamerePopup } from "../Popup/Apartament2CamerePopup/Apartament2CamerePopup";
import { Apartament3CamerePopup } from "../Popup/Apartament3CamerePopup/Apartament3CamerePopup";
import { Apartament4CamerePopup } from "../Popup/Apartament4CamerePopup/Apartament4CamerePopup";


export const ProductSlider = () => {/* mai intai o sa fac product slider-ul ca in tutorial, dupa o sa il modific sa fie ca NavBarul cu .map*/
  const [buttonPopup1, setButtonPopup1] = useState(false)
  const [buttonPopup2, setButtonPopup2] = useState(false)
  const [buttonPopup3, setButtonPopup3] = useState(false)
  const [buttonPopup4, setButtonPopup4] = useState(false)
    return(
    <div>
      
      <div className="display-apartamente-2">
        <Swiper 
        // install Swiper modules
        modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
        /*effect={'fade'}*/
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        loop
        className='Styles.mySwiper'
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="container-imagine-ProductSlider">
              <Link to='/Apartamente' className="link-imagine-ProductSlider" onClick={() => setButtonPopup1(true)}>
                <img className="img-mica" src="img/schita_apartament_1camere.jpg"></img>
                <p>Garsoniera</p>
              </Link> 
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-ProductSlider">
            <div className="container-imagine">
              <Link to='/Apartamente' className="link-imagine-ProductSlider" onClick={() => setButtonPopup2(true)}>
                <img className="img-mica" src="img/schita_apartament_2camere.jpg"></img>
                <p>Apartament doua camere</p>
              </Link>    
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-ProductSlider">
            <div className="container-imagine">
              <Link to='/Apartamente' className="link-imagine-ProductSlider" onClick={() => setButtonPopup3(true)}>
                <img className="img-mica" src="img/schita_apartament_3camere.jpg"></img>
                <p>Apartament trei camere</p>
              </Link>   
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-ProductSlider">
            <div className="container-imagine">
              <Link to='/Apartamente' className="link-imagine-ProductSlider" onClick={() => setButtonPopup4(true)}>
                <img className="img-mica" src="img/schita_apartament_4camere.jpg"></img>
                <p>Apartament patru camere</p>
              </Link>  
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="display-apartamente-2">
        <Popup trigger={buttonPopup1} inchidere={setButtonPopup1}>
          <Apartament1CamerePopup></Apartament1CamerePopup>{/*asta poate fi adaugata pt ca am pus in componenta un {props.children}*/}
        </Popup> 
        <Popup trigger={buttonPopup2} inchidere={setButtonPopup2}>
          <Apartament2CamerePopup></Apartament2CamerePopup>
        </Popup> 
        <Popup trigger={buttonPopup3} inchidere={setButtonPopup3}>
          <Apartament3CamerePopup></Apartament3CamerePopup>
        </Popup> 
        <Popup trigger={buttonPopup4} inchidere={setButtonPopup4}>{/*nu stiu de ce dar cand le pun la sfarsit se aseaza si backgound-color ul de la divul pe post de filtru cum trebuie*/}
          <Apartament4CamerePopup></Apartament4CamerePopup>
        </Popup>
      </div>
    
    </div>
        
    );


};



