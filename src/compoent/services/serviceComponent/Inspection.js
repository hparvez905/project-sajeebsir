import React from 'react'
import bg from '../../../assets/Inspection.jpg'

 const Inspection = () => {
  return (
    <div>
      <div className='mb-10'>
      <img src={bg} alt='' className='w-full h-1/2'/>
      </div>

      <div>
      <p className='text-2xl mb-10 mt-10'>"Our certification is backed by hard data recorded and analyzed by biosafety experts."</p>
      <p>World BioHazTec is uniquely equipped to help clients through the certification process. Our approach is to work with the biosafety officers and facility engineers to remediate any facility deficiencies and to provide quality improvements and suggestions.</p>
    </div>
    <div>
      <p className='text-4xl mt-10'>THE DELIVERABLES</p>
      <p className='mt-6 mb-4'>The Certification Assessment Report is not just a checklist. The checklist is only the foundation of a certification.</p>
      <p>Our report includes:</p>
    </div>
    </div>
  )
}

export default Inspection;