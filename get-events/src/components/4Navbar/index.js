import style from "./navbar.module.css"
import { Link } from "react-router-dom"
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../5UserProfile";




const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {user}= useAuth0()
    return (
        <div >
    
        <nav  className={style.nav}>
            <UserProfile/>
            <div className={style.wrapper}>

        <Link to="/">Home</Link>  
        <Link to="/favourites"> Your Favourites</Link>
       {!user === true ? <button onClick={() => loginWithRedirect()}>Log In</button> : <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out </button>}
   

   </div>
   </nav>  
        </div>
    )
}

export default Navbar