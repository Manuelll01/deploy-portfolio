import React from "react";
import "./Footer2.css"
import {AiOutlineHome} from "react-icons/ai"
import {BsCashCoin} from "react-icons/bs"
import {CiMoneyCheck1} from "react-icons/ci"
import {FaMoneyBillWaveAlt} from "react-icons/fa"
import {HiOfficeBuilding} from "react-icons/hi"


export const Footer2 = () => {
    return(
            <footer className="Footer-2">
                <div className="info-container">
                    <div className="titlu-Footer-2"><h2>Modalități de plată</h2></div>
                    <div className="info-content">
                        <div className="info">
                            <i><FaMoneyBillWaveAlt></FaMoneyBillWaveAlt></i><p>Plată cash*</p>
                        </div>
                        <div className="info">
                            <i><CiMoneyCheck1></CiMoneyCheck1></i><p>Credit Ipotecar*</p>
                        </div>
                        <div className="info">
                            <i><AiOutlineHome></AiOutlineHome></i><p>Programul "Noua Casă"*</p>
                        </div>
                        <div className="info">
                            <i><BsCashCoin></BsCashCoin></i><p>Rate la Dezvoltator*</p>
                        </div>
                    </div>
                    
                </div>
                <div className="info-container">
                    <div className="titlu-Footer-2"><h2>Birou de vânzări</h2></div>
                    <div className="info-content">
                        <div className="info">
                            <i><HiOfficeBuilding></HiOfficeBuilding></i><p>Str. Imaginara, Nr54, Brasov</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="info-container">
                    <div className="titlu-Footer-2"><h2>Contactează-ne</h2></div>
                    <div className="info-content">
                        <div className="info">
                            <i class="fa-solid fa-phone"></i>
                            <p>0774 649 357</p>
                        </div>
                        <div className="info">
                            <i class="fa-solid fa-envelope"></i>
                            <p>Manuel.Mircea20@gmail.com</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="info-container">
                    <div className="titlu-Footer-2"><h2>Socail Media</h2></div>
                    <div className="info-content">
                        <div className="info">
                            <i class="fa-brands fa-instagram"></i><p>mircea.negoita.5</p>
                        </div>
                    </div>
                    
                </div>
            </footer>
    )
}