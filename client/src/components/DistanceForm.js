import React, { useState, useContext, Fragment } from 'react';
import DistanceContext from '../context/distance/distanceContext';

const DistanceForm = () => {
  const distanceContext = useContext(DistanceContext);
  const { addDistance, resp } = distanceContext;

  var re = resp;
  const [dist, setDist] = useState({
    name: '',
    unq_id: '',
    distance: '',
    d_time: '',
    d_date: ''
  });

  const onChange = e => setDist({ ...dist, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addDistance(dist);
    setDist({
      name: '',
      unq_id: '',
      distance: '',
      d_time: '',
      d_date: ''
    });
    
  }

  const { name, unq_id, distance, d_time, d_date } = dist;

  return (
    <Fragment>
    <form onSubmit={onSubmit}>
    <h2 className="text-primary">Add Distance</h2>
    
    <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required/>
    
    <input type="text" placeholder="Unique ID" name="unq_id" value={unq_id} onChange={onChange} required/>
    
    <input type="text" placeholder="Distance" name="distance" value={distance} onChange={onChange} required/>

    <input type="text" placeholder="Time format 24 hour (hh:mm)" name="d_time" value={d_time} onChange={onChange} required/>

    <input type="text" placeholder="Date format (dd/mm/yyyy)" name="d_date" value={d_date} onChange={onChange} required/>

    <div>
      <input type="submit" value="Add Distance" className="btn btn-primary btn-block"/> 
    </div>
  </form>
    
    <h3>
      {
        re ? re : ''
      }
    </h3>
  </Fragment>

  )
}

export default DistanceForm
