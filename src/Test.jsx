 import React from 'react'
 import {motion} from "framer-motion"
import { useState } from 'react';


 export const Test = () => {

    const [open, setOpen] = useState(false);

    const variants ={
        visible: (i) =>( {opacity:1, x: 80, 
            //  transition:{type: "tween"}
            transition: {delay: i*0.3 }
        
        }),
        hidden: {opacity:0},
    }
 
    const items = ["item1", "item2", "item3", "item4"]

   return (
        <motion.div className='course'>
            {/* <motion.motion.div className='box' 
            variants={variants}
            // initial={{opacity:"hidden", scale:0.5}} 
            // animate={{opacity:0.5, scale: 1, x:200}} 
            transition={{duration:2}}
            // whileInView={{opacity:"visible", scale: 2}}
            animate={open ? "visible" : "hidden"}
            >box</motion.motion.div>
            <button onClick={() => setOpen(prev =>  !prev)}>Click</button> */}

            <motion.div className='course'>
                <motion.ul initial="hidden" animate="visible" transition={{duration:2}} variants={variants}>
                    {items.map((item,index) => (
                        <motion.li key={index} variants={variants} custom={index}>{item}</motion.li>
                    ))}
                </motion.ul>
            </motion.div>

        </motion.div>
   )
 }
 