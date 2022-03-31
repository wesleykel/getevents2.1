import React from 'react'
import style from "./Title.module.css"
import { Heading } from '@chakra-ui/react'
const Title = () => {
    return (
        <div className={style.home} >
           <Heading as="h1" size="4xl" color="green.500"> Get Events  </Heading>
           <Heading as="h3" size="sm">Powered by Ticketmaster</Heading>
        </div>
    )
}

export default Title