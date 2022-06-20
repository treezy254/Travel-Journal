import React from 'react'
import "./hero.scss"
// import Doper from "../images/photo-grid.png"

const Hero = () => {
  return (
    <div className='hero'>
      {/* <img src={Doper} alt="" className='hero--photo' /> */}
      <h1 className='hero--header'>Online Experiences</h1>
      <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts-all without living home.</p>
    </div>
  )
}

export default Hero