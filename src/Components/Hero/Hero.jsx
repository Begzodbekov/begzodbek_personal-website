import React from 'react'
import './Hero.scss'

import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
      <div className="hero_inner">
        <div className="hero_left">
           <div className='hero_social'>
             <i class="bi bi-facebook"></i>
             <i class="bi bi-twitter"></i>
             <i class="bi bi-instagram"></i>
             <i class="bi bi-github"></i>
             <i class="bi bi-telegram"></i>
           </div>
            <div>
            <h1 className='hero_left_name'>-I‘m Umar <br />
              <span>Frontend Developer</span>
            </h1>
            <p className='hero_left_definintion'>I’m  currently frontend developer in Uzbekistan. I am passionate about working with client and creating wonderful website that
            improve the live of those around me</p>
            <Link to='/about'>
              <button  className='hero_left_button'>
              More about me 
              <i class="bi bi-arrow-right bi_right"></i>
              </button>
            </Link>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero