import React from 'react'
import style from "./SearchBar.module.css"
import { useState, useEffect } from 'react'
import flyer from "./White Minimalist Music Part Instagram Post.png"
import DisplayCard from '../3DisplayCard'
//import { useNavigate , Redirect } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import SearchBarResults from '../6SearchResultsBar'
//import favourites from '../../routes/favourites'



const Searchbar = () => {

const {user}= useAuth0()  
const  [location ,setLocation] = useState("London") 
const  [event , setEvent] = useState("")
const  [isActive , setActive] = useState("true")
const [change , setChange] = useState([])
const [buttonText, setButtonText]=useState("Add to favourites")
const [displayMessage, setDisplayMessage] =useState("")
//let  navigate = useNavigate()
 
 
    
function getLocation(e){
      
setLocation(e.target.value)

    }
function getEvent(e){
         
setEvent(e.target.value)
        
        
     }


        
const fetchPost = async (e)=>{
 
e.preventDefault()
if(event === "" || location === ""){


    console.log("please complete form")
}else{
    const response = await fetch (`https://app.ticketmaster.com/discovery/v2/events?city=${location}&keyword=${event}&apikey=${process.env.REACT_APP_APIKEY}`)

  const data = await response.json()
console.log(data.page.totalElements)
  if(!data.page.totalElements){
setLocation("")
setEvent("")
  setDisplayMessage("No Results Found please  search again")  
return

  }
setChange(data._embedded.events)    
//setLocation("")
setEvent("")
setActive(false)
 setDisplayMessage(` Results for your search : ${location} and ${event}`)
}

}

console.log(location)
console.log(event)

/*useEffect(()=>{
   fetchPost() 
},[])*/

  

async function updateFavs(e){
      
 if(!user){
setButtonText("Please login to save favourites")
    return
 }

fetch(`https://get-events2-1.herokuapp.com/favourites`, {
method: "POST",
headers:{"Content-Type": "application/json"},
body: JSON.stringify({
    link:e.target.dataset.link,
    image:e.target.dataset.image,
   text:e.target.dataset.text,
 name:user.nickname
  
})


}).then(()=>{
console.log(user.nickname)
  console.log("new fav added")  
return 
})

                }
    
    
    return (
         <div className={style.wrapper}>
         <form className={style.searchForm}>
        
         <label>
Location:
        <input  type="text" onChange={getLocation} value={location} />  
         </label>   

         <label>
Event:
         <input type="text" onChange={getEvent} value={event} />  
</label>  

 <button type='submit'onClick={fetchPost} >Submit</button>







       </form>

      <SearchBarResults message={displayMessage}/> 
<div className={style.picContainer}>
       <img  src={flyer}  alt="dancingCrowd" id={style.banner} className={isActive? style.banner:style.noBanner}></img>
     </div>
      <div className={style.grid}>
       {change.map((item,index)=>{
        return <DisplayCard hasUser={!user} buttonText={buttonText}  key={index} valueText={item.name} valueImage={item.images[1].url} valuelink={item.url} other={item.url}  save={updateFavs} link={item.url} text={item.name} picture={item.images[1].url}/>

       })}
       </div>
        </div>
    )
}

export default Searchbar