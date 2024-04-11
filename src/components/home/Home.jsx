import React from 'react'
import {motion} from "framer-motion"
import intro_1 from "../../assets/intro_1.mp4"
import "./Home.css"
import "../card/Card.css"
import logo from "../../assets/logo.png"
import { PiHandWavingFill } from "react-icons/pi";
import Card from '../card/Card.jsx';
import About from '../about/About.jsx'
import {useScroll } from "framer-motion"
import Contact from '../contact/Contact.jsx'
import { FaHeart } from "react-icons/fa";



const Home = () => {

    

  return (
    <div>
        {/*  Hero section */}
        <section className='flex flex-col justify-center items-center font-poppins overflow-y-hidden' >
            <motion.div className='relative'>
            <nav className='w-screen  fixed top-1 flex justify-between mt-3 items-center'>
                {/* logo */}
                <motion.div   className='lg:pl-[150px]'>
                    <motion.img 
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5}}
                     className='lg:w-[200px]  sm:w-[100px] xs:w-[100px]' src={logo}/>
                </motion.div>
                {/* nav-item  */}
                <motion.ul
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5}}
                className=' cursor-pointer flex gap-8 lg:pr-[150px]'>
                    <motion.li className='xs:text-sm' ><a href='#Projects'>Projects</a></motion.li>
                    <motion.li className='xs:text-sm'><a href='#About'>About</a></motion.li>
                    <motion.li className='xs:text-sm'><a href='#Contact'>Contact</a></motion.li>
                </motion.ul>
            </nav>
            <motion.video
       
            className=' overflow-y-hidden video' muted autoPlay>
                <source src={intro_1}></source>
            </motion.video>
            {/* desc  */}
            <motion.div className='flex  absolute lg:left-[150px] sm:bottom-10 xs:bottom-2 md:bottom-10   lg:bottom-40 sm:w-[700px] md:w-[700px] lg:w-[1080px] mx-auto flex-col gap-y-2'>
                <motion.div className='flex gap-2 items-center overflow-hidden'>
                     <h1 className='  font-raleway sm:text-l xs:text-sm  lg:text-2xl'>Hello there</h1>

                    <motion.div className='lg:text-2xl xs:text-l sm:text-l' >
                        <PiHandWavingFill  />
                    </motion.div>
                </motion.div>
                <motion.div >
                <p className='  font-raleway xs:text-l lg:text-2xl overflow-hidden'>I'm <span className='text-blue-100'>Ishan</span>, a UI/UX designer focused on designing better user experiences.</p>
                 </motion.div>
            </motion.div>
            </motion.div>
            
            
        </section>

        {/* Project section */}
        <motion.div id='Projects' className="project-section bg-dullwhite overflow-hidden mx-auto text-center ">
            <motion.div className="overflow-hidden lg:text-4xl xs:text-2xl sm:text-2xl text-center font-poppins xs:mt-5 sm:mt-5 lg:mt-11 font-semibold text-brown-200">Projects</motion.div>
            <motion.div className="project-container relative text-center max-w-[1200px] mx-auto lg:py-5 flex flex-col xs:gap-y-10 sm:gap-y-16 lg:gap-y-7 xs:mb-10 sm:mb-10">
            {/* project card */}
                <Card className="project-card1" side="right" number={"01"} title={"Family of Eatries"} description={"Designed a Mobile App"}/>
                <Card className="project-card2" side="left" number={"02"} title={"Just Jam"} description={"Designed a Music App"}/>
                <Card className="project-card3" side="right" number={"03"} title={"Furnisher"} description={"Designed a Furniture App"}/>
                <Card className="project-card4" side="left" number={"04"} title={"Company profile"} description={"Designed a Static App"}/>
            </motion.div>
           
            

        </motion.div>

        {/* About section */}
        <section id='About'>
            <About />
        </section>
        {/* Contact section  */}
        <div id='Contact'>
        <Contact />
        </div>
        <div className="mx-auto flex xs:gap-0 lg:gap-2 justify-center items-center">
            <p className='xs:text-sm'>Designed and coded in Canada with </p> <span className='text-brown-600'><FaHeart /></span> <p>By ishan 2024</p>
        </div>
          
    </div>
  )
}

export default Home