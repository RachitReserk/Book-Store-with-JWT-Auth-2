import React from 'react';
import{ motion } from 'framer-motion';
import{SlideUp} from "../Hero/Hero";
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {
  return (
    <div>
    <Link>
      <motion.div
                            variants={SlideUp(data.delay)}
                            initial = "hidden"
                            whileInView="show"
                             className="group bg-white/50 shadow-md p-3 flex items-center gap-3">
                              <img src={data.url} alt="" 
                              className=" w-[150px] image-shadow group-hover:scale-125 transition-all duration-500"/> 
                              <div>
                                <h3 className = "text-xl font-semibold">{data.title}</h3>
                                <p className="text-xl text-red-600">Rs.{data.price}</p>
                                </div> 
                            </motion.div>
    </Link>
    </div>
  );
};

export default BookCard;
