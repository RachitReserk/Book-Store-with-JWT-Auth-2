import React from 'react'
import {useNavigate} from 'react-router-dom'
import {authActions} from '../store/auth.js'
import {useDispatch} from 'react-redux'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
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
