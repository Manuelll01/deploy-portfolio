import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { Aplicatie5 } from './App';
import { Aplicatie2 } from './App';
import { Aplicatie3 } from './App';
import { Aplicatie100 } from './App';
import { Aplicatie4 } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aplicatie5></Aplicatie5>
    {/* <App />*/}
    {/*<Aplicatie2></Aplicatie2>
    <Aplicatie3></Aplicatie3>*/}
    {/*navbar-ul asta o sa vina intr-un link in "Acasa" pt ca vreau sa dispara, 
    pentru a face loc la alte navbar-uri cand intru pe unul dintre cele 3 website-uri
    iar toate webisteurile o sa aiba un buton de acasa exact cu acelasi link catre pagina principala  */}


    
  </React.StrictMode>
);
