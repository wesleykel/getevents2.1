import React from 'react'
import Navbar from '../components/4Navbar'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Title from '../components/1Title'
import style from "./Favourites.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect , useState } from 'react';
import DisplayCard from '../components/3DisplayCard';


const Favourites = () => {
    
  const [userFavourite ,setUserFavourites] =useState([])
  
    const { user }= useAuth0()  
  
  async  function fetchResults(){

 const  response = await fetch(`https://get-events2-1.herokuapp.com/favourites/new?user=${user.nickname}`)

const data = await response.json()

 setUserFavourites(data)
    }
   
    
useEffect(()=>{

fetchResults()


   },[]) 
    
    
    return (
        <div>
        <Title/>
        <Navbar/>

         <h1 className={style.heading}>Your Favourites</h1> 
              <div className={style.flex}>
         {userFavourite.map((items, index)=>{
           
          return<DisplayCard  key={index} picture={items.image}  text={items.text} link={items.link} /> 
    
         })}
        </div>      </div>
    )
}

export default  withAuthenticationRequired(Favourites, {onRedirecting:()=> <div>Please login</div>})