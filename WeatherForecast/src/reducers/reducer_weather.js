import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
if (action.error=== true){
  return state;
}
  switch (action.type){
  case FETCH_WEATHER:
    return [action.payload.data, ...state ]; // [city, city, city ] NOT [ city, [city, city]]
  }
  return state;

}
