import React from 'react'
import Navbar from "./component/navbar/Navbar"
import Hero from "./component/hero/Hero"
import Card from "./component/card/Card"
import data from "./data"

const App = () => {
  const Duke = data.map(item => {
    return(
      <Card
        key={item.id}
        item ={item}
      />
    )
  })
  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {Duke}
        </section>
    </div>
  )
}

export default App