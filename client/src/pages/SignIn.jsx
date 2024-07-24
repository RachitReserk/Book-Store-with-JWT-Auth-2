import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlideUp } from '../components/Hero/Hero'

const SignIn = () => {
  return (
    <div className='bg-yellow-100 lg:h-screen h-auto py-8 px-12 flex items-center justify-center'>
     <div className='bg-yellow-200 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
     <motion.h1
            variants={SlideUp(0.1)}
            initial = "hidden"
            whileInView = "show" 
            className="">
     <p className='text-xl'>Sign-In</p>
     <div className='mt-4'>
      <div>
        <label htmlFor='' className=''>
          Username
        </label>
        <input 
        type='text'
        className='w-full mt-2 p-2 outline-none'
        placeholder='username'
        name='username'
        required
        ></input>
      </div>
      <div className='mt-4'>
        <label htmlFor=''>
        Password
        </label>
        <input 
        type='password'
        className='w-full mt-2 p-2 outline-none'
        placeholder='password'
        name='password'
        > 
        </input>
      </div>
      <div className='mt-4'>
        <button className='transition duration-300 ease-in-out hover:scale-110 w-full bg-yellow-300 font-semibold py-2 rounded'>Sign-In</button>
      </div>
     </div>
     </motion.h1>
     </div>
     </div>      
  )
}

export default SignIn
