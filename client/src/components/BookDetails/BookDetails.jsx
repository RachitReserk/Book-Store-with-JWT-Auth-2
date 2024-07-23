import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { GrLanguage } from "react-icons/gr"
import Spinner from '../spinner.jsx'

const BookDetails = () => {
    const id = useParams()
    const [Book, setBook] = useState()
    const baseUrl = `/api/get-book/${id.id}`
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
        <div className='bg-yellow-100 rounded-2xl p-4 h-[70vh] lg:h-[88vh] w-full lg:w-[3/6] flex items-center justify-center'><img  className="h-[60vh] object-fit " src={Book.url} alt="" /></div>
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
