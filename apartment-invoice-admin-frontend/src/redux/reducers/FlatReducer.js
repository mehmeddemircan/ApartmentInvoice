import { combineReducers } from "redux";
import { ADD_FLAT_FAIL, ADD_FLAT_REQUEST, ADD_FLAT_RESET, ADD_FLAT_SUCCESS, GET_ALL_FLAT_FAIL, GET_ALL_FLAT_REQUEST, GET_ALL_FLAT_SUCCESS } from "../constants/FlatConstants";



export const getAllFlatReducer = (
    state = {flats : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_FLAT_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_FLAT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          flats: action.payload,
        };
  
      case GET_ALL_FLAT_FAIL:
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

  export const addFlatReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_FLAT_REQUEST:
        return { ...state, loading: true };
  
      case ADD_FLAT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_FLAT_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_FLAT_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };
  const flatReducer = combineReducers({
    getAllFlat : getAllFlatReducer,
    addFlat : addFlatReducer
 
 })
 
 export default flatReducer