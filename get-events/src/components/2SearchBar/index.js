import React from 'react'
import style from "./SearchBar.module.css"
import { useState , useEffect} from 'react'
import flyer from "./White Minimalist Music Part Instagram Post.png"
import DisplayCard from '../3DisplayCard'


const backEndURL = process.env.REACT_APP_BACKENDURL

const Searchbar = () => {
    
const  [location ,setLocation] = useState("") 
const  [event , setEvent] = useState("")
const  [isActive , setActive] = useState("true")
const [change , setChange] = useState([])
//const [favList, setFavList] = useState([])
//const [favObject, setFavObj] = useState({link:"",image:"" })
//const [emptyArray, SetemptyArray] = useState([])
const [favLink , setFavLink] = useState("")
const [favText , setFavText] = useState("")
const [favImage , setFavImage] = useState("")

  
      // console.log(process.env.REACT_APP_APIKEY) 
    
    
    function getLocation(e){
        e.preventDefault()

setLocation(e.target.value)



    }
    function getEvent(e){
        e.preventDefault()
setEvent(e.target.value)
        
        
            }



            

    
    function submitInfo(e){
        e.preventDefault()
if(event === "" || location === ""){


    console.log("please complete form")
}else{

        console.log(event)
        console.log(location)
  //setChange(event)

  

 fetchPost()
  setEvent("")
 setLocation("")
 if(change.length > 0 ){
    setActive(false) 




  }
  


  console.log( change)


 

       

}



    } 

  /*async function addToFavs(e){
       // e.preventDefault()
        

        /*console.log(e.target.dataset.text)
        console.log(e.target.dataset.image)
        console.log(e.target.dataset.link) */
       
        //setFavList([...favList , favObject])
        //SetemptyArray([...emptyArray ,favObject])
      
     
                


       async function updateFavs(e){
    setFavText(e.target.dataset.text) 
    setFavImage(e.target.dataset.image)
    setFavLink(e.target.dataset.link)
const newFavourite = { favImage, favLink, favText}

fetch(`https://get-events2-1.herokuapp.com/favourites`, {
method: "POST",
headers:{"Content-Type": "application/json"},
body: JSON.stringify(newFavourite)


}).then(()=>{

  console.log("new fav added")  
})
                }


//console.log(favText)
/*useEffect(()=>{

addToFavs()

 // eslint-disable-next-line react-hooks/exhaustive-deps
},[favObject])*/

  

    
        


   
        //console.log(favList)

        
  

    const fetchPost = async ()=>{

        const response = await fetch (`https://app.ticketmaster.com/discovery/v2/events?city=${location}&keyword=${event}&apikey=${process.env.REACT_APP_APIKEY}`)
        const data = await response.json()



     setChange(data._embedded.events)    
        

    }

useEffect(()=>{
if(event === ""){

    return
}else{

    fetchPost()

}


    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[event])


console.log(change)



   

   
    
    
    
    
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

 <button type='submit'onClick={submitInfo} >Submit</button>







        </form>
<div className={style.picContainer}>
        <img  src={flyer}  alt="dancingCrowd" className={isActive ? style.banner:style.noBanner}></img>
     </div>
      <div className={style.grid}>
       {change.map((item)=>{
        return <DisplayCard valueText={item.name} valueImage={item.images[1].url} valuelink={item.url} other={item.url}  save={updateFavs} link={item.url} text={item.name} picture={item.images[1].url}/>

       })}
       </div>
        </div>
    )
}

export default Searchbar