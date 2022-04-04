
import style from "./FavDisplayCard.module.css"
import {TwitterShareButton} from "react-twitter-embed"
import { Button , Link} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
<div className={style.linkBox}  >
<Link href={link} rel="noreferrer" target="_blank" > click to purchase tickets
<ExternalLinkIcon mx='2px' />
</Link>
</div>
<div className={style.linkBox}>
<Button colorScheme="red" size="md" data-id={valueId} data-text={valueText} data-image={valueImage} data-link={valuelink} type='submit' onClick={deleteFav}>{buttonText}</Button>
</div>
<div className={style.linkBox}  >
<TwitterShareButton
    url={link}
    options={{ text: `Check out the ${text} event I found on Get Events` , via: 'https://get-events.netlify.app' }}
  />
</div>
</div>
{/*onChange={save} */}

        </div>






        </div>
    )







  

    
    
    
    
    
  
}

export default FavDisplayCard