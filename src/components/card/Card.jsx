import React from 'react'
import "./Card.css"

const Card = ({number, title, description, side}) => {
  return (
    <div  className={`${side === "right" ? "right-[10%]" : "left-[10%]"} mt-12 project-card  relative shadow-custom w-[80%] h-[500px] bg-cover bg-center bg-no-repeat  overflow-visible `} id="project1">
        <div className={`${side === "right" ? " right-[-40px] top-[-45px] " : "left-[-40px] top-[-45px] "}project-number absolute  text-9xl overflow-hidden z-10 font-bold text-white`}>{number}</div>
        <div className="project-content h-full w-full translate-x-7 flex flex-col gap-y-5 justify-center items-center"> 
            <p className="project-subHeading text-3xl text-black  font-raleway">{description}
            </p>
            <h2 className="project-heading text-2xl font-poppins overflow-hidden">{title}</h2>
        </div>
    </div>
  )
}

export default Card