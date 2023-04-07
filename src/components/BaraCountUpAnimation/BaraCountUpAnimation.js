import React from "react";
import "./BaraCountUpAnimation.css"
import {BsEmojiSunglasses} from "react-icons/bs"
import {AiTwotoneCar} from "react-icons/ai"
import { useState } from "react";

let valueDisplays = document.querySelectorAll(".numar");
let interval = 10;


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
    

export const BaraCountUpAnimation = () =>{

    const [count, setCount] = useState(0);

    

    setInterval(() => {
        if (count < 5000) {
          setCount(count + 1);
        }
      }, 200);/*codul de mai sus este facut cu chat gpt si are bug-uri*/ 
    
    return(
        <div className="container-BaraCountUpAnimation">
            <div className="container-cutie">
                <div className="cerc"><i className="fa-regular fa-sun"></i></div>
                <h3 className="numar" data-val="300">300</h3>
                <p>apartamente luminoase</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-car-side"></i></div>
                <h3 className="numar" data-val="270">270</h3>
                <p>cm inaltimea camerelor</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-basketball"></i></div>
                <h3 className="numar" data-val="175">175</h3>
                <p>mp de teren pentru activitati sportive</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-leaf"></i></div>
                <h3 className="numar" data-val="3400">3400</h3>
                <p>mp de gradini urbane</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-square-parking"></i></div>
                <h3 className="numar" data-val="315">315</h3>
                <p>locuri de parcare</p>
            </div>
            <div className="container-cutie">
                <div className="cerc"><i className="fa-solid fa-battery-full"></i></div>
                <h3 className="numar" data-val="5">5</h3>
                <p>statii de incarcare pentru masini electrice</p>
            </div>
        </div>
    )
}