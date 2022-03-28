import style from "./navbar.module.css"

import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../5UserProfile";




const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    return (
        <div >
    
        <nav  className={style.nav}>
            <UserProfile/>
            <div className={style.wrapper}>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out </button>

   </div>
   </nav>  
        </div>
    )
}

export default Navbar