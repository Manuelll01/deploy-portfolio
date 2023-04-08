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


import React, {useState, useEffect, useRef} from "react";
import {FaReact, FaHtml5, FaJs, FaCss3} from "react-icons/fa"
import { Link } from "react-router-dom";
import { ScrollUpNavBar } from './components/ScrollUpNavBar/ScrollUpNavBar';
import { CasetaMicaPozaPrezentareWebsite } from './components/CasetaMicaPozaPrezentareWebsite/CasetaMicaPozaPrezentareWebsite';
import { Footer4 } from './components/Footer4/Footer4';
import { Form2 } from './components/Form2/Form2';

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

  
  return(
    <>
    
    <Router basename='/deploy-portfolio'>
    
      <Routes>
        <Route path='/deploy-portfolio' element={<PrimaPagina></PrimaPagina>}></Route>
        <Route path='/Versiune2' element={<WebsiteImobiliare></WebsiteImobiliare>}></Route> 
          <Route path='/Apartamente' element={<Apartamente></Apartamente>}></Route>
          <Route path='/Contacte' element={<Contacte></Contacte>}></Route>
          <Route path='/DespreNoi' element={<DespreNoi></DespreNoi>}></Route>
          <Route path='/Galerie' element={<Galerie></Galerie>}></Route>
        <Route path='/Versiune3' element={<WebsiteRestaurant></WebsiteRestaurant>}></Route>
          <Route path='/cariera.restaurant' element={<Cariera></Cariera>}></Route>
          <Route path='/contact.restaurant' element={<ContactRestaurant></ContactRestaurant>}></Route>
          <Route path='/despreNoi.restaurant' element={<DespreNoiRestaurant></DespreNoiRestaurant>}></Route>
          <Route path='/livrare.restaurant' element={<Livrare></Livrare>}></Route>
          <Route path='/meniu.restaurant' element={<Meniu></Meniu>}></Route>
            <Route path='/meniu.restaurant.bauturi' element={<Bauturi></Bauturi>}></Route>
            <Route path='/meniu.restaurant.burgers' element={<Burgers></Burgers>}></Route>
            <Route path='/meniu.restaurant.deserturi' element={<Deserturi></Deserturi>}></Route>
            <Route path='/meniu.restaurant.pui' element={<Pui></Pui>}></Route>
            <Route path='/meniu.restaurant.sosuri' element={<Sosuri></Sosuri>}></Route>
      </Routes>
    </Router>
    
    
    </>
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


