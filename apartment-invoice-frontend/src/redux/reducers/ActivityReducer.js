import { combineReducers } from "redux";
import { GET_ACTIVITY_DETAILS_FAIL, GET_ACTIVITY_DETAILS_REQUEST, GET_ACTIVITY_DETAILS_SUCCESS, GET_ALL_ACTIVITY_FAIL, GET_ALL_ACTIVITY_REQUEST, GET_ALL_ACTIVITY_SUCCESS } from "../constants/ActivityConstants";

export const getAllActivityReducer = (state = { activities : []  }, action) => {
    switch (action.type) {
      case GET_ALL_ACTIVITY_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_ACTIVITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          activities: action.payload,
        };
  
      case GET_ALL_ACTIVITY_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const getSingleActivityReducer = (state = { activity : {}  }, action) => {
    switch (action.type) {
      case GET_ACTIVITY_DETAILS_REQUEST:
        return { ...state, loading: true };
  
      case GET_ACTIVITY_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          activity: action.payload,
        };
  
      case GET_ACTIVITY_DETAILS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };


  const activityReducer = combineReducers({
        getAllActivity : getAllActivityReducer,
        getSingleActivity :getSingleActivityReducer
  });
  
  export default activityReducer;