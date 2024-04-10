import React from 'react'
import {motion} from "framer-motion"
import intro_1 from "../../assets/intro_1.mp4"
import "./Home.scss"
import logo from "../../assets/logo.png"
import { PiHandWavingFill } from "react-icons/pi";


const Home = () => {
  return (
    <div>
        {/*  Hero section */}
        <section className='flex flex-col justify-center items-center font-poppins' >
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
            <video className=' video' muted autoPlay>
                <source src={intro_1}></source>
            </video>
            {/* desc  */}
            <div className='flex  absolute left-[150px]   bottom-40 w-[1080px] mx-auto flex-col gap-y-2'>
                <div className='flex gap-2 items-center'>
                     <h1 className='  font-poppins'>Hello there</h1>
                    <div >
                        <PiHandWavingFill  />
                    </div>
                </div>
                <div className='font-poppins'>

                 </div>
            </div>
            </div>
            
            
        </section>

        {/* Project section */}
        <section>
            <div>

            </div>
        </section>
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