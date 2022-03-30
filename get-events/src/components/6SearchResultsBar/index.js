import React from 'react'
import style from "./SBR.module.css"
const SearchBarResults = ({message}) => {
    return (
        <div className={style.wrapper}>
        
            <div>{message}</div>
        </div>
    )
}

export default SearchBarResults