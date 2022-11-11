import React from 'react'
import style from "./SearchBar.module.css"
import { useState } from 'react'
//import flyer from "./White Minimalist Music Part Instagram Post.png"
import DisplayCard from '../3DisplayCard'
import { useAuth0 } from "@auth0/auth0-react";
import SearchBarResults from '../6SearchResultsBar'
import AddedToFavouriteDisplay from '../10AddedFavourite'
import { Input } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import festivalPic from "./festival.jpeg"


const Searchbar = () => {

const {user}= useAuth0()  
const  [location ,setLocation] = useState("London") 
const  [event , setEvent] = useState("")
const  [isActive , setActive] = useState("true")
const [change , setChange] = useState([])
const [buttonText, setButtonText]=useState("Add to favourites")
const [displayMessage, setDisplayMessage] =useState("")
const [buttonValue ,setButtonValue] = useState(true)
const [savedMessage ,setSavedMessage] =useState("")

 

    
function getLocation(e){
      
setLocation(e.target.value)

    }
function getEvent(e){
         
setEvent(e.target.value)
        
        
     }


        
const fetchPost = async (e)=>{
 
e.preventDefault()
if(event === "" || location === ""){


   // console.log("please complete form")
}else{
    const response = await fetch (`https://app.ticketmaster.com/discovery/v2/events?city=${location}&keyword=${event}&apikey=${process.env.REACT_APP_APIKEY}`)

  const data = await response.json()
//console.log(data.page.totalElements)
  if(!data.page.totalElements){
setLocation("")
setEvent("")
  setDisplayMessage("No Results Found please  search again")  
return

  }
setChange(data._embedded.events)    

setEvent("")
setActive(false)
 setDisplayMessage(` Results for your search : ${location} & ${event}`)
}

}

//console.log(location)
//console.log(event)



  

async function updateFavs(e){
      
 if(!user){
setButtonText("Please login to save favourites")
    return
 }

fetch(`https://get-events-back1.onrender.com/favourites`, {
method: "POST",
headers:{"Content-Type": "application/json"},
body: JSON.stringify({
    link:e.target.dataset.link,
    image:e.target.dataset.image,
   text:e.target.dataset.text,
 name:user.nickname
  
})


}).then(()=>{
setSavedMessage(e.target.dataset.text)
setButtonValue(false)
setTimeout(() => {  setButtonValue(true); }, 3000)
  //console.log("new fav added")  
return 
})

                }
    
  //console.log(buttonValue)  
    return (
         <div className={style.wrapper}>
         <form className={style.searchForm}>
        
         <label>
City:
        <Input  border="1px" borderColor="green.500" size='sm'  htmlSize={20} width='auto' placeholder='Search for your city'    type="text" onChange={getLocation} value={location} />  
         </label>   

         <label>
Event or Artist:
         <Input  border="1px" borderColor="green.500"   size='sm'  htmlSize={20} width='auto' placeholder='Search for an artist'  type="text" onChange={getEvent} value={event} />  
</label>  

 <Button colorScheme='green' size="md" type='submit'onClick={fetchPost} >Search</Button>






       </form>
<div className={style.searchBarPad}></div>
  {(displayMessage)?<SearchBarResults message={displayMessage}/>:null }
  {(buttonValue === true)?<div className={style.emptyDivPadding}></div> :<AddedToFavouriteDisplay favToAdded={savedMessage}></AddedToFavouriteDisplay> }
<div className={style.picContainer}>
       <img src={festivalPic}  alt="dancingCrowd" id={style.banner} className={isActive? style.banner:style.noBanner}></img>
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