import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "../styles/Services.scss";

const Services = () => {
  return (
    <div className="services">
        <Carousel
        infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}
        >
            <div>
                <img src={img2} alt="" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img3} alt="" />
                <p className='legend'>Peer-to-Peer Support</p>
            </div>
        </Carousel>
    </div>
 
  )
}

export default Services