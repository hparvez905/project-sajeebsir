import React from 'react'
import { Link } from "react-router-dom"

 const Service = () => {
  return (
    <ul>
          <Link to='/certification' className='certification'>
            <li className="hover:font-semibold hover:underline text-sky-600">Certification</li>
          </Link>
          <Link to='/inspection' className='inspection'>
            <li className="hover:font-semibold text-sky-600 hover:underline">Inspection</li>
          </Link>
          <Link to='/labDesign' className='labDesign'>
            <li className="hover:font-semibold  text-sky-600 hover:underline">LabDesign</li>
          </Link>
        </ul>
  )
}


export default Service;
