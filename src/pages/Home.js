import React from 'react'
import '../assets/style.css'
import {Grenada} from '../assets/images/Grenada.jpg'

function Home () {
    return (
        <>
        <div className="homeTop">
           
            <img src={Grenada} className="mainImage">{Grenada}</img>
        </div>
      
            <div className="homeTop">
            <i className="homeTop">
               Back-end developer ensuring the highest quality response to your user requests. <br></br>
               #betterthanyournext</i>
               </div>
        </>
    )
}

export default Home;