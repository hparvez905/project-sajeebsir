import React from "react"
import bg from '../assets/course.jpeg'

const Course = () => {
  return (
    <>
       <section>
        
        <div className="relative">
        <img src={bg} alt=""className="w-full h-96"/>
        <div className="bg-white h-36 w-1/3  ml-60 absolute top-[25%]  ">
          <div className="p-2 mt-4 ml-6">
          <p className="text-md font-semibold text-red-600 mb-4">Course Registration</p>
          <p className="text-3xl mb-4">How to register for our courses</p>
          </div>
        </div>
        </div>
        <div>
          <p className="m-auto p-4 mx-48 my-6 text-3xl">

          "Talented individuals attend World BioHazTec’s courses to absorb biosafety expertise, develop fresh perspectives and make new connections through team-building exercises.  They return to their organizations around the world, bringing new ideas, problem-solving tools, and confidence."</p>
        </div>
        <div className='m-auto p-4 mx-48 text-gray-600'>
            <p className="mb-4">Benefits for your organization:</p>
            <ul>
                <li className="mb-2">World-renowned experts teach all World BioHazTec’s courses</li>
                <li  className="mb-2">Your employees stay connected to emerging industry trends and regulations</li>
                <li  className="mb-2">Site-specific material that is aimed at direct application</li>
                <li  className="mb-2">Custom programs to target your needs</li>
                <li  className="mb-2">Webinar capability to reach multiple sites simultaneously</li>
            </ul>
            <p className="my-6">World BioHazTec is planning to offer courses soon. To find out how World BioHazTec can assist you, please contact us for more information.<br></br>

<span className="text-sky-500 cursor-pointer">Click here</span> to see courses currently conducted by World BioHazTec.</p>
        </div>
        
      </section>
    </>
  )
}
export default Course
