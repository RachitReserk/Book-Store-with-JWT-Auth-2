import React from 'react';
import{ motion } from 'framer-motion';
import{SlideUp} from "../Hero/Hero";
import { Link } from 'react-router-dom';

const NoteCard = ({ data }) => {
  return (
    <div>
    <Link to={`/note-details/${data._id}`}>
      <motion.div
                            variants={SlideUp(data.delay)}
                            initial = "hidden"
                            whileInView="show"
                             className="group bg-white/50 shadow-md p-3 flex items-center gap-3">
                              <img src={data.url[0]} alt="" 
                              className=" w-[150px] image-shadow group-hover:scale-110 transition-all duration-500"/> 
                              <div>
                                <h3 className = "text-xl font-semibold">{data.title}</h3>
                                <p className="text-l">by {data.author}</p>
                                <p className="text-xl text-red-600">₹{data.price}</p>
                              </div> 
                            </motion.div>
    </Link>
    </div>
  );
};

export default NoteCard;
