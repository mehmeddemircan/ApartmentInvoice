import { combineReducers } from "redux";
import { ADD_BLOCK_FAIL, ADD_BLOCK_REQUEST, ADD_BLOCK_RESET, ADD_BLOCK_SUCCESS, DELETE_BLOCK_FAIL, DELETE_BLOCK_REQUEST, DELETE_BLOCK_RESET, DELETE_BLOCK_SUCCESS, GET_ALL_BLOCK_FAIL, GET_ALL_BLOCK_REQUEST, GET_ALL_BLOCK_SUCCESS, UPDATE_BLOCK_FAIL, UPDATE_BLOCK_REQUEST, UPDATE_BLOCK_RESET, UPDATE_BLOCK_SUCCESS } from "../constants/BlockConstants";



  export const getAllBlockReducer = (
    state = {blocks : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_BLOCK_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_BLOCK_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          blocks: action.payload,
        };
  
      case GET_ALL_BLOCK_FAIL:
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

  export const addBlockReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_BLOCK_REQUEST:
        return { ...state, loading: true };
  
      case ADD_BLOCK_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_BLOCK_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_BLOCK_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

  export const deleteUpdateBlockReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_BLOCK_REQUEST:
      case UPDATE_BLOCK_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_BLOCK_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_BLOCK_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_BLOCK_FAIL:
      case UPDATE_BLOCK_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_BLOCK_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_BLOCK_RESET:
        return {
          ...state,isUpdated : false
        };
      default:
        return state;
    }
  };
  const blockReducer = combineReducers({
   getAllBlock : getAllBlockReducer,
   addBlock : addBlockReducer,
   deleteUpdateBlock : deleteUpdateBlockReducer

})

export default blockReducer