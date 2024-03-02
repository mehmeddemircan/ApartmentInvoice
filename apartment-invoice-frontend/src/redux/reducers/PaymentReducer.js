import { combineReducers } from "redux";
import { DONATE_FAIL, DONATE_REQUEST, DONATE_RESET, DONATE_SUCCESS, PAY_SUBSCRIPTION_FAIL, PAY_SUBSCRIPTION_REQUEST, PAY_SUBSCRIPTION_SUCCESS } from "../constants/PaymentConstants";


export const paySubscriptionReducer = (
    state = {
      message: "",
    },
    action
  ) => {
    switch (action.type) {
      case PAY_SUBSCRIPTION_REQUEST:
        return { ...state, loading: true };
  
      case PAY_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isPayed: true,
          message: action.payload.message,
        };
  
      case PAY_SUBSCRIPTION_FAIL:
        return {
          ...state,
          loading: false,
          isPayed: false,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };


  export const payDonateReducer = (
    state = {
      message: "",
    },
    action
  ) => {
    switch (action.type) {
      case DONATE_REQUEST:
        return { ...state, loading: true };
  
      case DONATE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDonated: true,
          message: action.payload.message,
        };
  
      case DONATE_FAIL:
        return {
          ...state,
          loading: false,
          isDonated: false,
          error: action.payload,
        };
      case DONATE_RESET:
        return {
          ...state,
          isDonated: false,
        };
      default:
        return state;
    }
  };
  const paymentReducer = combineReducers({
    paySubscription : paySubscriptionReducer,
    payDonate : payDonateReducer
  });
  
  export default paymentReducer;