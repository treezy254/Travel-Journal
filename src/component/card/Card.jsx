import React from 'react'

const Card = (props) => {
  let badgeText;
  if (props.openSpots == 0){
    badgeText="Sold Out"
  } else if(props.location == "Online"){
    badgeText = "Online"
  }

    return (
      <div className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={props.item.coverImg} alt="" className='card--image'/>
        <div className='card--stats'>
          <img src="../images/star.png" className="card--star" />
          <span>{props.item.stats.rating}</span>
          <span className='gray'>{props.item.stats.reviewCount} • </span>
          <span className='gray'>{props.item.location}</span>
        </div>
        
        <p className='card--title'>{props.item.title}</p>
        <span className='card--price'><span className='bold'>From $</span>{props.item.pricing} / person</span>
      </div>
  )
}

export default Card