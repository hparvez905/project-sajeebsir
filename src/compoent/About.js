import React from "react"
import bg from '../assets/about.jpg'
import { AboutDetails } from "./about/AboutDetails"

const About = () => {
  return (
    <>
     <section>
        
        <div >
        <img src={bg} alt=""className="w-full h-screen"/>
        </div>
        <div>
         <AboutDetails/>
        </div>
        
      </section>
    </>
  )
}
export default About
