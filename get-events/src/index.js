import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Auth0Provider} from "@auth0/auth0-react"

import Favourites from './routes/favourites';

ReactDOM.render(
  <BrowserRouter>

  <React.StrictMode>

  <Auth0Provider
    domain="dev-z2ruoaqn.eu.auth0.com"
    clientId="PwhMCppQLrysfIe4XHFlDMkr2BzaOefZ"
    redirectUri={`https://get-events.netlify.app/favourites` }
  >
  <Routes>
   <Route path="/" element={<App />}/>
   

   <Route path="favourites" element={<Favourites/>}/>

 </Routes>
 </Auth0Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
