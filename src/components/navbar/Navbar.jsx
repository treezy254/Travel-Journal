import React from "react"
import "./navbar.scss"

const Navbar = () => {
  return(
    <div className="nav">
      <img src="./public/images/react-icon-small.png" alt="" className="nav--icon"/>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React course - beginner</h4>
    </div>
  )
}

export default Navbar