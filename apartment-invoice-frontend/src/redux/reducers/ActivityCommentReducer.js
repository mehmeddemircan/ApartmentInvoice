

import { combineReducers } from "redux";
import { DELETE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_RESET, DELETE_POST_SUCCESS, GET_ALL_POST_FAIL, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_ALL_POST_WITH_PAGE_FAIL, GET_ALL_POST_WITH_PAGE_REQUEST, GET_ALL_POST_WITH_PAGE_SUCCESS, SEND_POST_FAIL, SEND_POST_REQUEST, SEND_POST_RESET, SEND_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_RESET, UPDATE_POST_SUCCESS } from "../constants/PostConstants";
import { ADD_ACTIVITY_COMMENT_FAIL, ADD_ACTIVITY_COMMENT_REQUEST, ADD_ACTIVITY_COMMENT_RESET, ADD_ACTIVITY_COMMENT_SUCCESS, DELETE_ACTIVITY_COMMENT_FAIL, DELETE_ACTIVITY_COMMENT_REQUEST, DELETE_ACTIVITY_COMMENT_RESET, DELETE_ACTIVITY_COMMENT_SUCCESS, GET_ACTIVITY_COMMENTS_BY_USER_FAIL, GET_ACTIVITY_COMMENTS_BY_USER_REQUEST, GET_ACTIVITY_COMMENTS_BY_USER_SUCCESS, GET_ACTIVITY_COMMENTS_FAIL, GET_ACTIVITY_COMMENTS_REQUEST, GET_ACTIVITY_COMMENTS_SUCCESS, UPDATE_ACTIVITY_COMMENT_FAIL, UPDATE_ACTIVITY_COMMENT_REQUEST, UPDATE_ACTIVITY_COMMENT_RESET, UPDATE_ACTIVITY_COMMENT_SUCCESS } from "../constants/ActivityCommentConstants";

export const getActivityCommentsReducer = (state = { activityComments : []  }, action) => {
    switch (action.type) {
      case GET_ACTIVITY_COMMENTS_REQUEST:
        return { ...state, loading: true };
  
      case GET_ACTIVITY_COMMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          activityComments: action.payload,
        };
  
      case GET_ACTIVITY_COMMENTS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const getActivityCommentsByUserReducer = (state = { userActivityComments : []  }, action) => {
    switch (action.type) {
      case GET_ACTIVITY_COMMENTS_BY_USER_REQUEST:
        return { ...state, loading: true };
  
      case GET_ACTIVITY_COMMENTS_BY_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          userActivityComments: action.payload,
        };
  
      case GET_ACTIVITY_COMMENTS_BY_USER_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const sendActivityCommentReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_ACTIVITY_COMMENT_REQUEST:
        return { ...state, loading: true };
  
      case ADD_ACTIVITY_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_ACTIVITY_COMMENT_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_ACTIVITY_COMMENT_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

  export const activityCommentUpdateDeleteReducer = (
    state = { isUpdated: false, isDeleted: false,message: null },
    action
  ) => {
    switch (action.type) {
      case DELETE_ACTIVITY_COMMENT_REQUEST:
      case UPDATE_ACTIVITY_COMMENT_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_ACTIVITY_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message:action.payload
        };
  
      case UPDATE_ACTIVITY_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          isUpdated: true,
          message:action.payload.message
        };
  
      case DELETE_ACTIVITY_COMMENT_FAIL:
      case UPDATE_ACTIVITY_COMMENT_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_ACTIVITY_COMMENT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_ACTIVITY_COMMENT_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      default:
        return state;
    }
  };
  

  const activityCommentReducer = combineReducers({
    sendActivityComment : sendActivityCommentReducer,
    getActivityComments : getActivityCommentsReducer,
    activityCommentUpdateDelete : activityCommentUpdateDeleteReducer,
    getActivityCommentsByUser : getActivityCommentsByUserReducer
  });
  
  export default activityCommentReducer;