import React from 'react'
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className='navbar'>
        {/* sidebar  */}
        <div className="wrapper">
            <span>Aeon Tech</span>
            <div className="social">
                <a href=""><img src="./facebook.png" alt="" /></a>
                <a href=""><img src="../public/instagram.png" alt="" /></a>
                <a href=""><img src="../public/youtube.png" alt="" /></a>
                <a href=""><img src=".dribble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
