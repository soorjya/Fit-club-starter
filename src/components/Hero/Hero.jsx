import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
            <div></div>
            <span>the best fitness club around</span>
         </div>
         {/*Hero heading */}
         <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
          <span>
          In here we will help you to shape and build your ideal body and live up your life to fullest
          </span>
          </div>
         </div>

         {/* figures */}
         <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
            </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
         </div>

         {/* hero buttons*/}
         <div className="hero-buttons">
          <buttons className="btn">Get Startred</buttons>
          <buttons className="btn">Learn More</buttons>
         </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join now</button>


          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
          </div>
        </div>
    </div>   
  )
}

export default Hero