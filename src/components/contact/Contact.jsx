
import React from 'react'
import {motion} from "framer-motion"


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
const Contact = () => {
  return (
    <motion.div initial="initial" whileInView="animate" variants={aboutVariants} className='w-full flex justify-center items-center lg:mt-11 '>
        <div className='container w-9/12 flex lg:justify-between lg:flex-row xs:flex-col sm:flex-col gap-x-4'>
            {/* let's connect */}
            <motion.div className='lg:w-[30%] flex flex-col lg:h-[350px]'>
                <p className='font-semibold font-edu-sa text-3xl h-[50px]  '> Let's Connect</p>
                <p>Say hello at ishan.h.gupta@gmail.com</p>
            </motion.div>
            {/* form */}
            <motion.div initial="initial" whileInView="animate" variants={aboutVariants}  className='lg:w-[65%] flex flex-col gap-y-3'> 
                <div >
                    <p >Name:</p>
                    <input className='rounded-md border-2 w-[80%] border-black '/>
                </div>

                <div >
                    <p >Email:</p>
                    <input className='rounded-md border-2 w-[80%] border-black '/>
                </div>

                <div >
                    <p >Message:</p>
                    <textarea rows={5} className='rounded-md border-2 w-[80%] border-black '/>
                </div>

                <button className='rounded-md border-2  bg-blue-100 w-[100px]'>Send</button>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Contact