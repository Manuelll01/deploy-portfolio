import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ScrollUpNavBar.css"
import {Link as Scroll} from "react-scroll"

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
                coordonate: props.a,
                offset: 0
        }, 
            { content: "Projects",
                coordonate: props.b,
                offset: 0
        }, 
            { content: "About me",
            coordonate: props.c,
            offset: 0
        }, 
            { content: "Contact",
                coordonate: props.d,
                offset: -50
        }, ]
    return(
        <div className={ scrolled ? "Container-ScrollUpNavBar" : "Container-ScrollUpNavBar scrolledDown"}>
            <div className="Container-Buton-Principal-ScrollUpNavBar">
                <h2>Negoiță Mircea</h2>
            </div>


            <div className="Container-butoane-ScrollUpNavBar">
                {data.map((item, i) => {
                    return(
                        <Scroll  to={item.coordonate} spy={true} smooth={true} offset={item.offset} duration={800}>{item.content}</Scroll>
                    )
                })}
            </div>


            <div  onClick={clickhandler} className="Container-Iconita">
                menu <i className={var1 ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>

            <div className={ var1 ? "Container-Side-bar" : "Container-Side-bar scroll-up-active"}>
                {data.map((item, i) => {
                    return(
                        <Link onClick={() =>{ScrollToElement(item.coordonate)}} key={i} to={item.to}>{item.content}</Link>
                    )
                })}
            </div>
        </div>
    )
}