import React from "react";
import { Link } from "react-router-dom";
import "./NavBar2.css"
import * as faIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {data} from "./NavBar2Data"

export const NavBar2 = () => {
    return(
        <div>
            <nav className="navbar">
                <div className="nume">
                <h3 className="logo">Negoiță Mircea</h3>
                {/* nu o sa mearga iconita rotunda cu poza mea aici, va trebui sa o pun mare, fie pe stanga fie pe mijlocul ecranului
                 si va trebui sa schimb poza cu una facuta mai din prim plan */}
                </div>
                
                

                <ul className="navlinks">
                    {data.map((element, index) => {
                        return(
                            <li className={element.cName} key={index} >
                                <Link to={element.path}>
                                    {element.icon}
                                    <span>{element.title}</span>
                                </Link>
                            </li>
                        )
                        

                    })}
                </ul>
            </nav>
        </div>
    )
}