import React from 'react'
import Hero from '../component/Hero/Hero'
import Movies from '../component/Movies/Movies'



const Home = () => {
  return (
    <div>
        <Hero />
        <Movies title="Latest Film"/>     
    </div>
  )
}

export default Home