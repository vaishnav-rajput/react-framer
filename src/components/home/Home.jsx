import React from 'react'
import {motion} from "framer-motion"
import intro_1 from "../../assets/intro_1.mp4"
import "./Home.css"
import logo from "../../assets/logo.png"
import { PiHandWavingFill } from "react-icons/pi";
import Card from '../card/Card'


const Home = () => {
  return (
    <div>
        {/*  Hero section */}
        <section className='flex flex-col justify-center items-center font-poppins overflow-y-hidden' >
            <div className='relative'>
            <nav className='w-screen absolute top-1 flex justify-between mt-3 items-center'>
                {/* logo */}
                <motion.div className='pl-[150px]'>
                    <img className='w-[200px]' src={logo}/>
                </motion.div>
                {/* nav-item  */}
                <motion.ul className=' cursor-pointer flex gap-8 pr-[150px]'>
                    <motion.li>Projects</motion.li>
                    <motion.li>About</motion.li>
                    <motion.li>Contact</motion.li>
                </motion.ul>
            </nav>
            <video className=' overflow-y-hidden video' muted autoPlay>
                <source src={intro_1}></source>
            </video>
            {/* desc  */}
            <div className='flex  absolute left-[150px]   bottom-40 w-[1080px] mx-auto flex-col gap-y-2'>
                <div className='flex gap-2 items-center'>
                     <h1 className='  font-raleway text-2xl'>Hello there</h1>
                    <div className='text-2xl'>
                        <PiHandWavingFill  />
                    </div>
                </div>
                <div className='font-poppins'>

                 </div>
            </div>
            </div>
            
            
        </section>

        {/* Project section */}
        <div className="project-section bg-dullwhite ">
            <div className="overflow-hidden text-4xl  text-center font-poppins  mt-11">Projects</div>
            <div className="project-container relative  max-w-[1200px] mx-auto py-5 flex flex-col gap-7">
            {/* project card */}
                <Card side="right" number={"01"} title={"Family of Eatries"} description={"Designed a Mobile App"}/>
                <Card side="left" number={"02"} title={"Just Jam"} description={"Designed a Music App"}/>
                <Card side="right" number={"03"} title={"Furnisher"} description={"Designed a Furniture App"}/>
                <Card side="left" number={"04"} title={"Company profile"} description={"Designed a Static App"}/>
            </div>
           
            

        </div>

        {/* About section */}
        <section>
        
        </section>
        {/* Contact section  */}
        <section>

        </section>
    </div>
  )
}

export default Home