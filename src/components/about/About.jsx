import React from 'react'
import dp from "../../assets/dp.jpg"
import { FaRegLightbulb } from "react-icons/fa";
import {motion} from "framer-motion";
import { LuPenSquare } from "react-icons/lu";

const aboutVariants = {
  stager: {
    transition: {
      staggerChildren: 0.1,
    }
  },
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: i*0.1,
    },
  })
}

const About = () => {



  return (
    <motion.div id='About' variants={aboutVariants} className='w-full text-textColor font-raleway'>
        <motion.div variants={aboutVariants} className='container py-7 w-9/12 mx-auto flex lg:flex-row sm:flex-col xs:flex-col sm:gap-y-10 justify-between '>
          {/* About */}
          <motion.div initial={{opacity:0}} whileInView={{transition: {staggerChildren: 0.5, duration: 2}, opacity: 1, } } variants={aboutVariants} className='flex lg:w-[48%] flex-col gap-y-4'>
            <motion.div>
              <img className='rounded-full lg:w-[300px] xs:w-[100px] sm:w-[150px]' src= {dp}/>

            </motion.div>
            <motion.div initial="initial" whileInView="animate" variants={aboutVariants}>  
              <p className="font-bold font-inter xs:text-l sm:text-l lg:text-2xl">A little introduction about me</p>
            </motion.div>  
            <motion.div  initial="initial" whileInView="animate" custom="1" variants={aboutVariants}>
              <p className='sm:text-sm xs:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem id illo eum! Deserunt incidunt odit iste esse repellat perferendis, tempore nobis neque laborum nostrum iusto ut fuga molestiae qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nemo explicabo iusto maiores enim delectus sed! Laborum, sapiente voluptas ad fugiat, adipisci assumenda similique vel voluptatibus exercitationem distinctio, dolor odio!</p>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" custom="1.1" variants={aboutVariants}>
              <p className='font-bold font-inter xs:text-l sm:text-l lg:text-2xl'>EDUCATION</p>
            </motion.div>
            <motion.div initial="initial" whileInView="animate" custom="1.2" variants={aboutVariants}>
              <p className='xs:text-sm'>Post graduate diploma in Interactive Media Design, Durham College.</p>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" custom="1.3" variants={aboutVariants}>
              <p className='xs:text-sm'>  Jan 2023 - Present</p>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" custom="1.4" variants={aboutVariants}>
              <p className='xs:text-sm'> Post graduate certificate in Digital Marketing, DGMC College.</p>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" custom="1.5" variants={aboutVariants}>
              <p className='xs:text-sm'>Aug 2017 - Sep 2018</p>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" custom="1.6" variants={aboutVariants}>
              <p className="font-bold font-inter sm:text-l xs:text-l lg:text-2xl">Experience</p>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" custom="1.7" variants={aboutVariants}>
              <p className='xs:text-sm'>Product Consultant @ Experian India.</p>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" custom="1.8" variants={aboutVariants}>
              <p className='xs:text-sm'>Oct 2019 - Dec 2019

              </p>
            </motion.div>

          </motion.div>


          {/* thoughts */}
          <motion.div variants={aboutVariants} className='flex lg:w-[45%] flex-col gap-y-7 xs:pt-14 lg:pt-20'>
           
            <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" className='flex items-center h-[50px] gap-x-2'>
              <p className='lg:text-xl sm:text-l xs:text-l font-bold font-edu-sa'>My Design Philosophy & Inspirations!</p>
              <LuPenSquare  className='text-xl'/>

            </motion.div>

            <motion.div  className='flex flex-col gap-y-2'>
                <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.1" className='flex gap-x-1 items-center' >
                  <FaRegLightbulb className='text-xl text-yellow-100' />
                  <p className='font-semibold font-inter xs:text-l lg:text-xl '>Design is the product.</p>
                </motion.div>

                <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.2" >
                  <p className='xs:text-sm'>“Design is not just what it looks like and feels like. Design is how it works.”</p>
                </motion.div>
                <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.3" className="text-end">
                  <p className='xs:text-sm'>-Steve Jobs</p>
                </motion.div>
            </motion.div>

            <motion.div className='flex flex-col gap-y-2'>
                <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.1" className='flex gap-x-1 items-center'>
                  <FaRegLightbulb className='text-xl text-yellow-100' />
                  <p className='font-semibold font-inter xs:text-l lg:text-xl'> Excellent designs are natural and obvious.</p>
                </motion.div>

                <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.2">
                  <p className='xs:text-sm'>“A user interface is like a joke. If you have to explain it, it’s not that good.”</p>
                </motion.div>
                <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.3" className="text-end">
                  <p className='xs:text-sm'>- Martin LeBlanc</p>
                </motion.div>
            </motion.div>

            <motion.div  className='flex flex-col gap-y-2'>
                <motion.div  variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.1"className='flex gap-x-1 items-center'>
                  <FaRegLightbulb className='text-xl text-yellow-100' />
                  <p className='font-semibold font-inter xs:text-l  lg:text-xl'>The secret is simplicity.</p>
                </motion.div>

                <motion.div variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.2">
                  <p className='xs:text-sm'>“Good design is obvious. Great design is transparent.”</p>
                </motion.div>
                <motion.div variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.3" className="text-end">
                  <p className='xs:text-sm'>- Joe Sparano</p>
                </motion.div>
            </motion.div>

            <motion.div className='flex flex-col gap-y-2'>
                <motion.div variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.1" className='flex gap-x-1 items-center'>
                  <FaRegLightbulb className='text-xl text-yellow-100' />
                  <p className='font-semibold font-inter xs:text-l lg:text-xl'> Designing Is Always Learning</p>
                </motion.div>

                <motion.div variants={aboutVariants}  initial="initial" whileInView="animate" custom="1.2"> 
                  <p className='xs:text-sm'>“Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep.”</p>
                </motion.div>
                <motion.div  variants={aboutVariants} initial="initial" whileInView="animate" custom="1.3" className="text-end">
                  <p className='xs:text-sm'>- Scott Adams</p>
                </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About