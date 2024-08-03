import React from 'react'
import { motion } from 'framer-motion'
import BannerPng from '../../assets/bookpng.png'
import { SlideUp } from './Hero'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap -24 place-items-center justify-between">

             <div className="">
                <motion.img 
                initial = {{
                    opacity: 0,
                    x: -100,
                    y: 100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                }}

                whileHover={{
                    scale:1.2,
                    x:0,
                    y:0,
                }}

                transition={{
                    duration:0.5,
                    delay:0.5,
                    scale: {duration: 0.5},
                }}
                src = {BannerPng} alt="" className="w-[450px] img-shadow mt-16" />

             </div>

            
             
             <div className="space-y-5 lg:max-w-[400px]">
                <motion.h1 
                 variants={SlideUp(1)}
                 initial = "hidden"
                 whileInView="show"
                className="text-6xl uppercase font-semibold font-league">Your Next Great Read Awaits!</motion.h1>
                <motion.p variants={SlideUp(1.2)}
                 initial = "hidden"
                 whileInView="show">Explore our diverse collection of books and find your next favorite read. Your literary adventure starts here!</motion.p>
                 <div className='hover:scale-110'>
                 <Link to="/store">
            <motion.button variants={SlideUp(1.8)}
             initial = "hidden"
             whileInView = "show" className="ml-[100px] justify-center items-center btn-primary inline-block  !mt-10">
              <IoCartOutline className="h-[23px] w-[23px] inline mr-2" />
              Order Now
            </motion.button>
            </Link>
            </div>
             </div>

            </div>
        </div>
    </section>
  )
}

export default Banner
