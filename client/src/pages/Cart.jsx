import React, { useEffect , useState } from 'react'
import Loader from '../components/spinner'
import axios from 'axios'

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

  if(!cart)
  return (
    <div className='flex text-7xl h-screen font-league flew-col items-center justify-center'>
      <Loader></Loader>
    </div>
  )
  else if(cart && size === 0)
    return (
     <div className='h-screen'>
      CART EMPTY
     </div>
    )
    else{
      return (
        <div className='ml-8 mt-8 h-screen'>
          <h1 className='text-center font-league text-3xl'>
          Your cart   
          </h1> 
          {cart.map((items,i) => (
            <div className='w-full bg-yellow-200 my-4 rounded flex flex-col md:flex-row pr-4 justify-between items-center' key={i}>
            <img src={items.url}
            alt=''
            className='ml-8 h-[20vh] md:h-[20vh] object-cover'></img>
            <div className='w-full md:w-auto'>
             <h1 className='text-2xl font-semibold text-start mt-2 md:mt-0'>{items.title}</h1>
            </div>
            <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
              <h2 className='text-3xl font-semibold flex'>
               ₹.{items.price}
              </h2>
            </div>
            </div>
          ))}
        </div>
      )
    }
}

export default Cart
