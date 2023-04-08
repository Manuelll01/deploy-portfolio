import './App.css';
import { NavBar } from './components/SideBar/SideBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ProductSlider} from './components/ProductSlider(swiper)/ProductSlider';
import {KFCImgSlider} from './components/KFCImgSlider/KFCImgSlider'
import {ProductCard2} from './components/ProductCard2/ProductCard2'
import {contents} from './components/ProductCard2/content'
import {NavBar2} from './components/NavBar2/NavBar2'
import { PrimaPagina } from './websiteuri/primapagina/primapagina';
import { WebsiteImobiliare } from './websiteuri/websiteImobiliare/imobiliare';
import { WebsiteRestaurant } from './websiteuri/websiteRestaurant/restaurant';
import {ProductCard} from './components/ProductCard/productCard'
import {ProductCard1Data} from './components/ProductCard/productCardData'
import { Apartamente } from './websiteuri/websiteImobiliare/Apartamente/Apartamente';
import { Contacte } from './websiteuri/websiteImobiliare/Contacte/Contacte';
import { DespreNoi } from './websiteuri/websiteImobiliare/DespreNoi/DespreNoi';
import { Finisaje, Galerie} from './websiteuri/websiteImobiliare/Galerie/Galerie';
import { Cariera } from './websiteuri/websiteRestaurant/Cariera/Cariera';
import { ContactRestaurant } from './websiteuri/websiteRestaurant/Contact/Contact';
import { Meniu } from './websiteuri/websiteRestaurant/Meniu/Meniu';
import { Livrare } from './websiteuri/websiteRestaurant/Livrare/Livrare';
import { DespreNoiRestaurant } from './websiteuri/websiteRestaurant/DespreNoiRestaurant/DespreNoiRestaurant';
import { Bauturi } from './websiteuri/websiteRestaurant/Meniu/Bauturi/Bauturi';
import { Burgers } from './websiteuri/websiteRestaurant/Meniu/Burgers/Burgers';
import { Deserturi } from './websiteuri/websiteRestaurant/Meniu/Deserturi/Deserturi';
import { Pui } from './websiteuri/websiteRestaurant/Meniu/Pui/Pui';
import { Sosuri } from './websiteuri/websiteRestaurant/Meniu/Sosuri/Sosuri';
import "./primapagina.css";
import {FaReact, FaHtml5, FaJs, FaCss3} from "react-icons/fa"
import { SideBarSlide } from "../../components/SideBarSlide/SideBarSlide";
import { DespreMine } from "./DespreMinePrimaPagina/DespreMinePrimaPagina";
import { Contacteazama } from "./Contacteazama/Contacteazama";
import { ScrollUpNavBar } from "../../components/ScrollUpNavBar/ScrollUpNavBar";
import { CasetaMicaPozaPrezentareWebsite } from "../../components/CasetaMicaPozaPrezentareWebsite/CasetaMicaPozaPrezentareWebsite";
import { Link } from "react-router-dom";
import { Footer4 } from "../../components/Footer4/Footer4";
import { Form2 } from "../../components/Form2/Form2";

/*import img1 from '/.imagini/pui_prajit_1.jpg'*/

function App() {
  return (
    <>
      <Router>
      <NavBar>
        <Routes>
          <Route path='/a'></Route>
        </Routes>
      </NavBar>
      </Router>
    </>
  );
}

export const Aplicatie2 = () => {
  return(
    <ProductSlider></ProductSlider>
  )
}

export const Aplicatie3 = () => {
  return(
    <div className='App3'>
    <KFCImgSlider>
    <img src="img/pui_prajit_1.jpg" alt='prima imagine' style={{width: "100%", height: "100%"}}></img>
    <img src="img/pui_prajit_2.jpg" alt='prima imagine' style={{width: "100%", height: "100%"}}></img>
    <img src="img/pui_prajit_3.jpg" alt='prima imagine' style={{width: "100%", height: "100%"}}></img>
    </KFCImgSlider>
    </div>
  )
}

export const Aplicatie4 = () => {
  return(
    <div>
      <>
      <Router>
      <NavBar2>
      </NavBar2>

      <Routes>
          
          <Route path='/Versiune1' element={<Aplicatie4></Aplicatie4>}></Route>
          <Route path='/Versiune2' element={<Aplicatie4></Aplicatie4>}></Route> 
          <Route path='/Versiune3' element={<h1> VERSIUNE 3</h1>}></Route>
          <Route path='/Versiune4' element={<h1> VERSIUNE 4</h1>}></Route>
        </Routes>
      </Router>
    </>
    </div>
  )
}

export const Aplicatie5 = () =>{
  const [variabilaNeschimbata, setVariabilaNeschimbata] = useState()
    const boxRefA = useRef();
    const boxRefB = useRef();
    const boxRefC = useRef();
    const boxRefD = useRef();
    const [a, setA] = useState()
    const [b, setB] = useState()
    const [c, setC] = useState()
    const [d, setD] = useState()
    const getPosition = () => {
        const a = boxRefA.current.offsetTop
        const b = boxRefB.current.offsetTop
        const c = boxRefC.current.offsetTop
        const d = boxRefD.current.offsetTop
        setA(a)
        setB(b)
        setC(c)
        setD(d)
    }

    useEffect(() => {
        getPosition();
      }, []);

    useEffect(() => {
        window.addEventListener("resize", getPosition);
      }, []);



      const ScrollToElement = (element) => {
        
        window.scrollTo({
            top: element,
            behavior: "smooth"
        })}

    
      useEffect(() => {
        const ScrollUpPage = () => {
            window.scrollTo(0, 0)
        }
        ScrollUpPage()
    }, [variabilaNeschimbata])
  return(
    <div className="prima-pagina">
        <ScrollUpNavBar a={a} b={b} c={c} d={d}></ScrollUpNavBar>
        <div className="Container-caseta-acasa" ref={boxRefA}>
            <div className="caseta-acasa-mare-grid">
                <div  className="caseta-acasa-scris">
                    <h2>Entry Level Front End Developer</h2>
                    <p >descriere cuvinte multe si plus si mai multe cuvinte foarte foarte multe foarte foarte foarte multe descriere cuvinte multe si plus si mai multe cuvinte foarte foarte multe foarte foarte multe foarte foarte multe foarte foarte multe</p>
                    <div className="container-butoane-prima-pagina">
                        <div className="buton-1-prima-pagina">
                            <Link onClick={() =>{ScrollToElement(d)}} to='/'>Contact me</Link>
                        </div>
                        <div className="buton-2-prima-pagina">
                            <Link onClick={() =>{ScrollToElement(b)}} to='/'>Projects</Link>
                        </div>
                    </div>
                    <div className="container-iconite-caseta">{/*asta cu siguranta nu o sa fie pusa aici*/}
                        <div className="iconita-1" title="HTML">
                            <FaHtml5></FaHtml5>
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
                <div className="caseta-acasa-img">
                    <div className="container-mic-poza-acasa">
                        <img src="./img/poza_fara_background1.png"></img>
                        <div class="custom-shape-divider-bottom-1679011994">
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
        <div className="Container-Proiecte" >
            <div className="curve layer1"></div>
            <h1 ref={boxRefB}>Projects</h1>
            <div className="Container-Mic-Proiecte">
                <div className="Proiecte">
                    <div className="CasetaMica">
                        <CasetaMicaPozaPrezentareWebsite
                        descriere='Websiteul unei companii fictive de Fast Food'
                        img='./img/interior-restaurant-4.jpg'
                        to='/Versiune3'></CasetaMicaPozaPrezentareWebsite>
                    </div>
                    <div className="CasetaMica">
                        <CasetaMicaPozaPrezentareWebsite
                        descriere='Websiteul unei companii fictive de dezvoltare imobiliară'
                        img='./img/bloc2.jpg'
                        to='/Versiune2'></CasetaMicaPozaPrezentareWebsite>
                    </div>
                </div>
            </div>
            <div className="curve layer2"></div>
        </div>
        <div className="Container-DespreMinePrimaPagina" ref={boxRefC}>
            <h2>Despre Mine</h2>
        </div>
        <div className="Container-ContactPrimaPagina" >
            <div className="curve layer1"></div>
            <h1 ref={boxRefD}>Contact</h1>
            <div className="Container-interior-Contact">
                <Form2></Form2>
                <div className="Container-cutie-contact">
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
            <div className="curve layer2"></div>
        </div>
            
            {/*
                <SideBarSlide
                Acasa = {<AcasaPrimaPagina></AcasaPrimaPagina>}
                Proiecte = {<Proiecte></Proiecte>}
                DespreMine = {<DespreMine></DespreMine>}
                Contacteazama = {<Contacteazama></Contacteazama>}></SideBarSlide>
    */}
    <Footer4 a={a} b={b} c={c} d={d}></Footer4>
    </div>
  )
}




export const Aplicatie100 = () => {
  return(
    <div className='App'>
      {contents.map(contents => (
        <ProductCard2 key={contents.id}
                     image={contents.image}
                     name={contents.name}
                     timeLeft={contents.timeLeft}
                     price={contents.price}
                     rating={contents.rating}
                     totalSales={contents.totalSales}
                     img={contents.img}></ProductCard2>
      ))}
    </div>
  )
}

export const ProductCard1App = () => {
  return(
    <div className='product-card-1-app'>
      {ProductCard1Data.map(element => (
        <ProductCard pretVechi={element.pretVechi}
                    pretNou={element.pretNou}
                    src={element.src}
                    titlu={element.titlu}
                    
        ></ProductCard>
      ))}
    </div>
  )
}


export default App;



