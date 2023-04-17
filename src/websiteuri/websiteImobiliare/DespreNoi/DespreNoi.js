import React ,{useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { BaraCountUpAnimation } from "../../../components/BaraCountUpAnimation/BaraCountUpAnimation";
import { BaraCountUpAnimation2 } from "../../../components/BaraCountUpAnimation2/BaraCountUpAnimation2";
import { CasetaDespreNoiInformatii } from "../../../components/CasetaDespreNoiInformatii/CasetaDespreNoiInformatii";
import { CasetaDespreNoiLarga } from "../../../components/CasetaDespreNoiLarga1/CasetaDespreNoiLarga";
import { CasetaScris } from "../../../components/CasetaScris/CasetaScris";
import { DespreNoiDescriere } from "../../../components/DespreNoiDescriere/DespreNoiDescriere";
import { Footer1 } from "../../../components/Footer/Footer1";
import { Footer2 } from "../../../components/Footer2/Footer2";
import { NavBar3 } from "../../../components/NavBar3/NavBar3";
import { ScrollUpButton } from "../../../components/ScrollUpButton/ScrollUpButton";
import "./DespreNoi.css";




export const DespreNoi = () =>{
    
    const [elementVizibil, setElementVizibil] = useState();
    const [elementVizibil2, setElementVizibil2] = useState();
    const [elementVizibil3, setElementVizibil3] = useState();
    const [elementVizibil4, setElementVizibil4] = useState();
    const [variabilaNeschimbata, setVariabilaNeschimbata] = useState()
    const listaElementeVizibile = [elementVizibil, elementVizibil2, elementVizibil3, elementVizibil4]
    const myRef = useRef();
    const myRef2 = useRef();
    const myRef3 = useRef();
    const myRef4 = useRef();


    


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementVizibil(entry.isIntersecting);{/*isIntersecting poate avea valoare de true sau false*/}
            if (entry.isIntersecting) observer.unobserve(entry.target)
        }, {
            threshold: 0.2,
            rootMargin: "0px",
        })
        observer.observe(myRef.current)
       
        
        
    }, [elementVizibil])
    useEffect(() => {
        const observer2 = new IntersectionObserver((entries) => {
            const entry2 = entries[0];
            setElementVizibil2(entry2.isIntersecting);{/*isIntersecting poate avea valoare de true sau false*/}
            if (entry2.isIntersecting) observer2.unobserve(entry2.target)
            
        }, {
            threshold: 0.2,
            rootMargin: "0px",
        });
        observer2.observe(myRef2.current)
    }, [elementVizibil2])
    useEffect(() => {
        const observer3 = new IntersectionObserver((entries) => {
            const entry3 = entries[0];
            setElementVizibil3(entry3.isIntersecting);{/*isIntersecting poate avea valoare de true sau false*/}
            if (entry3.isIntersecting) observer3.unobserve(entry3.target)
        }, {
            threshold: 0.2,
            rootMargin: "0px",
        })
        observer3.observe(myRef3.current)
    }, [elementVizibil3])
    useEffect(() => {
        const observer4 = new IntersectionObserver((entries) => {
            const entry4 = entries[0];
            setElementVizibil4(entry4.isIntersecting);{/*isIntersecting poate avea valoare de true sau false*/}
            if (entry4.isIntersecting) observer4.unobserve(entry4.target)
        }, {
            threshold: 0.2,
            rootMargin: "0px",
        })
        observer4.observe(myRef4.current)
    }, [elementVizibil4]) /*modul prin care am rezolvat problema aparitiei animatiei de mai multe ori fara refresh este sa pun fiecare observer
                            intr-un useEffect diferit si la al doilea paramentru sa pun usestateul fiecaruia sub forma de array*/


    useEffect(() => {
        const descidePaginaLaTop = () => {
            window.scrollTo(0, 0)
        }
        descidePaginaLaTop()
    }, [variabilaNeschimbata])
    
    return(
        <div className="despre-noi-container">
            <div className="continut-despre-noi">
                <NavBar3 className="NavBar3"
                        titlu={'Acasă'}
                        path1="/Versiune2"></NavBar3>

                <ScrollUpButton></ScrollUpButton>

                <div  className="container-mare-CasetaScris-DespreNoi element1-non-navbar"><div className={elementVizibil ? 'container-mic-CasetaScris-DespreNoi vizibil3' : 'container-mic-CasetaScris-DespreNoi'} ref={myRef}><CasetaScris
                                                                        titlu="De peste 15 ani construim calitatea"
                                                                        continut={<div><p>La început, în 2007, primul nostru proiect rezidențial se remarca prin calitatea oferită clienților, un aspect de la care nu eram dispuși să facem rabat. Am căutat permanent să imbinam profesionalismul în execuție cu soluții inedite, gândite să pună inteligent în practică caracteristici pe care le considerăm esențiale. Am construit fiecare apartament întrebându-ne la fiecare pas dacă noua ne-ar plăcea să locuim acolo. Pentru un dezvoltator imobiliar, la acea vreme, era ceva inedit.</p>
                                                                        <p>15 ani mai târziu, după aproape 2000 de apartamente în cele zece proiecte rezidențiale, ne regăsim animați de același concept. Nimic din scopul nostru, din filosofia care ne animă nu s-a schimbat. Avem emblema calității pusă mai sus ca niciodată. Inovăm continuu în construcțiile noastre. Oferim clienților noștri din ce în ce mai mult. Pentru că 12 ani de experiență, combinați cu pasiunea pentru lucrul bine făcut, cu o permanentă curiozitate pentru noile tehnologii și inteligența aplicată în construcții, toate au ca rezultat o performanță unică în peisajul Brasovului. Știm că se poate, iar munca noastră o dovedește.</p>
                                                                        <p>Succesul însă durează atât cât ești dispus să lupți pentru el. Noul nostru proiect este redefinirea întregii experiențe urbane pentru clienții noștri. Extindem umbrela calității dincolo de apartamente și blocuri. Pentru că viața în oraș nu înseamnă doar viața în apartament. Pentru că realizăm importanța proximității, a facilităților disponibile.</p>
                                                                        <p>Explore Residence va fi mult mai mult decât un nou proiect rezidențial. Va fi modul în care înțelegem noi o viață urbană modernă. Și, ca întotdeauna, nu vom face compromisuri. Vom urca schelele mai sus ca oricine, pentru cel mai înalt proiect rezidențial al Brașovului. O vom face privind la parcul central al proiectului, semnat de marele peisagist al Europei, Gianfranco Paghera. La fluența căilor de acces ale zonei. La facilitățile disponibile, în zonele rezidențiale, comerciale sau de business. Vom privi înainte de toate în noi înșine, cum punem în practică experiența acestor ani, cum construim în Brașov ceva inedit.
                                                                        Noi suntem Explore Residence.</p></div>}></CasetaScris></div>
                </div>
                <div className="container-mare-CasetaScris-DespreNoi"><div className={elementVizibil2 ? 'container-mic-CasetaScris-DespreNoi vizibil3' : 'container-mic-CasetaScris-DespreNoi'} ref={myRef2}><CasetaScris
                                                                        titlu="Locatie Explore Residence"
                                                                        continut={<div><p>Complexul imobiliar Explore Residence se află în sectorul 6, cartierul Militari, București și este situat la doar 5 minute de bulevardul Iuliu Maniu, foarte aproape de Militari Shoping Center.</p>
                                                                        <p>Dezvoltator direct - vindem garsoniere și apartamente de 2 și 3 camere în blocuri P+4E+M, prevăzute cu lift. Apartamentele sunt racordate la utilități și contorizate individual, decomandate, cu bucătărie închisă, având suprafețe generoase.</p>
                                                                        </div>}></CasetaScris></div>
                </div>
                <div className={elementVizibil3 ? 'Container-CasetaDespreNoiInformatii-Imobiliare vizibil3' : 'Container-CasetaDespreNoiInformatii-Imobiliare'} ref={myRef3}>
                    <CasetaDespreNoiInformatii></CasetaDespreNoiInformatii>
                </div>
                
                <div className={elementVizibil4 ? 'Container-DespreNoiDescriere vizibil3' : 'Container-DespreNoiDescriere'} ref={myRef4} >
                    <DespreNoiDescriere></DespreNoiDescriere>
                </div>
                <div className="Container-mare-BaraCountUpAnimation-DespreNoi">
                    <div className="Container-mic-BaraCountUpAnimation-DespreNoi">
                        <BaraCountUpAnimation></BaraCountUpAnimation>
                    </div>
                </div>
                
                <div className="Container-CasetaDespreNoiLarga-Imobiliare">
                    <CasetaDespreNoiLarga></CasetaDespreNoiLarga>
                </div>

                
                
                
            </div>

            <Footer2 className="Footer2"></Footer2>
        </div>
    )
}