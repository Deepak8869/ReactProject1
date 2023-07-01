import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
    <div>
        <h1>Techystar</h1>
        <p>@all right reserved</p>
    </div>
    <div className='follow'>
        <h5>Follow us</h5>
        <div>
            <a href="https://www.youtube.com/@FactsForward" target= {"blank"}><AiFillYoutube /></a>
            <a href="/" target= {"blank"}><AiFillInstagram /></a>
            <a href="https://github.com/Deepak8869" target={"blank"} ><AiFillGithub /></a>

        </div>
    </div>
   </footer>
  )
}

export default Footer