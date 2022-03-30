import React from 'react'
import NewModal from '../9ReactModal'
import style from "./DisplayCard.module.css"



const DisplayCard = ({picture, heading , text , link, save ,valuelink, valueImage,  valueText,buttonText, hasUser}) => {
    
    





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
{hasUser === true?<NewModal/>:<button data-text={valueText} data-image={valueImage} data-link={valuelink} type='submit' onClick={save}>{buttonText}</button>}
</div>
{/*onChange={save} */}

        </div>






        </div>
    )







  

    
    
    
    
    
  
}

export default DisplayCard