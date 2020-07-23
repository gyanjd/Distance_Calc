import React, { useState, useContext, Fragment } from 'react';
import DistanceContext from '../context/distance/distanceContext';

const DistanceCalc = () => {
  const distanceContext = useContext(DistanceContext);
  const { getDistance, calc } = distanceContext;
  // console.log(calc)

  const calc_data = calc;
 
  const [distCal, setDistCalc] = useState({
    un_id: '',
    start_time: '',
    end_time: '',
    date: ''
  });
  
  const onChange = e => setDistCalc({ ...distCal, [e.target.name]: e.target.value });
  
  const onSubmit = e => {
    e.preventDefault();
    getDistance(distCal);
    setDistCalc({
      un_id: '',
      start_time: '',
      end_time: '',
      date: ''
    });
  }
  
  const { un_id, start_time, end_time, date } = distCal;

  return (
    <Fragment>
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Calculate Distance</h2>
      
      <input type="text" placeholder="Unique ID" name="un_id" value={un_id} onChange={onChange} required/>

      <input type="text" placeholder="Start Time format 24 hour (hh:mm)" name="start_time" value={start_time} onChange={onChange} required/>
      
      <input type="text" placeholder="End Time format 24 hour (hh:mm)" name="end_time" value={end_time} onChange={onChange} required/>

      <input type="text" placeholder="Date format (dd/mm/yyyy)" name="date" value={date} onChange={onChange} required/>

      <div>
        <input type="submit" value="Add Distance" className="btn btn-primary btn-block"/> 
      </div>
    </form>

    <h1>
      {calc_data ? 'Your Total Distance Travel : ' + calc_data : ''}
    </h1>
    </Fragment>
  )
}

export default DistanceCalc
