import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import "./NavBar3.css"
import { data } from "./NavBar3Data";
import * as faIcons from "react-icons/fa";
import { data2 } from "./NavBar3Data";
import { ProductSlider } from "../ProductSlider(swiper)/ProductSlider";

export const NavBar3 = (props) => {
    const [scroll, setScroll] = useState(false)
    const [clicked, setClicked] = useState(false)

    const laScroll = () => {
        if (window.scrollY >= 100) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    } 

    const clickhandler = () => {
        setClicked(!clicked)
    }

    window.addEventListener("scroll", laScroll)
    return(
        
            <div className={scroll ? "nav-bar-3 fixed" : "nav-bar-3"}>
               
                <div className="buton-acasa"><Link to={props.path1}>{props.titlu}</Link></div>

                <div className="div-container">
                    <ul className="nav-container ">
                    {data.map((element, index) => { 
                    return(
                        <li key={index} className={element.cName}><Link to={element.to}>{element.content}</Link></li>
                        
                    )
                    
                })}
                    </ul>
                </div>

                
                   <div  onClick={clickhandler} className="responsive-icon">meniu<i className='fas fa-bars'></i></div> 
                            {/* iconitele le-am pus cu fontawsome.com, am un script in folderul html*/}
                

                <nav className={clicked ? "sidebar-container activ": "sidebar-container"}>
                    <ul className="side-bar">
                        <li className="container-buton-x">
                            <i onClick={clickhandler} className="fas fa-times"></i>
                        </li>
                        {data2.map((element, index) => { 
                        return(
                            <li key={index} className={element.cName}><Link to={element.to}>{element.content}</Link></li>
                            
                        )
                        
                    })}
                        </ul>
                </nav>
                
             </div>
            
                
    
    
        
        
    )
}