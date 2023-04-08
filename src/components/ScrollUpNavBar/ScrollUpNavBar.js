import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ScrollUpNavBar.css"


export const ScrollUpNavBar = (props) => {
    /*scroll-up, scroll-down nav-bar on scroll */
    const [var1, setVar1] = useState(false)
    const clickhandler = () => {
        setVar1(!var1)
    }
    const [scrolled, setScrolled] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [currentScroll, setCurrentScroll] = useState(0)
    const ScrollHandler = () => {
        setCurrentScroll(window.pageYOffset)
        
        if(lastScroll > currentScroll){
            setScrolled(true)
        }
        else if(lastScroll < currentScroll){
            setScrolled(false)
        }
         setLastScroll(currentScroll)
    }
    window.addEventListener('scroll', ScrollHandler)


    /*Page Scroll On Click */
    const ScrollToElement = (element) => {
        
        window.scrollTo({
            top: element,
            behavior: "smooth"
        })}
        const data = [
            { content: "Home",
                to: "/deploy-portfolio/",
                coordonate: props.a
        }, 
            { content: "Projects",
                to: "/deploy-portfolio/",
                coordonate: props.b
        }, 
            { content: "About me",
            to: "/deploy-portfolio/",
            coordonate: props.c
        }, 
            { content: "Contact",
                to: "/deploy-portfolio/",
                coordonate: props.d
        }, ]
    return(
        <div className={ scrolled ? "Container-ScrollUpNavBar" : "Container-ScrollUpNavBar scrolledDown"}>
            <div className="Container-Buton-Principal-ScrollUpNavBar">
                <h2>Negoiță Mircea</h2>
            </div>
            <div className="Container-butoane-ScrollUpNavBar">
                {data.map((item, i) => {
                    return(
                        <Link onClick={() =>{ScrollToElement(item.coordonate)}} key={i} to={item.to}>{item.content}</Link>
                    )
                })}
            </div>
            <div  onClick={clickhandler} className="Container-Iconita">
                menu <i className={var1 ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
        </div>
    )
}