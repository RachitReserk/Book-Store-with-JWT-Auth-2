import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from '../BookCard/BookCard'
import {motion} from "framer-motion"
import { SlideUp } from '../Hero/Hero'

const fav = () => {
  const [favbook,setFavbook] = useState()
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`bear ${localStorage.getItem("token")}`
  }
useEffect(() => {
  const fetch = async () => {
  const response = await axios.get('/api/get-fav',{headers})
  setFavbook(response.data.data)
  }
  fetch()
},[])

  return (
    <div className='px-4'>
      <motion.h3
         variants={SlideUp(0)}
         initial = "hidden"
         whileInView= "show"
         className="text-4xl text-center font-league font-semibold uppercase">Favourites</motion.h3>
         <div className='my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
    {favbook && favbook.map((items,i) => (
      <div key={i}>
      <BookCard data={items}></BookCard>
      </div>
    ))}
    </div>
    </div>
  )
}

export default fav
