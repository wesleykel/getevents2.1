import React from 'react'
import style from "./SearchBar.module.css"
import { useState } from 'react'
import flyer from "./White Minimalist Music Part Instagram Post.png"
import DisplayCard from '../3DisplayCard'



const Searchbar = () => {
    
const  [location ,setLocation] = useState("London") 
const  [event , setEvent] = useState("Classical")
const  [isActive , setActive] = useState("true")
const [change , setChange] = useState([])

    
    
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



setChange(data._embedded.events)    
setLocation("")
setEvent("")
setActive(false)
 
}

}
console.log(change)


  
async function updateFavs(e){
      
 

fetch(`https://get-events2-1.herokuapp.com/favourites`, {
method: "POST",
headers:{"Content-Type": "application/json"},
body: JSON.stringify({
    link:e.target.dataset.link,
    image:e.target.dataset.image,
   text:e.target.dataset.text,
   index:0

})


}).then(()=>{

  console.log("new fav added")  
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
<div className={style.picContainer}>
        <img  src={flyer}  alt="dancingCrowd" className={isActive ? style.banner:style.noBanner}></img>
     </div>
      <div className={style.grid}>
       {change.map((item,index)=>{
        return <DisplayCard  key={index} valueText={item.name} valueImage={item.images[1].url} valuelink={item.url} other={item.url}  save={updateFavs} link={item.url} text={item.name} picture={item.images[1].url}/>

       })}
       </div>
        </div>
    )
}

export default Searchbar