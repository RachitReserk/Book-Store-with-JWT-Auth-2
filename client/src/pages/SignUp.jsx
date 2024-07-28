import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlideUp } from '../components/Hero/Hero'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [userInfo,setuserInfo] = useState({
    username:"",
    email:"",
    password:"",
    address:""})
    const navigate = useNavigate()
  const change = (event) => {
    const {name , value} = event.target
    setuserInfo({...userInfo,[name]:value})
  }
  const submit = async (e) => {
    e.preventDefault();
  try {
    if(userInfo.username === '' || userInfo.password === '' || userInfo.email === '' || userInfo.address === '')
      toast("All fields are required")
    else{
    const response = await axios.post('/api/sign-up',userInfo)
    navigate('/signin')
    toast("✅ Sign-Up successful")
  }
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className='bg-yellow-100 lg:h-screen h-auto py-8 px-12 flex items-center justify-center'>
     <form onSubmit={submit} className='bg-yellow-200 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
     <motion.h1
            variants={SlideUp(0.1)}
            initial = "hidden"
            whileInView = "show" 
            className="">
     <p className='text-xl'>Sign-Up</p>
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
        value={userInfo.username}
        onChange={change}
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
        value={userInfo.password}
        onChange={change}
        > 
        </input>
      </div>
      <div className='mt-4'>
        <label htmlFor=''>
        Email
        </label>
        <input 
        type='text'
        className='w-full mt-2 p-2 outline-none'
        placeholder='asd@gmail.com'
        name='email'
        value={userInfo.email}
        onChange={change}
        > 
        </input>
      </div>
      <div className='mt-4'>
        <label htmlFor=''>
          Address
        </label>
        <textarea
        className='w-full mt-2 p-2 outline-none'
        rows="5"
        placeholder='address'
        name='address'
        value={userInfo.address}
        onChange={change}
        required></textarea>
      </div>
      <div className='mt-4'>
        <button type="submit" className='transition duration-300 ease-in-out hover:scale-110 w-full bg-yellow-300 font-semibold py-2 rounded'>
          Sign-Up</button>
      </div>
     </div>
     </motion.h1>
     </form>
     </div>   
  )
}

export default SignUp
