import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORT
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";


const TestimonialsCarousel = () => {
    return (
        <Carousel>
           <>
            <img src= {avatar1} alt="Testimonial 1"/>
            <div className="myCarousel">

            <h1>Testimonial 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti, delectus ipsam a quia ab itaque quas nobis facere maxime.</p>
            </div>
           </> 
           <>
            <img src= {avatar2} alt="Testimonial 2"/>
            <div className="myCarousel">

            <h1>Testimonial 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti, delectus ipsam a quia ab itaque quas nobis facere maxime.</p>
            </div>
           </> 
           <>
            <img src= {avatar3} alt="Testimonial 3"/>
            <div className="myCarousel">

            <h1>Testimonial 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti, delectus ipsam a quia ab itaque quas nobis facere maxime.</p>
            </div>
           </> 
        </Carousel>
    )
}

export default TestimonialsCarousel
