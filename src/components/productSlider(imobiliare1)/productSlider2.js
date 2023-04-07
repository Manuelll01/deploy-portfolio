import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { ProductCard1Data } from '../ProductCard/productCardData';
import { ProductCard } from '../ProductCard/productCard';
import './productSlider2.css';

export const ProductSlider2 = () => {
    return(
        <>
        <Swiper
            modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
            /*effect={'fade'}*/
            speed={800}
            spaceBetween={50}
            slidesPerView={3}
            loop
            className='mySwiper1'
            navigation
            >
                <div className='product-card-1-app'>
                    {ProductCard1Data.map(element => (
                       <SwiperSlide className='swiper-slide'>
                            <ProductCard pretVechi={element.pretVechi}
                                pretNou={element.pretNou}
                                titlu={element.titlu}
                                img={element.img}
                            ></ProductCard>
                        </SwiperSlide>))}
                </div>
                

        </Swiper>
        </>
    )
}