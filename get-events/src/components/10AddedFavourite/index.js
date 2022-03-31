import style from "./AddedFavourite.module.css"

import React from 'react'

const AddedToFavouriteDisplay = ({favToAdded}) => {
    return (
        <div className={style.wrapper}>
          We have added { favToAdded } to you favourites list  
        </div>
    )
}

export default AddedToFavouriteDisplay