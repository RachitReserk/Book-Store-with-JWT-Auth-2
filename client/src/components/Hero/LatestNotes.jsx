import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NoteCard from '../NoteCard/NoteCard.jsx'
import {motion} from "framer-motion"
import {SlideUp} from './Hero.jsx'

const baseUrl = '/api/get-recent-notes'

const LatestNotes = () => {
  const [Notes, setNotes] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(baseUrl)
      setNotes(response.data.data)
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
      <div className='my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {Notes && Notes.map((item, i) => (
          <div key={i}>
            <NoteCard data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestNotes
