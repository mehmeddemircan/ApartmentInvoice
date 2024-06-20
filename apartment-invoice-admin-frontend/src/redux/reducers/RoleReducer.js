import { combineReducers } from "redux";
import { ADD_ROLE_FAIL, ADD_ROLE_REQUEST, ADD_ROLE_RESET, ADD_ROLE_SUCCESS, DELETE_ROLE_FAIL, DELETE_ROLE_REQUEST, DELETE_ROLE_RESET, DELETE_ROLE_SUCCESS, GET_ALL_ROLE_FAIL, GET_ALL_ROLE_REQUEST, GET_ALL_ROLE_SUCCESS, UPDATE_ROLE_FAIL, UPDATE_ROLE_REQUEST, UPDATE_ROLE_RESET, UPDATE_ROLE_SUCCESS } from "../constants/RoleConstants";



  export const getAllRoleReducer = (
    state = {roles : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_ROLE_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_ROLE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          roles: action.payload,
        };
  
      case GET_ALL_ROLE_FAIL:
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

  export const addRoleReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_ROLE_REQUEST:
        return { ...state, loading: true };
  
      case ADD_ROLE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_ROLE_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_ROLE_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

  export const deleteUpdateRoleReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_ROLE_REQUEST:
      case UPDATE_ROLE_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_ROLE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_ROLE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_ROLE_FAIL:
      case UPDATE_ROLE_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_ROLE_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_ROLE_RESET:
        return {
          ...state,isUpdated : false
        };
      default:
        return state;
    }
  };
  const roleReducer = combineReducers({
   getAllRole : getAllRoleReducer,
   addRole : addRoleReducer,
   deleteUpdateRole : deleteUpdateRoleReducer

})

export default roleReducer