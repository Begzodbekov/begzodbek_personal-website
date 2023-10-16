import React from 'react'
import './AboutContent.scss'
import Me from '../../Assets/Images/About-me.png'
import Skills from '../Skills/Skills'
function AboutContent() {
  return (
    <div className='AboutContent'>
          <div className="container">
                <div className="about_inner">
                          <h1 className='about-title'>About <span>Me</span></h1>
                          <div className="about_hero">
                            <div className="about_left">
                              <img className='about_left_me' src={Me} alt="" />
                            </div>
                            <div className="about_right">
                                <p className='about_right_description'>Hi, my full name is <span>Xusanboyev Begzodbek</span>, which was written on my passport. My second name is <span>Umar</span>. My nationality is <span>Uzbek</span>, and I have been living in <span>Andijon</span>, <span>Asaka</span>, since I was born.I love creating a wonderful website, working with friendly clients, and also working on collaboration with other people that help me improve my <span>knowledge</span> and <span>experience</span>.
                                </p>
                                <div className='about_right_items'>
                                  <div className="about_right_block1">
                                    <h1>2</h1>
                                    <span></span>
                                    <p>Months of <br />Experience</p>
                                  </div>
                                  <div className="about_right_block2">
                                    <h1>5+</h1>
                                    <span></span>
                                    <p>Completed <br />Projects</p>
                                  </div>
                                </div>
                             </div>
                          </div>
                </div>
          </div>
    </div>
  )
}

export default AboutContent