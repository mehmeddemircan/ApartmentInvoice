import { combineReducers } from "redux";
import { ADD_FLAT_FAIL, ADD_FLAT_REQUEST, ADD_FLAT_RESET, ADD_FLAT_SUCCESS, ADD_USER_TO_FLAT_FAIL, ADD_USER_TO_FLAT_REQUEST, ADD_USER_TO_FLAT_RESET, ADD_USER_TO_FLAT_SUCCESS, DELETE_FLAT_FAIL, DELETE_FLAT_REQUEST, DELETE_FLAT_RESET, DELETE_FLAT_SUCCESS, GET_ALL_FLAT_FAIL, GET_ALL_FLAT_REQUEST, GET_ALL_FLAT_SUCCESS, UPDATE_FLAT_FAIL, UPDATE_FLAT_REQUEST, UPDATE_FLAT_RESET, UPDATE_FLAT_SUCCESS } from "../constants/FlatConstants";



export const getAllFlatReducer = (
    state = { flats : [], success : false },
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

  export const deleteUpdateFlatReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_FLAT_REQUEST:
      case UPDATE_FLAT_REQUEST:
        case ADD_USER_TO_FLAT_REQUEST: 
        return { ...state, loading: true };
  
      case DELETE_FLAT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_FLAT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
        case ADD_USER_TO_FLAT_SUCCESS:
          return {
            ...state,
            loading: false,
            isAddedUser: true,
            message : action.payload.message 
          
          };
  
      case DELETE_FLAT_FAIL:
      case UPDATE_FLAT_FAIL:
      case ADD_USER_TO_FLAT_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_FLAT_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_FLAT_RESET:
        return {
          ...state,isUpdated : false
        };

        case ADD_USER_TO_FLAT_RESET:
          return {
            ...state,isAddedUser : false
          };
      default:
        return state;
    }
  };
  const flatReducer = combineReducers({
    getAllFlat : getAllFlatReducer,
    addFlat : addFlatReducer,
    deleteUpdateFlat : deleteUpdateFlatReducer
 
 })
 
 export default flatReducer