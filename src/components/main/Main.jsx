import React from 'react'
import "./main.scss"

const Main = () => {
  return (
    <div className='main'>
        <h1 className="main--title">Fun Facts about React</h1>
        <ul className="main--facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of Enterprise Apps, including Mobile apps.</li>
        </ul>
    </div>
  )
}

export default Main