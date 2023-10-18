import React from 'react'
import './PortfolioContent.scss'
import Project1 from '../../Assets/Images/project1.jpg'
import Project2 from '../../Assets/Images/project2.jpg'
import Project3 from '../../Assets/Images/project3.jpg'
import Project4 from '../../Assets/Images/project4.jpg'
function PortfolioContent() {
  return (
    <div className='PortfolioContent'>
      <div className="container">
        <div className="portfolio_inner">
          <h1 className='portfolio_title'><span>My</span> Portfolio</h1>
          <div className='portfolio_hero'>
            <div className='portfolio_items'>
              <a href="">
                <img src={Project1} alt="" />
              </a>
            </div>
            <div className='portfolio_items'>
              <a href="">
                <img src={Project2} alt="" />
              </a>
            </div>
            <div className='portfolio_items'>
              <a href="">
                <img src={Project3} alt="" />
              </a>
            </div>
            <div className='portfolio_items'>
              <a href="">
                <img src={Project4} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioContent