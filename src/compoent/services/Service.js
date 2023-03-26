import React from 'react'
import { Link } from "react-router-dom"

 const Service = () => {
  return (
    <ul>
          <Link to='/certification' className='certification'>
            <li className="hover:bg-orange-700 hover:text-white rounded">Certification</li>
          </Link>
          <Link to='/inspection' className='inspection'>
            <li className="hover:bg-orange-700 hover:text-white rounded">Inspection</li>
          </Link>
          <Link to='/labDesign' className='labDesign'>
            <li className="hover:bg-orange-700 hover:text-white rounded">LabDesign</li>
          </Link>
        </ul>
  )
}


export default Service;
