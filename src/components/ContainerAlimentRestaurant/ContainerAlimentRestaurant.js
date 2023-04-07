import React from "react";
import { Link } from "react-router-dom";
import './ContainerAlimentRestaurant.css'


export const ContainerAlimentRestaurant = (props) => {
    return(
        <Link className="container-ContainerAlimentRestaurant">
            
            <div className="continut-ContainerAlimentRestaurant">
                <div className="titlu-si-descriere-ContainerAlimentRestaurant">
                    <div className="titlu-ContainerAlimentRestaurant"><h2 >{props.titlu}</h2></div>
                    <div className="descriere-ContainerAlimentRestaurant"><p>{props.descriere}</p></div>
                </div>
                <div className="pret-ContainerAlimentRestaurant"><h4>{props.pret}</h4></div>
            </div>
            <div className="cantitate-ContainerAlimentRestaurant"><h4>{props.cantitate}</h4></div>
            <div className="img-ContainerAlimentRestaurant"><img src={props.src} alt='img'></img></div>
        </Link>
    )
}