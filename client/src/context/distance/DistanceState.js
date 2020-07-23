import React, { useReducer } from 'react';
import axios from 'axios';
import DistanceContext from './distanceContext';
import distanceReducer from './distanceReducer'
import {
  ADD_DISTANCE,
  GET_DISTANCE,
  DISTANCE_ERROR
} from '../types';

const DistanceState = props => {
  const initialState = {
    dist: null,
    error: null,
    calc: '',
    resp: ''
  }

  const [state, dispatch] = useReducer(distanceReducer, initialState);

  //Add Distance
  const addDistance = async dist => {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/distance', dist, config);
      dispatch({ type : ADD_DISTANCE, payload: res.data });
    } catch(err){
      dispatch({ type: DISTANCE_ERROR, payload: err.response });
    } 
  }

  // Get Contact
  const getDistance = async distCal => {
    try {
      const res = await axios.get('/api/distance?id='+distCal.un_id+'&date='+distCal.date+'&start_time='+distCal.start_time+'&end_time='+distCal.end_time); 
      dispatch({ type: GET_DISTANCE, payload: res.data });
    } catch(err) {
      dispatch({ type: DISTANCE_ERROR, payload:err.response });
    }
  }

  return (
    <DistanceContext.Provider
      value={{
        dist: state.dist,
        error: state.error,
        calc: state.calc,
        resp: state.resp,
        addDistance,
        getDistance
      }}
    >
      {props.children}
    </DistanceContext.Provider>
  )
}

export default DistanceState;
