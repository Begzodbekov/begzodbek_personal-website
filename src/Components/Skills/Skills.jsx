import React from 'react'
import './Skills.scss'
import Html from '../../Assets/Images/html.svg'
import Css from '../../Assets/Images/css.svg'
import Sass from '../../Assets/Images/sass.svg'
import Js from '../../Assets/Images/js.svg'
import Reactimg from '../../Assets/Images/react.svg'
import Bootstrap from '../../Assets/Images/bootstrap-solid 1.png'
import Git from '../../Assets/Images/Git-Icon-1788C 1.png'
import Figma from '../../Assets/Images/figma-1 1.png'
function Skills() {
  return (
    <div className='Skills'>
      <div className="container">
        <div className="skills_inner">
          <h1><span>My</span> Skills</h1>
          <h2 className='skills_using'>USING <span>NOW</span>:</h2>
          <div className="skills_items">
            <div className="skills_block">
              <img src={Html} alt="" />
              <h2>HTML5</h2>
            </div>
            <div className="skills_block">
              <img src={Css} alt="" />
              <h2>CSS3</h2>
            </div>
            <div className="skills_block block3">
              <img src={Sass} alt="" />
              <h2>SASS</h2>
            </div>
            <div className="skills_block">
              <img src={Js} alt="" />
              <h2>JAVASCRIPT</h2>
            </div>
            <div className="skills_block">
              <img src={Reactimg} alt="" />
              <h2>REACT</h2>
            </div>
            <div className="skills_block block6">
              <img src={Bootstrap} alt="" />
              <h2>BOOTSTRAP</h2>
            </div>
            <div className="skills_block block7">
              <img src={Git} alt="" />
              <h2>GIT</h2>
            </div>
            <div className="skills_block block8">
              <img src={Figma} alt="" />
              <h2>FIGMA</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills