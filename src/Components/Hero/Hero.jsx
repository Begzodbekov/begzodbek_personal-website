import React from 'react'
import './Hero.scss'
import { Link } from 'react-router-dom'
// import Man from '../../Assets/Images/'
import Man from '../../Assets/Images/hero_me.svg'
function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
      <div className="hero_inner">
        <div className="hero_left">
           <div className='hero_social'>
             <a href="">
              <i class="bi bi-facebook"></i>
             </a>
             <a href="">
              <i class="bi bi-twitter"></i>
             </a>
             <a href="">
              <i class="bi bi-instagram"></i>
             </a>
             <a href="https://github.com/Begzodbekov">
              <i class="bi bi-github"></i>
             </a>
             <a href='https://t.me/Umar_0212'>
              <i class="bi bi-telegram"></i>
             </a>
           </div>
           <div className='hero_left_bottom'>
              <h1 className='hero_left_name'>I‘m Umar <br />
                <span className='hero_left_span' data-text="Frontend Developer">Frontend Developer</span>
              </h1>
              <p className='hero_left_definintion'>I’m  currently frontend developer in Uzbekistan. I am passionate about working with clients and creating wonderful website that
              improve the live of those around me</p>
              <Link to='/about'>
                <button  className='hero_left_button'>
                More about me 
                <i class="bi bi-arrow-right bi_right"></i>
                </button>
              </Link>
           </div>
          </div>
          <div className="hero_right">
            <img src={Man} alt="" />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero