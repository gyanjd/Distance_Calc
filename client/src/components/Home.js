import React from 'react';
import DistanceForm from './DistanceForm';
import DistanceCalc from './DistanceCalc';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <DistanceForm />
      </div>
      <div>
        <DistanceCalc />
      </div>
    </div>
  )
}

export default Home
