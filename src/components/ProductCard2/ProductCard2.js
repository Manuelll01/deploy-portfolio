import React from "react";
import './ProductCard2.css'
import {FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt} from 'react-icons/fa'
import { contentsLength } from "./content";

export const ProductCard2 = (props) => {
    document.documentElement.style.setProperty('--const-length', contentsLength)
    return(
        <div className="productList">
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img'></img>{/*The alt="" attribute specifies an alternate text for an area */}

                <FaShoppingCart className={"productCard_cart"}></FaShoppingCart>
                <FaRegBookmark className={"productCard_wish"}></FaRegBookmark>
                <FaFireAlt className={"producCard_FastSelling"}></FaFireAlt>
                <div className="productCard_content">
                    <h3 className="productName">{props.name}</h3>
                    <div className="displayStack_1">
                        <div className="productPrice">${props.price}</div>
                        <div className="productSales">{props.totalSales} units sold</div>
                    </div>
                    <div className="displayStack_2">
                        <div className="productRating">
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1} key={index}></FaStar>
                            ))}
                            <div className="productTime">{props.timeLeft} days left</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
