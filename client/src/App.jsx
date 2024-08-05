import React, { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Navbar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import {Routes , Route} from "react-router-dom"
import Store from './pages/Store.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignIn from './pages/SignIn.jsx'
import UserHistory from './components/Profile/orderHistory.jsx'
import SignUp from './pages/SignUp.jsx'
import Fav from './components/Profile/fav.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import Setting from './components/Profile/setting.jsx'
import NoteDetails from './components/NoteDetails/NoteDetails.jsx'
import { ToastContainer} from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux'
import { authActions } from './store/auth.js'

const App = () => {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.auth.role)
  useEffect(() => {
    if(
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ){
      dispatch(authActions.login())
      dispatch(authActions.changeRole(localStorage.getItem("role")))
    }
  },[])
  return (
    <div className="scroll-smooth cursor-default realtive overflow-x-hidden bg-white2 text-dark">
      <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
      transition: Bounce
      />
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/profile' element={<Profile/>}>
           <Route index element={<Fav/>}></Route>
           <Route path='/profile/orderHistory' element={<UserHistory/>}></Route>
           <Route path='/profile/settings' element={<Setting/>}></Route>
          </Route>
          <Route path='/note-details/:id' element={<NoteDetails/>}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default App