import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
import hero_image from '../Assets/hero1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Scent up your life.</h2>
            <div>
            <div className='hero-hand-icon'>
                <p>Fragrance </p>
                <img src={hand_icon} alt="" />
            </div>
            <p>speaks louder</p>
            <p>than words</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>

    </div>
  )
}

export default Hero