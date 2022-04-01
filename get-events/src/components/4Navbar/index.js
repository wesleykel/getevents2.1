import style from "./navbar.module.css"
import { Link as ReachLink } from "react-router-dom"
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../5UserProfile";
import { Button, ButtonGroup } from '@chakra-ui/react'

//import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {user}= useAuth0()
    return (
        <div >
    
        <nav  className={style.nav}>
          
            
            <div className={style.wrapper}>
            <div className={style.wrapper2}>
            
  <UserProfile/>
  </div>
  <div className={style.wrapper3}>
        <Link as={ReachLink} color='green.500' className={style.home} to="/">Home</Link>  
        <Link as={ReachLink}  color='green.500'  className={style.home}  to="/favourites"> Your Favourites</Link>
       {!user === true ? <Button marginRight="2" colorScheme='green' size="md" onClick={() => loginWithRedirect()}>Log In / Sign Up</Button> : <Button marginRight="2" colorScheme='green' size="md" onClick={() => logout({ returnTo: window.location.origin })}>Log Out </Button>}
   </div>

   </div>
   </nav>  
        </div>
    )
}

export default Navbar