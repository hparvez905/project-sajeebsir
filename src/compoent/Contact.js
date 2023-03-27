import React from "react"
import bg from '../assets/bgc.jpeg'

const Contact = () => {
  return (
    <>
      <section>
        
        <div className="">

        <div className="relative" >
        <img src={bg} alt=""className="w-full h-96  "/>
        <div className="bg-white h-36 w-1/3  ml-60 absolute top-[25%]  ">
          <div className="p-8 ml-6">
          <p className="text-md font-semibold text-red-600 mb-4">CONTACT US</p>
          <p className="text-3xl mb-4">How to reach us</p>
          </div>
        </div>
        </div>
        

        </div>
       
        <div className="">
          <p className="m-auto p-4 mx-40 my-6 ">
To find out how World BioHazTec can assist you and your team, please contact us at a location listed below, call +65 6634 2600 or email at <span className="hover:underline text-sky-600">Lng@worldbiohaztec.com</span>. We typically respond within two business days.</p>

        </div>
       
        
        
      </section>
    </>
  )
}
export default Contact;
