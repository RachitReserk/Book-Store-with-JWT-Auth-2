import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from '../BookCard/BookCard'
import {motion} from "framer-motion"
import { SlideUp } from '../Hero/Hero'
import { TbMoodEmpty } from "react-icons/tb"
import Loader from '../spinner'

const fav = () => {
  const [favbook,setFavbook] = useState()
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`bear ${localStorage.getItem("token")}`
  }
  const [size,setSize] = useState()
useEffect(() => {
  const fetch = async () => {
  const response = await axios.get('/api/get-fav',{headers})
  setSize(response.data.data.length)
  setFavbook(response.data.data)
  }
  fetch()
},[])

  if(!favbook)
   return (
   <div className='flex text-7xl h-screen font-league flew-col items-center justify-center'>
    <Loader></Loader>
   </div>
  )

  else if(favbook && size === 0)
  return ( 
    <div>
        <div className='flex text-7xl h-screen font-league flew-col items-center justify-center'>
        <TbMoodEmpty size={90}/>No Favourites? sad
        </div>
    </div>
  )

  else{
    return (
      <div>
      <motion.h3
         variants={SlideUp(0)}
         initial = "hidden"
         whileInView= "show"
         className="text-4xl text-center font-league font-semibold underline uppercase">Favourites</motion.h3>
         <div className='my-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4'>
    {favbook && favbook.map((items,i) => (
      <div key={i}>
      <BookCard data={items}></BookCard>
      </div>
    ))}
     </div>
    </div>
    )
  }
}

export default fav
