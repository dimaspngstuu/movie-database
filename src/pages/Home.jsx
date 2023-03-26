import React from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import Hero from '../component/Hero/Hero'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <h2>Halaman home</h2>
        <Footer/>
    </div>
  )
}

export default Home