import React from 'react'
import {useNavigate} from 'react-router-dom'
import {authActions} from '../store/auth.js'
import {useDispatch} from 'react-redux'
import Sidebar from '../components/Profile/sidebar.jsx'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className='px-2 gap-4 bg-yellow-200 md:px-12 flex flex-col md:flex-row h-screen'>
      <div><Sidebar></Sidebar></div>
      <div><Outlet></Outlet></div>
      <button onClick={
        () => {
        localStorage.clear()
        navigate('/')
        dispatch(authActions.logout())
        }
      }> logout</button>
    </div>
  )
}

export default Profile
