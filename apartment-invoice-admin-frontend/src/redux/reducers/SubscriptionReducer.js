

import { combineReducers } from "redux";
import { ADD_SUBSCRIPTION_FAIL, ADD_SUBSCRIPTION_REQUEST, ADD_SUBSCRIPTION_RESET, ADD_SUBSCRIPTION_SUCCESS, DELETE_SUBSCRIPTION_FAIL, DELETE_SUBSCRIPTION_REQUEST, DELETE_SUBSCRIPTION_RESET, DELETE_SUBSCRIPTION_SUCCESS, GET_ALL_SUBSCRIPTION_FAIL, GET_ALL_SUBSCRIPTION_REQUEST, GET_ALL_SUBSCRIPTION_SUCCESS, UPDATE_SUBSCRIPTION_FAIL, UPDATE_SUBSCRIPTION_REQUEST, UPDATE_SUBSCRIPTION_RESET, UPDATE_SUBSCRIPTION_SUCCESS } from "../constants/SubscriptionConstants";



  export const getAllSubscriptionReducer = (
    state = {subscriptions : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_SUBSCRIPTION_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          subscriptions: action.payload,
        };
  
      case GET_ALL_SUBSCRIPTION_FAIL:
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

  export const addSubscriptionReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_SUBSCRIPTION_REQUEST:
        return { ...state, loading: true };
  
      case ADD_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_SUBSCRIPTION_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_SUBSCRIPTION_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

  export const deleteUpdateSubscriptionReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_SUBSCRIPTION_REQUEST:
      case UPDATE_SUBSCRIPTION_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_SUBSCRIPTION_FAIL:
      case UPDATE_SUBSCRIPTION_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_SUBSCRIPTION_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_SUBSCRIPTION_RESET:
        return {
          ...state,isUpdated : false
        };
      default:
        return state;
    }
  };
  const subscriptionReducer = combineReducers({
   getAllSubscription : getAllSubscriptionReducer,
   addSubscription : addSubscriptionReducer,
   deleteUpdateSubscription : deleteUpdateSubscriptionReducer

})

export default subscriptionReducer