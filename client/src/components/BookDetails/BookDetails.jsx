import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { GrLanguage } from "react-icons/gr"
import Spinner from '../spinner.jsx'
import Heart from "react-animated-heart";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { makeStyles, styled } from '@mui/material/styles';
import { toast } from 'react-toastify';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}));

const BookDetails = () => {
    const [isClick, setClick] = useState(false);
    const id = useParams()
    const [Book, setBook] = useState()
    const baseUrl = `/api/get-book/${id.id}`

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const role = useSelector((state) => state.auth.role)  

  useEffect( () => {
    const fetch = async () => {
      const response = await axios.get(baseUrl)
      setBook(response.data.data)
    }
    const userFetch = async () => {
     const response = await axios.get('/api/userInfo',{headers})
     if(response.data.favourites.includes(id.id)){
      setClick(true)
     }
    }
    userFetch()
    fetch()
  }, [])
  
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`bear ${localStorage.getItem("token")}`,
    bookid:id.id,
  }

  const favourite = async () => {
  const response = await axios.put("/api/put-fav",{},{headers})
  if(response.data.message === 'Book already favourite'){
    const responsex = await axios.put(`/api/remove-from-fav/${id.id}`,{},{headers}) 
      toast("Removed from favourites")
      setClick(false)
  }
  else{
    toast("Added to favourites <3")
    setClick(true)
  }
  }


  const handleCart = async () => {
    const response = await axios.put("/api/add-to-cart",{},{headers})
    console.log(response)
    if(response.data.message === 'Book is already in cart'){
    toast("Book is already in cart")
    }
    else{
    toast("Book added to cart !")
    }
  }

  return (
    <>
    {Book && (
        <div className='px-12 py-8 flex md:flex-row flex-col  gap-8'>
        <div className='bg-yellow-100 rounded-2xl p-4 h-[80vh] lg:h-[88vh] w-full lg:w-[3/6] flex flex-col items-center justify-center'><img  className="h-[60vh] object-fit " src={Book.url} alt="" />
        {isLoggedIn === true  && role === "user" && (
        <LightTooltip title={isClick ? "Remove from favourites" : "Add to favourites"} placement='top'><div className='transition duration-300 ease-in-out hover:scale-125'><Heart className='mt-4' isClick={isClick} onClick={() =>
          {setClick(!isClick)
           favourite()
          }} /></div></LightTooltip>
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
        <LightTooltip title="Add to cart" placement='top'>
        <div onClick={() => {
                handleCart()
                 }} className='cursor-pointer transition duration-300 ease-in-out hover:scale-110 flex md:flex-row bg-yellow-300 rounded-full mt-12 justify-center'>
          {isLoggedIn === true && role === "user" && ( 
              <button className='rounded-full text-5xl p-2 mb-1' >
              <FaCartPlus />
            </button>
          )} 
         </div>
         </LightTooltip>  
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
