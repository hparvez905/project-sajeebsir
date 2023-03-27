import React from "react"
import bg from '../assets/about.jpg'
import { AboutDetails } from "./about/AboutDetails"

const About = () => {
  return (
    <>
     <section>
        
        <div >
        <img src={bg} alt=""className="w-full h-screen"/>
        <div className="bg-white h-48 w-1/3  ml-60 absolute top-[50%]  ">
          <div className="p-2 mt-6 ml-10">
          <p className="text-lg font-semibold text-red-600 mb-4">ABOUT US</p>
          <p className="text-3xl mb-4">What we do, Who we serve, <br></br>How are we different?</p>
          </div>
        </div>
        </div>
        <div>
         <AboutDetails/>
         
        </div>
        
      </section>
    </>
  )
}
export default About
