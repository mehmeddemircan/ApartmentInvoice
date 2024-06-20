

import { combineReducers } from "redux";
import { DELETE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_RESET, DELETE_ORDER_SUCCESS, GET_ALL_ORDER_FAIL, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAIL, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_RESET, UPDATE_ORDER_STATUS_SUCCESS } from "../constants/OrderConstants";

export const getAllOrderReducer = (state = { orders : []  }, action) => {
    switch (action.type) {
      case GET_ALL_ORDER_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          orders: action.payload,
        };
  
      case GET_ALL_ORDER_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };



  export const orderUpdateStatusDeleteReducer = (
    state = { isUpdated: false, isDeleted: false,message: null },
    action
  ) => {
    switch (action.type) {
      case DELETE_ORDER_REQUEST:
      case UPDATE_ORDER_STATUS_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message:action.payload
        };
  
      case UPDATE_ORDER_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          isUpdated: true,
          message:action.payload.message
        };
  
      case DELETE_ORDER_FAIL:
      case UPDATE_ORDER_STATUS_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_ORDER_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_ORDER_STATUS_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      default:
        return state;
    }
  };
  

  const orderReducer = combineReducers({
    getAllOrder : getAllOrderReducer,
    orderUpdateStatusDelete :orderUpdateStatusDeleteReducer
  });
  
  export default orderReducer;