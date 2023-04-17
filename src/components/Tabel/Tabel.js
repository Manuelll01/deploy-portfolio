import React from "react";
import "./Tabel.css"

export const Tabel = (props) => {
    return(
        <div className="Container-Tabel">
            {props.children}
        </div>
    )
}