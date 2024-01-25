import { combineReducers } from "redux";
import { ADD_ACTIVITY_FAIL, ADD_ACTIVITY_REQUEST, ADD_ACTIVITY_RESET, ADD_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_RESET, DELETE_ACTIVITY_SUCCESS, GET_ALL_ACTIVITY_FAIL, GET_ALL_ACTIVITY_REQUEST, GET_ALL_ACTIVITY_SUCCESS, UPDATE_ACTIVITY_FAIL, UPDATE_ACTIVITY_REQUEST, UPDATE_ACTIVITY_RESET, UPDATE_ACTIVITY_SUCCESS } from "../constants/ActivityConstants";

export const addActivityReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_ACTIVITY_REQUEST:
        return { ...state, loading: true };
  
      case ADD_ACTIVITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_ACTIVITY_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_ACTIVITY_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };


  export const getAllActivityReducer = (
    state = {activities : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_ACTIVITY_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_ACTIVITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          activities: action.payload,
        };
  
      case GET_ALL_ACTIVITY_FAIL:
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

  

  export const deleteUpdateActivityReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_ACTIVITY_REQUEST:
      case UPDATE_ACTIVITY_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_ACTIVITY_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_ACTIVITY_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_ACTIVITY_FAIL:
      case UPDATE_ACTIVITY_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_ACTIVITY_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_ACTIVITY_RESET:
        return {
          ...state,isUpdated : false
        };
      default:
        return state;
    }
  };

  const activityReducer = combineReducers({
        addActivity : addActivityReducer,
        getAllActivity : getAllActivityReducer,
        deleteUpdateActivity : deleteUpdateActivityReducer
 })
 
 export default activityReducer