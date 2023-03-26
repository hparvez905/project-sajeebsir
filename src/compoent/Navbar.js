import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar bg-orange-600'>
        <h3 className='logo'>Logo</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li className="hover:bg-orange-700 hover:text-white rounded">Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li className="hover:bg-orange-700 hover:text-white rounded">About us</li>
          </Link>
          <Link to='/services' className='services'>
            <li className="hover:bg-orange-700 hover:text-white rounded">Services</li>
          </Link>
          <Link to='/clients' className='clients'>
            <li className="hover:bg-orange-700 hover:text-white rounded">Clients</li>
          </Link>
          <Link to='/resources'  className='resources'>
          <li className="hover:bg-orange-700 hover:text-white rounded">Resources</li>
          </Link>
          <Link to='/course'  className='course'>
          <li className="hover:bg-orange-700 hover:text-white rounded">Courses</li>
          </Link>
          <Link to='/contact' className='home'>
            <li className="hover:bg-orange-700 hover:text-white rounded">contact us</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
