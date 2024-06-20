import { combineReducers } from "redux";
import { GET_ALL_COMPLAIN_FAIL, GET_ALL_COMPLAIN_REQUEST, GET_ALL_COMPLAIN_SUCCESS, GET_COMPLAIN_WITH_PAGE_FAIL, GET_COMPLAIN_WITH_PAGE_REQUEST, GET_COMPLAIN_WITH_PAGE_SUCCESS } from "../constants/ComplainConstants";



export const getAllComplainReducer = (
    state = { complains : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_COMPLAIN_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_COMPLAIN_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          complains: action.payload,
        };
  
      case GET_ALL_COMPLAIN_FAIL:
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

  export const getAllComplainWithPageReducer = (
    state = { complains : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_COMPLAIN_WITH_PAGE_REQUEST:
        return { ...state, loading: true };
  
      case GET_COMPLAIN_WITH_PAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          complains: action.payload,
        };
  
      case GET_COMPLAIN_WITH_PAGE_FAIL:
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
  const complainReducer = combineReducers({
    getAllComplain : getAllComplainReducer,
    getAllComplainWithPage : getAllComplainWithPageReducer
  })

  export default complainReducer