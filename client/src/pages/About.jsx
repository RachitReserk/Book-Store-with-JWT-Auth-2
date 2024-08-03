import React from 'react'
import BannerPng from "../assets/about.png";
import { motion } from "framer-motion";
import { SlideUp } from "../components/Hero/Hero";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className=' h-screen '>
    <div className="space-y-6 continer py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
        {/* Image section */}
        <div className="relative h-[400px] w-[400px]">
          <motion.img
            initial={{
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
              scale: 1.2,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              scale: { duration: 0.5 },
            }}
            src={BannerPng}
            alt=""
            className="relative z-10 w-full lg:max-[350px] img-shadow"
          />
        </div>

        {/* Text section */}
        <div className="space-y-8 lg:max-w-[800px]">
            <motion.h1 
             variants={SlideUp(1)}
             initial = "hidden"
             whileInView="show"
            className=" text-center text-5xl uppercase font-league">About Us</motion.h1>

            <motion.h2 
             variants={SlideUp(1.1)}
             initial = "hidden"
             whileInView="show"
            className="text-3xl uppercase font-league">Welcome to Book Store</motion.h2>

            <motion.p variants={SlideUp(1.2)}
             initial = "hidden"
             whileInView="show">At Book Store, we're dedicated to the magic of books and the joy of reading. Beyond just shelves filled with stories, we're a vibrant community hub where book lovers gather to explore, connect, and discover new adventures in every chapter.</motion.p>
            
            <motion.p variants={SlideUp(1.4)}
             initial = "hidden"
             whileInView="show">Step inside and explore our handpicked collection, carefully curated to inspire and delight. From timeless classics to thrilling new releases, each book is chosen with passion and care to ensure there's something for every reader's imagination. Founded with a commitment to spreading the love of literature, Book Store invites you to dive into the world of books and celebrate the power of storytelling.</motion.p>
            <Link to='/store'>
            <motion.button
              variants={SlideUp(1.6)}
              initial = "hidden"
              whileInView="show"
            className="btn-primary">
                Explore
            </motion.button>
            </Link>
         </div>

      </div>
    </div>
  </section>
  )
}

export default About
