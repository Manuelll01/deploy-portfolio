import React from "react";
import "./Footer4.css"
import { Link } from "react-router-dom";

export const Footer4 = (props) => {
    const ScrollToElement = (element) => {
        
        window.scrollTo({
            top: element,
            behavior: "smooth"
        })}
        const data = [
            { content: "Home",
                to: "/",
                coordonate: props.a
        }, 
            { content: "Projects",
                to: "/",
                coordonate: props.b
        }, 
            { content: "About me",
            to: "/",
            coordonate: props.c
        }, 
            { content: "Contact",
                to: "/",
                coordonate: props.d
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
                                <li><Link onClick={() =>{ScrollToElement(item.coordonate)}} key={i} to={item.to}>{item.content}</Link></li>
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
                    <Link to='Versiune3'>Fast Food Website</Link>
                    <Link to='Versiune2'>Real Estate Website</Link>
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
                        <p>Negoitamanuel@yahoo.com</p>
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