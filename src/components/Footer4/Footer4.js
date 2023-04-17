import React from "react";
import "./Footer4.css"
import { Link } from "react-router-dom";
import {Link as Scroll} from "react-scroll"

export const Footer4 = (props) => {
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
        <div className="Container-Footer4">
            
            <div className="Container-Navigation">
                <div className="Subtitlu-Footer4">
                    <h1>Navigation</h1>
                </div>
                <div className="Navigation-footer4">
                    {data.map((item, i) => {
                        return(
                            <ul>
                                <li><Scroll  to={item.coordonate} spy={true} smooth={true} offset={item.offset} duration={800}>{item.content}</Scroll></li>
                            </ul>
                            
                        )
                    })}
                </div>
            </div>
            
            <div className="Container-Projects">
                <div className="Subtitlu-Footer4">
                    <h1>Projects</h1>
                </div>  
                <div className="Projects-footer4">
                    <Link to='/Versiune3'>Fast Food Website</Link>
                    <Link to='/Versiune2'>Real Estate Website</Link>
                </div>
            </div>

            <div className="Container-Contact">
                <div className="Subtitlu-Footer4">
                    <h1>Contact</h1>
                </div>  
                <div className="Contact-footer4">
                    <div className="container-info-footer4">
                        <i class="fa-solid fa-phone"></i>
                        <p>0774.649.357</p>
                    </div>
                    <div className="container-info-footer4">
                        <i class="fa-solid fa-envelope"></i>
                        <p>Manuel.Mircea20@gmail.com</p>
                    </div>
                    <div className="container-info-footer4">
                        <i class="fa-brands fa-instagram"></i>
                        <p>mircea.negoita.5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}