import Joke from "./component/Joke";
import JokesData from "./JokesData"
import React from 'react'

const Joker = JokesData.map(item => {
  return (
    <Joke setup={item.setup} punchline={item.punchline} />
  )
})

export default Joker;
