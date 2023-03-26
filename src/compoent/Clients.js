import React from "react"
import bg from '../assets/clients2.jpg'

const Clients = () => {
  return (
    <>
      <section>
        
        <div >
        <img src={bg} alt=""className="w-full h-96"/>
        </div>
        <div>
          <p className="m-auto p-4 mx-40 my-6">
To find out how World BioHazTec can assist you and your team, please contact us at a location listed below, call +65 6634 2600 or email at <span className="hover:underline text-sky-600">Lng@worldbiohaztec.com</span>. We typically respond within two business days.</p>
        </div>
        
      </section>
    </>
  )
}
export default Clients;
