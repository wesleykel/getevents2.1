import style from "./navbar.module.css"
//import  { Link } from "react-router-dom"
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Favourites from "../../routes/favourites";



const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    return (
        <div >
        <nav  className={style.wrapper}>
        
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>

   
   </nav>  
        </div>
    )
}

export default Navbar