import React, { useState , useEffect} from 'react'
import Hero from '../components/Hero/Hero'
import LatestBooks from '../components/Hero/LatestBooks'
import TopSellers from '../components/Hero/TopSellers'
import Banner from '../components/Hero/Banner'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestBooks></LatestBooks>
      <Banner></Banner>
      <TopSellers></TopSellers>
    </div>
  )
}

export default Home
