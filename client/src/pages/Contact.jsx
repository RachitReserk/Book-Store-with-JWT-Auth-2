import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { SlideUp } from '../components/Hero/Hero'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'


const Contact = () => {
  const [info,setInfo] = useState()
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [message,setMessage] = useState()
  const navigate = useNavigate()

  const submit = () => {
    toast('Message sent !')
    navigate('/')
  }
  
  return (
    <div className='bg-yellow-100 lg:h-screen h-auto py-8 px-12 flex items-center justify-center'>
    <form onSubmit={submit} className='bg-yellow-200 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
    <motion.h1
          initial = {{opacity: 0 , rotate: 20 , x:200 , y:100}}
          whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0}}
          transition={{
            duration:0.5,
            delay:0.5,
            scale: {duration: 0.5},
        }}>
    <p className='text-xl'>Contact Us</p>
    <div className='mt-4'>
     <div>
       <label htmlFor='' className=''>
         Email
       </label>
       <input 
       type='email'
       className='w-full mt-2 p-2 outline-none'
       placeholder='email'
       name='email'
       required
       value={email}
       onChange={(e) => setEmail(e.value)}
       ></input>
     </div>
     <div className='mt-4'>
       <label htmlFor=''>
       Name
       </label>
       <input 
       type='text'
       className='w-full mt-2 p-2 outline-none'
       placeholder='name'
       name='name'
       value={name}
       onChange={(e) => setName(e.value)}
       > 
       </input>
     </div>
     <div className='mt-4'>
       <label htmlFor=''>
       Message
       </label>
       <textarea 
       type='text'
       className='w-full h-[30vh] mt-2 p-2 outline-none'
       placeholder='message'
       name='message'
       value={message}
       onChange={(e) => setMessage(e.value)}
       > 
       </textarea>
     </div>
     <div className='mt-4'>
       <button className='transition duration-300 ease-in-out hover:scale-110 w-full bg-yellow-300 font-semibold py-2 rounded' type="submit">SEND</button>
     </div>
    </div>
    </motion.h1>
    </form>
    </div>  
  )
}

export default Contact
