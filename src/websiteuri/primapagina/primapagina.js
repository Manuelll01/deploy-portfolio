import React, {useState, useEffect, useRef} from "react";
import "./primapagina.css";
import {FaReact, FaHtml5, FaJs, FaCss3} from "react-icons/fa"
import { ScrollUpNavBar } from "../../components/ScrollUpNavBar/ScrollUpNavBar";
import { CasetaMicaPozaPrezentareWebsite } from "../../components/CasetaMicaPozaPrezentareWebsite/CasetaMicaPozaPrezentareWebsite";
import { Link } from "react-router-dom";
import { Footer4 } from "../../components/Footer4/Footer4";
import { Form2 } from "../../components/Form2/Form2";
import { Link as Scroll} from 'react-scroll'
import { Tabel } from "../../components/Tabel/Tabel";


import CV_Negoiță_Mircea from "../../imagini/CV_Negoiță_Mircea.pdf"

export const PrimaPagina = () => {

    

    const [variabilaNeschimbata, setVariabilaNeschimbata] = useState()
   
      useEffect(() => {
        const ScrollUpPage = () => {
            window.scrollTo(0, 0)
        }
        ScrollUpPage()
    }, [variabilaNeschimbata])
    return(
    <div className="prima-pagina">

        <ScrollUpNavBar a={'Container-acasa'} b={'Proiecte-Primapagina'} c={'DespreMine-PP'} d={'Contact'} ></ScrollUpNavBar>
        
        


        <div className="Container-acasa" >
            <div className="caseta-acasa-flex">
                <div  className="acasa-scris">
                    <h2>Entry Level Front End Developer</h2>
                    <p>I am Negoiță Mircea-Manuel. I'm a Selft-taught front end developer and i'm based in Brașov, România although i am willing to relocate if the right job opportunity comes along. I am ready to work and laern as much about web development as i have the opportunity to and i hope i can be a great fit to your team. </p>
                    <div className="container-butoane-pp">
                        <div className="buton-1-pp">
                            <Scroll  to='Contact' spy={true} smooth={true} offset={-100} duration={800}>Contact me</Scroll>
                        </div>
                        <div className="buton-2-pp">
                        <Scroll  to='Projects' spy={true} smooth={true} offset={-350} duration={800}>Projects</Scroll>
                        </div>
                    </div>
                    <div className="container-iconite-caseta">{/*asta cu siguranta nu o sa fie pusa aici*/}
                        <div className="iconita-1" title="HTML">
                            <FaHtml5 ></FaHtml5>
                        </div>
                        <div className="iconita-3" title="CSS">
                            <FaCss3></FaCss3>
                        </div>
                        <div className="iconita-2" title="Java Script">
                            <FaJs></FaJs>
                        </div>
                        <div className="iconita-4" title="React">
                            <FaReact></FaReact>
                        </div>
                    </div>
                </div>
                <div className="acasa-img">
                    <div className="container-img-acasa">
                        <img src="./img/poza-fara-bg.png"></img>
                        <div className="custom-shape-divider-bottom-1679011994">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                            </svg>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        <div className="Proiecte-Primapagina" >

            <div className="caseta-proiecte-flex">
                <div className="Titlu-Si-Scris-Proiect">
                    <h2 id="Projects">My Projects</h2>
                    <p>In order to learn the basics of web developement and prepare for my future work i have created a few small projects: </p>
                </div>

                <div className="Container-Casete-Proiecte">
                    <div className="CasetaProiect">
                        <CasetaMicaPozaPrezentareWebsite
                        descriere='Websiteul unei companii fictive de Fast Food'
                        img='./img/interior-restaurant-4.jpg'
                        to='Versiune3'></CasetaMicaPozaPrezentareWebsite>
                    </div>
                    
                    <div className="CasetaProiect">
                        <CasetaMicaPozaPrezentareWebsite
                        descriere='Websiteul unei companii fictive de dezvoltare imobiliară'
                        img='./img/bloc2.jpg'
                        to='Versiune2'></CasetaMicaPozaPrezentareWebsite>
                    </div>
                </div>

                
                
            </div>
        </div>

        
        <div className="DespreMine-PP" >
            
            <div className="Caseta-DespreMine-PP">
                <div className="Container-img-DespreMine">
                    <img src="./img/poza-facultate.jpg"></img>
                </div>
                <div className="Container-scris-DespreMine">
                    <h2>About me</h2>
                    <p>My name is Negoiță Mircea-Manuel. I'm a Selft-taught front end developer based in Brașov, România(willing to relocate) and i'm very passionate and dedicated to my work. After researching online and wourking on my projects i consider that i aquired the necessary skils to work as an Entry Level Front End Developer and i'm trying to break into the industry. </p>
                    <Tabel>
                        <p>Full Name: Negoiță Mircea-Manuel</p>
                        <p>Age: 21</p>
                        <p>bachelor degree: Finance and Banking</p>
                        <p>Phone: +40 774 649 357</p>
                        <p>Adress: Brașov, Romania</p>
                        <p>Gmail: Manuel.Mircea20@gmail.com</p>
                    </Tabel>
                    <div className="Container-buton-dowload">
                        <a href={CV_Negoiță_Mircea} download >Download CV</a>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="Container-ContactPP" >
            
            <h2 id="Contact">Contact</h2>
            <div className="Container-interior-Contact-PP">
                <div className="Contaier-form2">
                    <Form2></Form2>
                </div>
                <div className="Container-cutie-contact-PP">
                    <div className="cutie-contact">
                        <div className="cutie-contact-iconita">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <h4>Email</h4>
                        <p>Negoitamanuel@yahoo.com</p>
                    </div>
                    <div className="cutie-contact">
                        <div className="cutie-contact-iconita">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <h4>Phone Number</h4>
                        <p>0774.649.357</p>
                    </div>
                    <div className="cutie-contact">
                        <div className="cutie-contact-iconita">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <h4>Adress</h4>
                        <p>Brasov, Romania</p>
                    </div>
                </div>
            </div>
            
        </div>
            
            {/*
                <SideBarSlide
                Acasa = {<AcasaPrimaPagina></AcasaPrimaPagina>}
                Proiecte = {<Proiecte></Proiecte>}
                DespreMine = {<DespreMine></DespreMine>}
                Contacteazama = {<Contacteazama></Contacteazama>}></SideBarSlide>
    */}
    <Footer4 a={'Container-acasa'} b={'Proiecte-Primapagina'} c={'DespreMine-PP'} d={'Contact'}></Footer4>
    </div>
    )
    
}