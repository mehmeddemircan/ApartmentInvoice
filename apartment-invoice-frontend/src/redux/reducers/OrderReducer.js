

import { combineReducers } from "redux";
import { ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_RESET, ADD_ORDER_SUCCESS, DELETE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_RESET, DELETE_ORDER_SUCCESS, GET_MY_ORDERS_FAIL, GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS, UPDATE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_RESET, UPDATE_ORDER_SUCCESS } from "../constants/OrderConstants";


export const getMyOrdersReducer = (state = { myOrders : []  }, action) => {
    switch (action.type) {
      case GET_MY_ORDERS_REQUEST:
        return { ...state, loading: true };
  
      case GET_MY_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          myOrders: action.payload,
        };
  
      case GET_MY_ORDERS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };



  export const addOrderReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_ORDER_REQUEST:
        return { ...state, loading: true };
  
      case ADD_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_ORDER_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_ORDER_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

  export const orderDeleteUpdateReducer = (
    state = { isUpdated: false, isDeleted: false,message: null },
    action
  ) => {
    switch (action.type) {
      case DELETE_ORDER_REQUEST:
      case UPDATE_ORDER_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message:action.payload
        };
  
      case UPDATE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          isUpdated: true,
          message:action.payload.message
        };
  
      case DELETE_ORDER_FAIL:
      case UPDATE_ORDER_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_ORDER_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_ORDER_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      default:
        return state;
    }
  };
  

  const orderReducer = combineReducers({
    addOrder : addOrderReducer,
    getMyOrders : getMyOrdersReducer,
    orderDeleteUpdate :orderDeleteUpdateReducer
  });
  
  export default orderReducer;