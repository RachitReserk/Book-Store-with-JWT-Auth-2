import React, { useEffect , useState } from 'react'
import Loader from '../components/spinner'
import axios from 'axios'
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { TbMoodEmpty } from "react-icons/tb"

const Cart = () => {
  const [cart,setCart] = useState()
  const [size,setSize] = useState()
  
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`bear ${localStorage.getItem("token")}`
  }

  useEffect(() => {
    const fetch = async () => {
    const response = await axios.get('/api/get-cart',{headers})
    setCart(response.data.data)
    setSize(response.data.data.length)
    }
    fetch()
  },[])
  
  const removeFromCart = async (note) => {
    const response = await axios.put(`/api/remove-from-cart/${note._id}`,{},{headers})
    console.log(cart)
    toast(response.data.message)
    const newCart = await axios.get('/api/get-cart',{headers})
    setCart(newCart.data.data)
    setSize(newCart.data.data.length)
  }

  if(!cart)
  return (
    <div className='flex text-7xl h-screen font-league flew-col items-center justify-center'>
      <Loader></Loader>
    </div>
  )
  else if(cart && size === 0)
    return (
     <div>
     <div className='flex text-7xl h-screen font-league flew-col items-center justify-center'>
     <TbMoodEmpty size={90}/>Empty Cart ? sad
     </div>
 </div>
    )
    else{
      return (
        <div className='hidden md:flex py-8 px-12 justify-center items-center mt-8 h-screen bg'>
          <div className='h-auto rounded-lg mt-12 w-full bg-red-200'>
          <div className='flex justify-between border-b-2 border-black mt-12'>
          <h1 className='ml-8 text-left font-league text-4xl'>
          Shopping Cart   
          </h1>
          <p className='text-right font-league text-4xl mr-12'>Price</p>
          </div>
          {cart.map((items,i) => (
            <div className='w-full bg-yellow-200 my-4 rounded flex flex-col md:flex-row pr-4 justify-between items-center' key={i}>
            <div onClick={() => removeFromCart(items)} className='hover:scale-150 flex items-center justify-center ml-8 rounded-lg w-[7vh] h-[7vh] bg-red-500'>
            <FaRegTrashCan size={40}/>
            </div>
            <img src={items.url[0]}
            alt=''
            className='ml-8 h-[20vh] md:h-[20vh] object-cover'></img>
            <div className='w-full md:w-auto'>
             <h1 className='text-2xl font-semibold text-start mt-2 md:mt-0'>{items.title}</h1>
            </div>
            <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
              <h2 className='text-3xl font-semibold flex mr-6'>
               ₹{items.price}
              </h2>
            </div>
            </div>
          ))}
          <div className='flex justify-between border-b-2 border-black mt-12'></div>
          </div>
        </div>
      )
    }
}

export default Cart
