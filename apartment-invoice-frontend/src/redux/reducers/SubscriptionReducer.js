

import { combineReducers } from "redux";
import { GET_ALL_SUBSCRIPTION_FAIL,  GET_ALL_SUBSCRIPTION_REQUEST,  GET_ALL_SUBSCRIPTION_SUCCESS, GET_SINGLE_SUBSCRIPTION_FAIL, GET_SINGLE_SUBSCRIPTION_REQUEST, GET_SINGLE_SUBSCRIPTION_SUCCESS } from "../constants/SubscriptionConstants";




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

  
  export const getSingleSubscriptionReducer = (
    state = {subscription : {}, success : false },
    action
  ) => {
    switch (action.type) {
      case GET_SINGLE_SUBSCRIPTION_REQUEST:
        return { ...state, loading: true };
  
      case GET_SINGLE_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          subscription: action.payload,
        };
  
      case GET_SINGLE_SUBSCRIPTION_FAIL:
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

  
  const subscriptionReducer = combineReducers({
   getAllSubscription : getAllSubscriptionReducer,
   getSingleSubscription : getSingleSubscriptionReducer

})

export default subscriptionReducer