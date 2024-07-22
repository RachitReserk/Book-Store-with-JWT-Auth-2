import React, { useEffect, useState } from 'react'
import axios from 'axios'
const baseUrl = '/api/get-recent-books'
const LatestBooks = () => {
const [book, setBook] = useState()

useEffect(() => {
const fetch = async() => {
  const response = await axios.get(baseUrl)
  setBook(response.data.data)
}
fetch()
},[])

  return (
    <div>
      
    </div>
  )

}


export default LatestBooks
