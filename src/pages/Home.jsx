import React from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import Hero from '../component/Hero/Hero'
import Movies from '../component/Movies/Movies'
import AddMovieForm from '../component/AddMovieForm/AddMovieForm'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Movies />
        <AddMovieForm />
        <Footer />
    </div>
  )
}

export default Home