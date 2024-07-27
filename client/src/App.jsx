import React, { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Navbar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import {Routes , Route} from "react-router-dom"
import Store from './pages/Store.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import { ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <div className="cursor-default realtive overflow-x-hidden bg-white2 text-dark">
      <ToastContainer
      position="top-right"
      autoClose={2500}
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
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/book-details/:id' element={<BookDetails/>}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default App