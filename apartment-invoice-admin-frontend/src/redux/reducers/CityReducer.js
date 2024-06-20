import { GET_ALL_CITY_FAIL, GET_ALL_CITY_REQUEST, GET_ALL_CITY_SUCCESS } from "../constants/CityConstants";
import { combineReducers } from "redux";
export const getAllCityReducer = (
    state = {cities : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_CITY_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_CITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          cities: action.payload,
        };
  
      case GET_ALL_CITY_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const cityReducer = combineReducers({
    getAllCity : getAllCityReducer,
    
 
 })
 
 export default cityReducer