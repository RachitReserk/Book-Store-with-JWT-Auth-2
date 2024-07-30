import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { GrLanguage } from "react-icons/gr"
import Spinner from '../spinner.jsx'
import Heart from "react-animated-heart";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { Tooltip } from 'react-tooltip'

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
};

const BookDetails = () => {
    const [isClick, setClick] = useState(false);
    const id = useParams()
    const [Book, setBook] = useState()
    const baseUrl = `/api/get-book/${id.id}`

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const role = useSelector((state) => state.auth.role)
    console.log(role)

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(baseUrl)
      setBook(response.data.data)
    }
    fetch()
  }, [])
    
  return (
    <>
    {Book && (
        <div className='px-12 py-8 flex md:flex-row flex-col  gap-8'>
        <div className='bg-yellow-100 rounded-2xl p-4 h-[80vh] lg:h-[88vh] w-full lg:w-[3/6] flex flex-col items-center justify-center'><img  className="h-[60vh] object-fit " src={Book.url} alt="" />
        {isLoggedIn === true  && role === "user" && (
        <div className='transition duration-300 ease-in-out hover:scale-125'><Heart className='mt-4' isClick={isClick} onClick={() => setClick(!isClick)} /></div>  
        )}
        </div>
        <div className='p-4 w-full lg:w-3/6'>
        <h1 className='text-red-500 text-4xl font-semibold'>{Book.title}</h1>
        <p className='mt-1'>by {Book.author}</p>
        <p className='mt-4 text-xl'>{Book.desc}</p>
        <p className='flex mt-4 items-center justify-start'>
        <GrLanguage className='me-3'/>{Book.language}   
        </p>
        <p className='mt-4 text-3xl font-semibold'>
           Price: Rs.{Book.price}
        </p>
        <div className='transition duration-300 ease-in-out hover:scale-110 flex md:flex-row bg-yellow-300 rounded-full mt-12 justify-center'>
          {isLoggedIn === true && role === "user" && (
              <button className='rounded-full text-5xl p-2 mb-1'>
              <FaCartPlus />
            </button>   
          )}
         </div>
        </div> 
       </div>
    )}
    {!Book && (
        <div className='h-screen flex items-center justify-center'>
            <Spinner></Spinner>
        </div>
    )}
    </>
  )
}

export default BookDetails
