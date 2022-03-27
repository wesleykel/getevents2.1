import React from 'react'
import style from "./DisplayCard.module.css"



const DisplayCard = ({picture, heading , text , link, save ,valuelink, valueImage,  valueText,add}) => {
    
    





  return ( <div className={style.wrapper} >
        <img className={style.image} alt="event" src={picture}></img> 
        <div className={style.textWrapper}>

<div className={style.heading}>

{heading}
</div>
<div className={style.textGrid}>
<div className={style.text}>

    {text}
</div>
<a href={link} > click to purchase tickets</a>
<button data-text={valueText} data-image={valueImage} data-link={valuelink} type='submit' onClick={save}>Add to Favourites</button>
</div>
{/*onChange={save} */}

        </div>






        </div>
    )







  

    
    
    
    
    
  
}

export default DisplayCard