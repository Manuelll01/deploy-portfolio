import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./BaraCountUpAnimation2.css"


  
    const scrollCountUp = () => {
        if(window.scrollY == 300){
        let valueDisplays = document.querySelectorAll(".numar");
        let interval = 5000;
    
    
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endvalue);
        let counter = setInterval(function(){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endvalue) {
                clearInterval(counter);
            }
        }, duration);
        })
        console.log("sasas")}
        
    }
    
    


export const BaraCountUpAnimation2 = () =>{
    const [numar, setNumar] = useState(0)
    const displayNumar1 = useRef(0)
    
    
    window.addEventListener("scroll", scrollCountUp)
    return(
        <div className="container-BaraCountUpAnimation">
            <div className="container-cutie">
                <div className="cerc"><i className="fa-regular fa-sun"></i></div>
                <h3 className="numar" ref={displayNumar1} data-val="300">0</h3>
                <p>apartamente luminoase</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-car-side"></i></div>
                <h3 className="numar" ref={displayNumar1} data-val="270">0</h3>
                <p>cm inaltimea camerelor</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-basketball"></i></div>
                <h3 className="numar" ref={displayNumar1} data-val="175">0</h3>
                <p>mp de teren pentru activitati sportive</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-leaf"></i></div>
                <h3 className="numar" ref={displayNumar1} data-val="3400">0</h3>
                <p>mp de gradini urbane</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-square-parking"></i></div>
                <h3 className="numar" ref={displayNumar1} data-val="315">0</h3>
                <p>locuri de parcare</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-battery-full"></i></div>
                <h3 className="numar" ref={displayNumar1} data-val="5">0</h3>
                <p>statii de incarcare pentru masini electrice</p>
            </div>
        </div>
    )
}