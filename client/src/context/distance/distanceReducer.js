import {
  ADD_DISTANCE,
  GET_DISTANCE,
  DISTANCE_ERROR
} from '../types';

export default (state, action) => {
  switch(action.type){
    case ADD_DISTANCE:
      return {
        ...state,
        resp: action.payload,
        calc: ''
      }
    case GET_DISTANCE:
      return {
        ...state,
        calc: action.payload,
        resp: ''
      }
    case DISTANCE_ERROR:
      return {
        ...state,
        resp: action.payload
      }
    default:
      return state;
  }
}