import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import "./DropDownNavBar.css"

export const DropDownNavBar = (props) => { /* asta o sa fie folosit in siteul magazin de haine*/
    const [scroll, setScroll] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [sideCliced, setSideClicked] = useState(false)
    const rightButton = useRef()

    const laScroll = () => {
        if (window.pageYOffset >= 100) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    } 
    const clickhandler = () => {
        setClicked(!clicked)
    }
    const sideClickhandler = () => {
        setSideClicked(!sideCliced)
    }

   
    /*rightButton = element => {
        this.rightButton = element
    }
     const getStyle = () => {

        const styles = this.rightButton.style;
        console.log(styles);
        // for getting computed styles
        const computed = window.getComputedStyle(this.rightButton).getPropertyValue("width");// border-radius can be replaced with any other style attributes;
        console.log(computed);
      }*/

     /* function width() {
        rightButton.current.width = '100px'
        console.log(rightButton.current.width)
      }
      width()
    */
    window.addEventListener("scroll", laScroll)
    return(
        <div className={scroll ? "bob fixed" : "bob"}>
            <div className={scroll ? "drop-down-nav-bar-container fixed" : "drop-down-nav-bar-container"}>
                <ul className="container-butoane-stanga">
                    <li><Link to={props.path1}>{props.titlu1}</Link></li>
                </ul>
                <ul className="container-butoane-dreapta">
                    <li className="meniu">
                        <Link to='/deploy-portfolio/Versiune3/meniu.restaurant'>meniu <i class="fa-solid fa-arrow-down"></i></Link>
                        <div className="meniu-2">
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.burgers'>burgers</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.pui'>pui</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.sosuri'>sosuri</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.bauturi'>bauturi</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.deserturi'>deserturi</Link></li>
                        </div>
                    </li>
                    <li ref={rightButton}><Link to='/deploy-portfolio/Versiune3/despreNoi.restaurant'>Despre Noi</Link></li>
                    <li><Link to='/deploy-portfolio/Versiune3/livrare.restaurant'>Livrare</Link></li>
                    <li><Link to='/deploy-portfolio/Versiune3/contact.restaurant'>Contact</Link></li>
                    <li><Link to='/deploy-portfolio/Versiune3/cariera.restaurant'>Carieră</Link></li>
                </ul>
                <div   className="responsive-icon-drop-down-nav-bar"><div className="div-interior-drop-down-nav-bar-icon" onClick={clickhandler}><i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i></div></div>
                
            </div>
            <div className= {clicked ? "side-bar-drop-down-nav-bar activ": "side-bar-drop-down-nav-bar" }>
                    <ul>
                        <li className="meniu-sidebar"><Link to='' onClick={sideClickhandler}><i  class={sideCliced ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"}></i>meniu</Link></li>
                    
                        <div className={sideCliced ? "meniu-2-sidebar activ2": "meniu-2-sidebar"}>
                        <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant'><i class="fa-solid fa-angles-right"></i>Toate produsele</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.burgers'><i class="fa-solid fa-angles-right"></i>Burgers</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.pui'><i class="fa-solid fa-angles-right"></i>Pui</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.sosuri'><i class="fa-solid fa-angles-right"></i>Sosuri</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.bauturi'><i class="fa-solid fa-angles-right"></i>Bauturi</Link></li>
                            <li><Link to='/deploy-portfolio/Versiune3/meniu.restaurant.deserturi'><i class="fa-solid fa-angles-right"></i>Deserturi</Link></li>
                        </div>
                        <li><Link to='/deploy-portfolio/Versiune3/despreNoi.restaurant'>Despre Noi</Link></li>
                        <li><Link to='/deploy-portfolio/Versiune3/livrare.restaurant'>Livrare</Link></li>
                        <li><Link to='/deploy-portfolio/Versiune3/contact.restaurant'>Contact</Link></li>
                        <li><Link to='/deploy-portfolio/Versiune3/cariera.restaurant'>Carieră</Link></li>
                    </ul>
                </div>
        </div>
        
        
    )

    
}