import React from "react";
import { useEffect, useState } from "react";
import "./ScrollUpButton.css"

export const ScrollUpButton = () => {
    const [ScrollUpButton, setScrollupButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300) {
                setScrollupButton(true)
            }
            else {
                setScrollupButton(false)
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <div className="container-ScrollUpButton">
            {ScrollUpButton && (
                <button onClick={scrollUp}><i class="fa-sharp fa-solid fa-arrow-up"></i></button>
            )}
        </div>
    )
}