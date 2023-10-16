import React from 'react'
import './Hero.scss'
import Background from '../../Assets/Images/Meliuk-liuk.png'
import Background2 from '../../Assets/Images/Meliuk-liuk2.png'
import Background3 from '../../Assets/Images/Meliuk-liuk3.png'
function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
      <img className='hero_background' src={Background2} alt="" />
        <div className="hero_left">
          <h1>-I‘m Umar
            <span>Frontend Developer</span>
          </h1>
          <p>I’m  currently frontend developer in Uzbekistan. I am passionate about working with client and creating wonderful website that
          improve the live of those around me</p>
          <button>
          More about me 
          <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero