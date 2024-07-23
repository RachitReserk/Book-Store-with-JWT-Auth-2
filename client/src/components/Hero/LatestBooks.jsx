import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from '../BookCard/BookCard.jsx'
import {motion} from "framer-motion"
import {SlideUp} from './Hero.jsx'
const baseUrl = '/api/get-recent-books'

const LatestBooks = () => {
  const [Book, setBook] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(baseUrl)
      setBook(response.data.data)
    }
    fetch()
  }, [])

  return (
    <div className='mt-8 px-4'>
      <motion.h3
         variants={SlideUp(0)}
         initial = "hidden"
         whileInView= "show"
         className="text-4xl text-center font-league font-semibold uppercase py-8">Recently Added</motion.h3>
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {Book.map((item, i) => (
          <div key={i}>
            <BookCard data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestBooks
