import React from 'react'
import './PortfolioContent.scss'
import Project1 from '../../Assets/Images/project1.jpg'
import Project2 from '../../Assets/Images/project2.jpg'
import Project3 from '../../Assets/Images/project3.jpg'
import Project4 from '../../Assets/Images/project4.jpg'
import Project5 from '../../Assets/Images/project5.jpg'
import Project6 from '../../Assets/Images/project6.jpg'
function PortfolioContent() {
  return (
    <div className='PortfolioContent'>
      <div className="container">
        <div className="portfolio_inner">
          <h1 className='portfolio_title'><span>My</span> Portfolio</h1>
          <div className='portfolio_hero'>
            <div className='portfolio_items'>
                <img src={Project1} alt="" />
                <div className='itema1'>
                  <div className='portfolio_view'>
                    <a href='https://f3-badiat-proyekt.vercel.app/' className='portfolio_see'>See website</a>
                  </div>
                </div>
            </div>
            <div className='portfolio_items'>
                <img src={Project2} alt="" />
                <div className='itema1'>
                  <div className='portfolio_view'>
                    <a href='https://f3-team-project3.vercel.app/' className='portfolio_see'>See website</a>
                  </div>
                </div>
            </div>
            <div className='portfolio_items'>
                <img src={Project3} alt="" />
                <div className='itema1'>
                  <div className='portfolio_view'>
                    <a href='https://moviebox-website.vercel.app/' className='portfolio_see'>See website</a>
                  </div>
                </div>
            </div>
            <div className='portfolio_items'>
                <img src={Project4} alt="" />
                <div className='itema1'>
                  <div className='portfolio_view'>
                    <a href='https://my-projects-mu-lac.vercel.app/' className='portfolio_see'>See website</a>
                  </div>
                </div>
            </div>
            <div className='portfolio_items'>
                <img src={Project5} alt="" />
                <div className='itema1'>
                  <div className='portfolio_view'>
                    <a href='https://portfolio-projects-cards.vercel.app/' className='portfolio_see'>See website</a>
                  </div>
                </div>
            </div>
            <div className='portfolio_items'>
                <img src={Project6} alt="" />
                <div className='itema1'>
                  <div className='portfolio_view'>
                    <a href='https://portifolio-first-project.vercel.app/' className='portfolio_see'>See website</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioContent