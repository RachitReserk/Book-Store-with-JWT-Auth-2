import React from "react";
import Boy from "/src/assets/boy.png";
import { IoCartOutline } from "react-icons/io5";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

export const SlideUp  = (delay) => {
  return{
    hidden:{
      y: "100%",
      opacity:0,

    },
    show: {
      y:0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay :delay,
      },
    },
  };
};

const Hero = () => {
  return(
  <main>
    <div className="container min-h-[600px] flex justify-center relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap -24 place-items-center justify-between">
        {/*text content here*/}
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h1 
            variants={SlideUp(0.5)}
             initial = "hidden"
             whileInView = "show"

            className="realtive text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"> Book
            </motion.h1>
            <motion.h1
            variants={SlideUp(1)}
            initial = "hidden"
            whileInView = "show" 
            className=" text-5xl lg:text-7xl xl:text-8xl font-bold uppercase">
                Store
            </motion.h1>
            <motion.p variants={SlideUp(1.5)}
             initial = "hidden"
             whileInView = "show"
               className="text-m"> An invitation of stories, where readers explore endless literary treasures.</motion.p>
               <div  className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <Link to="/store">
            <motion.button variants={SlideUp(1.8)}
             initial = "hidden"
             whileInView = "show" className="btn-primary inline-block  !mt-10">
              <IoCartOutline className=" h-[23px] w-[23px] inline mr-2" />
              Order Now
            </motion.button>
            </Link>
            </div>
          </div>
        {/*Images here*/}

        <div>
          <motion.img
          initial = {{opacity: 0 , rotate: 20 , x:200 , y:100}}
          whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0}}
          transition={{duration:1}}
          src={Boy} alt=""  className="w-[450px] img-shadow mt-16"/>
        </div>
           

      </div>
      
    </div>
           
  </main>
  
)}

export default Hero
