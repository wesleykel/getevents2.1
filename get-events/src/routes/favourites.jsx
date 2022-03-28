import React from 'react'
import Navbar from '../components/4Navbar'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import UserProfile from '../components/5UserProfile'

const Favourites = () => {
    return (
        <div>
        <Navbar/>
        <UserProfile/>
           <h1>This is Favourites</h1> 
        </div>
    )
}

export default  withAuthenticationRequired(Favourites, {onRedirecting:()=> <div>Please login</div>})