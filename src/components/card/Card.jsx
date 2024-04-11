"use client";
import React from 'react'
import "./Card.css"
import {motion} from "framer-motion";
import {useScroll } from "framer-motion"
import {useRef} from "react";


const Card = ({number, title, description, side}) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset : ["0 1", "1.18 1"]
  })

  return (
    <motion.div ref={ref} style={{scale:scrollYProgress, opacity:scrollYProgress} } className='group transition-all duration-200 ease-in xs:px-10 sm:px-16'>
    <motion.div  className={` ${side === "right" ? "lg:right-0 lg:translate-x-10" : "lg:left-[20%]"} transition-all duration-200 ease-in group projectCard lg:mt-12 sm:mt-4 xs:mt-3 project-card project-card-${number} relative shadow-custom lg:w-[75%] lg:h-[450px] xs:h-[250px] sm:h-[300px] sm:w-auto xs:w-auto bg-cover bg-center bg-no-repeat  overflow-visible `} id="project1">
        <motion.div className={`${side === "right" ? " lg:right-[-45px] lg:top-[-45px] " : "lg:left-[-45px] lg:top-[-45px] "} hidden group-hover:block project-number absolute xs:text-xl md:text-7xl  lg:text-9xl overflow-hidden z-10 font-bold text-white`}>{number}</motion.div>
        <motion.div className="project-content  h-full w-full lg:translate-x-7 flex flex-col gap-y-5 justify-center items-center">
            <p className="project-subHeading xs:text-l lg:text-3xl text-black bg-white transition-all duration-200 ease-in  lg:font-semibold font-raleway z-13 group-hover:scale-125" >{description}
            </p>
            <h2 className="project-heading xs:text-l lg:text-2xl font-bold transition-all duration-200 ease-in bg-white font-poppins overflow-hidden z-13 group-hover:scale-125 ">{title}</h2>
        </motion.div>
    </motion.div>
    </motion.div>
    
  )
}

export default Card