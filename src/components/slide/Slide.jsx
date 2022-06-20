import React from 'react'
import "./slide.scss"

const Slide = (props) => {
  return (
    <div className='place'>
        <img src={`../images/${props.img}` }alt="" className='place--img' /> 
        <span className='place--cty'>{props.country}</span><a href='' className='place--link'>{props.link}</a>
        <h1 className='place--title'>{props.name}</h1>
        <span className='place--prd'>{props.period}</span>
        <p className='place--desc'>{props.description}</p>
        
    </div>
  )
}

export default Slide