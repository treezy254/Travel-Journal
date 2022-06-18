import React from 'react'
import Header from '../../components/header/Header'
import { Content } from '../../components/content/Content'
import Footer from '../../components/footer/Footer'
import "./home.scss"

const Home = () => {
  return (
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default Home