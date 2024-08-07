import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NoteCard from '../components/NoteCard/NoteCard.jsx'
import {motion} from "framer-motion"
import {SlideUp} from '../components/Hero/Hero.jsx'
import Loader from '../components/spinner.jsx'
import { TbMoodEmpty } from "react-icons/tb"

const baseUrl = '/api/get-all-notes'
const Store = () => {
  const [Notes, setNotes] = useState([])
  const [Copy,setCopy] = useState([])
  const [size , setSize] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [sem,setSem] = useState("All")

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(baseUrl)
      setNotes(response.data.data)
      setCopy(response.data.data)
      setSize(response.data.data.length)
    }
    fetch()
  }, [])

  useEffect(() => {
    switch (sem) {
      case '1':
        setCopy(Notes.filter(note => note.semester === '1st'));
        break;
      case '2':
        setCopy(Notes.filter(note => note.semester === '2nd'));
        break;
      case '3':
        setCopy(Notes.filter(note => note.semester === '3rd'));
        break;
      default:
        setCopy(Notes)
    }
  },[sem])

  const handleRadio = (event) => {
    setSem(event.target.value)
  }
  
  if(size===0)
    return(
    <div className='h-screen flex items-center justify-center'>
  <Loader></Loader>
  </div>
    )
  else
  return (
    <div className='mt-8 h-screen w-screen px-4'>
    <motion.h3
       variants={SlideUp(0)}
       initial = "hidden"
       whileInView= "show"
       className="text-4xl text-center font-league font-semibold underline uppercase py-8">STORE</motion.h3>

       <div className='block md:flex flex-row'>
        <div className='mx-auto text-center'>
        <div>
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        Filter
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
        
      <div
        id="dropdownDefaultCheckbox"
        className={`mx-auto mt-2 z-10 ${isOpen ? 'block' : 'hidden'} w-[250px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className='text-white'>Semester</div>
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          <div className="flex items-center mt-4 mb-4">
    <input checked={sem === 'All'} onChange={handleRadio} id="default-radio-1" type="radio" value="All" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '1'} onChange={handleRadio} id="default-radio-1" type="radio" value="1" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '2'} onChange={handleRadio} id="default-radio-1" type="radio" value="2" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '3'} onChange={handleRadio} id="default-radio-1" type="radio" value="3" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '4'} onChange={handleRadio} id="default-radio-1" type="radio" value="4" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '5'} onChange={handleRadio} id="default-radio-1" type="radio" value="5" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '6'} onChange={handleRadio} id="default-radio-1" type="radio" value="6" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">6</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '7'} onChange={handleRadio} id="default-radio-1" type="radio" value="7" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">7</label>
    </div>
    <div className="flex items-center mt-4 mb-4">
    <input checked={sem === '8'} onChange={handleRadio} id="default-radio-1" type="radio" value="8" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">8</label>
    </div>
        </ul>
      </div>
    </div>
</div>
    {Copy.length > 0 && (
    <div className='my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
    {Copy.map((item, i) => (
      <div key={i}>
        <NoteCard data={item} />
      </div>
    ))}
  </div>
    )}
    {Copy.length === 0 && (
      <div className='h-[50vh]] w-[100vw]'>
      <div className='flex text-7xl font-league flew-col items-center justify-center'>
        <TbMoodEmpty size={90}/>No Notes? sad
        </div>
    </div>
    )}
    </div>
  </div>
  )
}

export default Store
