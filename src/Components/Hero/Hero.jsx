import React from 'react'
import './Hero.scss'
import Background from '../../Assets/Images/Meliuk-liuk.png'
import Background2 from '../../Assets/Images/Meliuk-liuk2.png'
import Background3 from '../../Assets/Images/Meliuk-liuk3.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
      {/* <img className='hero_background' src={Background2} alt="" /> */}
      <div className="hero_inner">
        <div className="hero_left">
            <h1 className='hero_left_name'>-I‘m Umar <br />
              <span>Frontend Developer</span>
            </h1>
            <p className='hero_left_definintion'>I’m  currently frontend developer in Uzbekistan. I am passionate about working with client and creating wonderful website that
            improve the live of those around me</p>
            <button  className='hero_left_button'>
            <Link to='/about'>More about me </Link>
            <i class="bi bi-arrow-right bi_right"></i>
            </button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero