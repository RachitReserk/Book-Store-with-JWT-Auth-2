import React, { useEffect, useState } from 'react'
import{ motion } from 'framer-motion';
import axios from 'axios';
import { SlideUp } from './Hero';
import { Link } from 'react-router-dom';

const MostLiked = () => {
    const [Notes,setNotes] = useState([])

    useEffect(() => {
    const fetch = async () => {
    const Notes = await axios.get('/api/get-top-notes')
    setNotes(Notes.data.data)
    }
    fetch()
    },[])

  return (
<section>
      <div className="container py-24">
          <motion.h3 
          variants={SlideUp(0.5)}
          initial = "hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-semibold uppercase py-8">Our MOST LOVED !</motion.h3>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
           {
            Notes.map((item,i) => {
                return (
                    <div key={i} className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">
                         <img src= {item.url[0]} alt="" className="w-60 mx-auto img-shadow group-hover:scale-110 transition-all duration-800" />
                         <Link to={`/note-details/${item._id}`}>
                        <button className="mt-8 btn-primary opacity-0 group-hover:opacity-100">
                           Buy Now 
                        </button>
                        </Link>
                        <p className="text-xl font-semibold">{item.title}</p>
                        <p className="text-xl text-red-600">₹{item.price}</p>
                        </div>
                )
            }
        )
           }
          </div>
      </div>
    </section>
  )
}

export default MostLiked
