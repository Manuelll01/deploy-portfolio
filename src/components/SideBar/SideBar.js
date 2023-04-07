import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SideBarData";
import './SideBar.css';
import { IconContext } from "react-icons/lib";


export const NavBar = () => {
    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return(
    <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="sidebar">
                <Link to='#' className='menu-bars'>
                    <faIcons.FaBars onClick={showSidebar}></faIcons.FaBars>
                </Link>
            </div>
            <nav className={sidebar ? 'side-menu active': 'side-menu'}>
                <ul className="side-menu-items" /* poti sa pui onClick={showSidebar} si aici doar ca mi s-a parut ca are mai mult sens sa fie pusa  pe randul 28 la iconita */>
                    <li className="sidebar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar}></AiIcons.AiOutlineClose>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    </>
    )
}

/*                          DE ADAUGAT:
- 
-
-
-      */