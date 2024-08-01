import React, { useEffect, useState } from 'react'
import {authActions} from '../store/auth.js'
import {useDispatch} from 'react-redux'
import Sidebar from '../components/Profile/sidebar.jsx'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Spinner from '../components/spinner.jsx'

const Profile = () => {
  const [data,setData] = useState();
  //const login = useSelector()
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`bear ${localStorage.getItem("token")}`
  }

  useEffect( () => {
  const fetch = async () => {
  const response = await axios.get('/api/userInfo',{headers})
  setData(response.data)
  }
  fetch()
  },[])

  return (
    <div className='px-2 gap-4 md:px-12 flex flex-col md:flex-row h-screen'>
      {!data && (
        <div className='w-full h-100% flex items-center justify-center'><Spinner></Spinner></div>
      )}
      { data && (<>
      <div className='w-full md:w-2/6'><Sidebar data={data}></Sidebar></div>
      <div className='w-full gap-4 mt-8 px-4'><Outlet></Outlet></div>
      </> 
    )}
    </div>
  )
}

export default Profile
