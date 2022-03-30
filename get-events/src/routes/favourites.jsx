import React from 'react'
import Navbar from '../components/4Navbar'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Title from '../components/1Title'
import style from "./Favourites.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect , useState } from 'react';
import FavDisplayCard from '../components/7FavDisplayCard';


const Favourites = () => {
    
  const [userFavourite ,setUserFavourites] =useState([])
  const [refresh , setRefresh ] = useState("")
    const { user }= useAuth0()  
  
async  function fetchResults(){

const  response = await fetch(`https://get-events2-1.herokuapp.com/favourites/new?user=${user.nickname}`)

const data = await response.json()
//console.log(data[0]._id)
 setUserFavourites(data)
    }
   
    
useEffect(()=>{

fetchResults()

// eslint-disable-next-line react-hooks/exhaustive-deps
   },[refresh]) 

async function deleteFavourite(e){
let deletedUser = e.target.dataset.id
  fetch(`https://get-events2-1.herokuapp.com/favourites/${deletedUser}`, {
method: "DELETE",
headers:{"Content-Type": "application/json"},

  
})

.then(response => response.json());
setUserFavourites(userFavourite.filter(favourite=> favourite._id !== deletedUser))

}
    
    
    return (
        <div>
        <Title/>
        <Navbar/>

         <h1 className={style.heading}>Your Favourites</h1> 
              <div className={style.flex}>
         {userFavourite.map((items, index)=>{
           
          return<FavDisplayCard  key={index} valueId={items._id} picture={items.image}  text={items.text} link={items.link} deleteFav={deleteFavourite} buttonText="Delete" /> 
    
         })}
        </div>      </div>
    )
}

export default  withAuthenticationRequired(Favourites, {onRedirecting:()=> <div>Please login</div>})