import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

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
         </div>
        </div>
        <div className="right-h">Right Side</div>
    </div>   
  )
}

export default Hero