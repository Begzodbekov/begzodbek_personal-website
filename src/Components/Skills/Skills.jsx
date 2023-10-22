import React, { useRef, useState } from 'react';
import './Skills.scss'
import Html from '../../Assets/Images/html.svg'
import Css from '../../Assets/Images/css.svg'
import Sass from '../../Assets/Images/sass.svg'
import Js from '../../Assets/Images/js.svg'
import Reactimg from '../../Assets/Images/react.svg'
import Bootstrap from '../../Assets/Images/bootstrap-solid 1.png'
import Git from '../../Assets/Images/Git-Icon-1788C 1.png'
import Figma from '../../Assets/Images/figma-1 1.png'
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css';
function Skills() {
  const [vWidth, setVWidth] = useState(window.innerWidth)

  window.addEventListener('resize', ()=>{
    setVWidth(window.innerWidth)
  })
  return (
    <div className='Skills'>
      <div className="container">
        <div className="skills_inner">
          <h1><span>My</span> Skills</h1>
          <h2 className='skills_using'>USING <span>NOW</span>:</h2>
          <>
          <Swiper
            slidesPerView={vWidth >= 890 ? 4 : 3 && vWidth >= 615 ? 3 : 2 && vWidth >= 390 ? 2 : 1}
            grid={{
              rows: 2,
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Grid,]}
            className="mySwiper"
          >
          <div className="skills_items">
          <SwiperSlide>  
            <div className="skills_block">
              <img src={Html} alt="" />
              <h2>HTML5</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills_block">
              <img src={Css} alt="" />
              <h2>CSS3</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="skills_block block3">
              <img src={Sass} alt="" />
              <h2>SASS</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills_block block4">
              <img src={Js} alt="" />
              <h2>JAVASCRIPT</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills_block">
              <img src={Reactimg} alt="" />
              <h2>REACT</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills_block block6">
              <img src={Bootstrap} alt="" />
              <h2>BOOTSTRAP</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills_block block7">
              <img src={Git} alt="" />
              <h2>GIT</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills_block block8">
              <img src={Figma} alt="" />
              <h2>FIGMA</h2>
            </div>
          </SwiperSlide>
          </div>
          </Swiper>
          </>
        </div>
      </div>
    </div>
  )
}

export default Skills