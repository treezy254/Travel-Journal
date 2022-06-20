import React from 'react'
import Navbar from './components/navbar/Navbar'
import Slide from './components/slide/Slide'
import data from './data'

const App = () => {
  const Place = data.map(item => {
    return (
      <Slide 
        id = {item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section>
        {Place}  
      </section> 
    </div>
  )
}

export default App