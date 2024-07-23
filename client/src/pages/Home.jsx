import React, { useState , useEffect} from 'react'
import Hero from '../components/Hero/Hero'
import LatestBooks from '../components/Hero/LatestBooks'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestBooks></LatestBooks>
    </div>
  )
}

export default Home
