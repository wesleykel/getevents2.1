import React from 'react'
import Navbar from '../components/4Navbar'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const Favourites = () => {
    return (
        <div>
        <Navbar/>
           <h1>This is Favourites</h1> 
        </div>
    )
}

export default  withAuthenticationRequired(Favourites, {onRedirecting:()=> <div>Please login</div>})