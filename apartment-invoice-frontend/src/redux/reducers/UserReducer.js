import { combineReducers } from "redux";
import { GET_MY_POSTS_FAIL, GET_MY_POSTS_REQUEST, GET_MY_POSTS_SUCCESS } from "../constants/UserConstants";

export const getMyPostReducer = (state = { myPosts : []  }, action) => {
    switch (action.type) {
      case GET_MY_POSTS_REQUEST:
        return { ...state, loading: true };
  
      case GET_MY_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          myPosts: action.payload,
        };
  
      case GET_MY_POSTS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  const userReducer = combineReducers({
    getMyPost : getMyPostReducer
  });
  
  export default userReducer;