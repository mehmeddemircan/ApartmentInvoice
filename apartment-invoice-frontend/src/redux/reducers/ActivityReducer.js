import { combineReducers } from "redux";
import { CHECK_USER_JOINED_FAIL, CHECK_USER_JOINED_REQUEST, CHECK_USER_JOINED_SUCCESS, GET_ACTIVITY_DETAILS_FAIL, GET_ACTIVITY_DETAILS_REQUEST, GET_ACTIVITY_DETAILS_SUCCESS, GET_ACTIVITY_USERS_FAIL, GET_ACTIVITY_USERS_REQUEST, GET_ACTIVITY_USERS_SUCCESS, GET_ALL_ACTIVITY_FAIL, GET_ALL_ACTIVITY_REQUEST, GET_ALL_ACTIVITY_SUCCESS, JOIN_ACTIVITY_FAIL, JOIN_ACTIVITY_REQUEST, JOIN_ACTIVITY_RESET, JOIN_ACTIVITY_SUCCESS, LEAVE_ACTIVITY_FAIL, LEAVE_ACTIVITY_REQUEST, LEAVE_ACTIVITY_RESET, LEAVE_ACTIVITY_SUCCESS } from "../constants/ActivityConstants";

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

  export const joinActivityReducer = (state = { message: null ,success : false , isJoined  : false}, action) => {
    switch (action.type) {
      case JOIN_ACTIVITY_REQUEST:
        return { ...state, loading: true };
  
      case JOIN_ACTIVITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isJoined : true ,
          message : action.payload.message
        };
  
      case JOIN_ACTIVITY_FAIL:
        return { ...state, loading: false, error: action.payload };
      case JOIN_ACTIVITY_RESET:
          return { ...state, success: false , isJoined : false };
      default:
        return state;
    }
  };

  export const leaveActivityReducer = (state = { message: null ,success : false , isLeft  : false}, action) => {
    switch (action.type) {
      case LEAVE_ACTIVITY_REQUEST:
        return { ...state, loading: true };
  
      case LEAVE_ACTIVITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isLeft : true ,
          message : action.payload.message
        };
  
      case LEAVE_ACTIVITY_FAIL:
        return { ...state, loading: false, error: action.payload };
      case LEAVE_ACTIVITY_RESET:
         return { ...state, success: false , isLeft : false };
      default:
        return state;
    }
  };

  export const getUsersOfActivityReducer = (state = { userActivities : []  }, action) => {
    switch (action.type) {
      case GET_ACTIVITY_USERS_REQUEST:
        return { ...state, loading: true };
  
      case GET_ACTIVITY_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          userActivities: action.payload,
        };
  
      case GET_ACTIVITY_USERS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const checkUserActivityReducer = (state = { userActivity : {}  }, action) => {
    switch (action.type) {
      case CHECK_USER_JOINED_REQUEST:
        return { ...state, loading: true };
  
      case CHECK_USER_JOINED_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          userActivity: action.payload,
        };
  
      case CHECK_USER_JOINED_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  const activityReducer = combineReducers({
        getAllActivity : getAllActivityReducer,
        getSingleActivity :getSingleActivityReducer,
        joinActivity : joinActivityReducer,
        leaveActivity : leaveActivityReducer,
        getUsersOfActivity : getUsersOfActivityReducer,
        checkUserActivity : checkUserActivityReducer
  });
  
  export default activityReducer;