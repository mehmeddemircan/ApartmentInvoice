import { combineReducers } from "redux";
import { SEND_COMPLAIN_FAIL, SEND_COMPLAIN_REQUEST, SEND_COMPLAIN_RESET, SEND_COMPLAIN_SUCCESS } from "../constants/ComplainConstants";

export const sendComplainReducer = (
    state = {
      message: "",
    },
    action
  ) => {
    switch (action.type) {
      case SEND_COMPLAIN_REQUEST:
        return { ...state, loading: true };
  
      case SEND_COMPLAIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAdded: true,
          message: action.payload.message,
        };
  
      case SEND_COMPLAIN_FAIL:
        return {
          ...state,
          loading: false,
          isAdded: false,
          error: action.payload,
        };
      case SEND_COMPLAIN_RESET:
        return {
          ...state,
          isAdded: false,
        };
      default:
        return state;
    }
  };

  const complainReducer = combineReducers({
    sendComplain : sendComplainReducer
  });
  
  export default complainReducer;