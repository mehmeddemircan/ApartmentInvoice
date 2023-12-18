import { combineReducers } from "redux";
import { DELETE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_RESET, DELETE_POST_SUCCESS, GET_ALL_POST_FAIL, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_ALL_POST_WITH_PAGE_FAIL, GET_ALL_POST_WITH_PAGE_REQUEST, GET_ALL_POST_WITH_PAGE_SUCCESS, SEND_POST_FAIL, SEND_POST_REQUEST, SEND_POST_RESET, SEND_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_RESET, UPDATE_POST_SUCCESS } from "../constants/PostConstants";

export const getAllPostReducer = (state = { posts : []  }, action) => {
    switch (action.type) {
      case GET_ALL_POST_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          posts: action.payload,
        };
  
      case GET_ALL_POST_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const getAllPostWithPageReducer = (state = { posts : []  }, action) => {
    switch (action.type) {
      case GET_ALL_POST_WITH_PAGE_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_POST_WITH_PAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          posts: action.payload,
        };
  
      case GET_ALL_POST_WITH_PAGE_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const sendPostReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case SEND_POST_REQUEST:
        return { ...state, loading: true };
  
      case SEND_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case SEND_POST_FAIL:
        return { ...state, loading: false, error: action.payload };
      case SEND_POST_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

//   export const getSinglePOSTReducer = (state = { post : {} }, action) => {
//     switch (action.type) {
//       case GET_SINGLE_POST_REQUEST:
//         return { ...state, loading: true };
  
//       case GET_SINGLE_POST_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           success: true,
//           post: action.payload,
//         };
  
//       case GET_SINGLE_POST_FAIL:
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
  




  export const postUpdateDeleteReducer = (
    state = { isUpdated: false, isDeleted: false,message: null },
    action
  ) => {
    switch (action.type) {
      case DELETE_POST_REQUEST:
      case UPDATE_POST_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message:action.payload
        };
  
      case UPDATE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          isUpdated: true,
          message:action.payload.message
        };
  
      case DELETE_POST_FAIL:
      case UPDATE_POST_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_POST_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_POST_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      default:
        return state;
    }
  };
  
const postReducer = combineReducers({
    getAllPost : getAllPostReducer,
    sendPost : sendPostReducer ,
    postUpdateDelete : postUpdateDeleteReducer,
    getAllPostWithPage : getAllPostWithPageReducer
  });
  
  export default postReducer;