import React from 'react'
import { HomePart } from './HomePart';
import Slider from './slider/Slider';

export const Home = () => {
  return (
    <div>
      <div className='relative'>
      <Slider/>
      </div>
    <div>
    <HomePart/>
    </div>
    </div>
  )
}
export default Home;