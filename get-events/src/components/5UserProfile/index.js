import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import style from "./userProfile.module.css"

const UserProfile = () => {
   
    const {user, isAuthenticated, isLoading}= useAuth0()
    if(isLoading){

        return<div>Press Log in to continue</div>
    }
    //console.log(user)
    return (
        isAuthenticated &&(

        
        <div className={style.wrapper}>
        <img src={user.picture} alt={user.name} />
        <p className={style.loggedInText}>Logged in as:{user.name}</p>

        </div>
     ) )
}

export default UserProfile