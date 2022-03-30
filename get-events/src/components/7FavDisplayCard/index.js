import React from 'react'
import style from "./FavDisplayCard.module.css"



const FavDisplayCard = ({picture, heading , text , link, deleteFav ,valuelink, valueImage,  valueText,buttonText, valueId}) => {
    
    





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
<a href={link} rel="noreferrer" target="_blank" > click to purchase tickets</a>
<button data-id={valueId} data-text={valueText} data-image={valueImage} data-link={valuelink} type='submit' onClick={deleteFav}>{buttonText}</button>
</div>
{/*onChange={save} */}

        </div>






        </div>
    )







  

    
    
    
    
    
  
}

export default FavDisplayCard