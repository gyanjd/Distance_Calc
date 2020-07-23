import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

import DistanceState from './context/distance/DistanceState';

import './App.css';

function App() {
  return (
    <DistanceState>
      <Fragment>
        <Navbar/>
        <div className="container">
        <Home/>
        </div>
      </Fragment>
    </DistanceState>
  );
}

export default App;
