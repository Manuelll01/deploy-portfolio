import React from "react"
import "./ContainerSageti.css"
import { Link } from "react-router-dom"

export const ContainerSageti = (props) => {
    return(
        <div className="container-sageti">
            <div className="left-arrow">{/*in fisierul Bauturi.css*/}
                <Link to={props.link1}><i class="fa-solid fa-angles-left"></i></Link>
            </div>
            <div className="container-sageti-content">
                <p>{props.children}</p>
            </div>
            <div className="right-arrow">
                <Link to={props.link2}><i class="fa-solid fa-angles-right"></i></Link>
            </div>
        </div>
    )
}