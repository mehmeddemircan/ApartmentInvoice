

import { combineReducers } from "redux";
import { ADD_ROLE_TO_USER_FAIL, ADD_ROLE_TO_USER_REQUEST, ADD_ROLE_TO_USER_RESET, ADD_ROLE_TO_USER_SUCCESS, DELETE_USER_REQUEST, DELETE_USER_RESET, DELETE_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_RESET, UPDATE_USER_SUCCESS } from "../constants/UserConstants";
export const getAllUserReducer = (
    state = { users : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_USER_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          users: action.payload,
        };
  
      case GET_ALL_USER_FAIL:
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

  export const addRoleToUserReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_ROLE_TO_USER_REQUEST:
        return { ...state, loading: true };
  
      case ADD_ROLE_TO_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_ROLE_TO_USER_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_ROLE_TO_USER_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };


  export const deleteUpdateUserReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_USER_REQUEST:
      case UPDATE_USER_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_USER_REQUEST:
      case UPDATE_USER_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_USER_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_USER_RESET:
        return {
          ...state,isUpdated : false
        };
      default:
        return state;
    }
  };
  const userReducer = combineReducers({
    getAllUser : getAllUserReducer,
    deleteUpdateUser : deleteUpdateUserReducer,
    addRoleToUser : addRoleToUserReducer
 
 })
 
 export default userReducer