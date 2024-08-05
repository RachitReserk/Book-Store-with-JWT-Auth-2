import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NoteCard from '../components/NoteCard/NoteCard.jsx'
import {motion} from "framer-motion"
import {SlideUp} from '../components/Hero/Hero.jsx'
import Loader from '../components/spinner.jsx'

const baseUrl = '/api/get-all-notes'
const Store = () => {
  const [Notes, setNotes] = useState([])
  const [size , setSize] = useState(0)
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(baseUrl)
      setNotes(response.data.data)
      setSize(response.data.data.length)
    }
    fetch()
  }, [])
  
  if(size===0)
    return(
    <div className='h-screen flex items-center justify-center'>
  <Loader></Loader>
  </div>
    )
  else 
  return (
    <div className='mt-8 px-4'>
    <motion.h3
       variants={SlideUp(0)}
       initial = "hidden"
       whileInView= "show"
       className="text-4xl text-center font-league font-semibold underline uppercase py-8">STORE</motion.h3>
    <div className='my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {Notes.map((item, i) => (
        <div key={i}>
          <NoteCard data={item} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Store
