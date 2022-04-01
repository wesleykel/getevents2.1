import React from 'react'
import NewModal from '../9ReactModal'
import style from "./DisplayCard.module.css"
import { Button, ButtonGroup ,Link} from '@chakra-ui/react'
//import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
<div className={style.linkBox}>
<Link href={link} rel="noreferrer" target="_blank" isExternal> Click to purchase tickets
<ExternalLinkIcon mx='2px' />
</Link>
</div>
<div className={style.linkBox}>
{hasUser === true?<NewModal/>:<Button  colorScheme='green' size="md"    data-text={valueText} data-image={valueImage} data-link={valuelink} type='submit' onClick={save}>{buttonText}</Button>}
</div>
</div>
{/*onChange={save} */}

        </div>






        </div>
    )







  

    
    
    
    
    
  
}

export default DisplayCard