import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
  } from "../constants/AuthConstants";
  
  const initialState = {
    token: null,
    user: {
      firstName:"",
      lastName:"",
      name: "",
      email: "",
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
 
        return {
          ...state,
          loading: true,
          success: false,
          authenticating: true,
          authenticate: false,
        };
  
      case LOGIN_SUCCESS:

        return {
          ...state,
          loading: false,
          success: true,
          authenticating: false,
          authenticate: true,
          user: action.payload.user,
          token : action.payload.token
        };
  
      case LOGIN_FAIL:

        return {
          ...state,
          loading: false,
          authenticating: false,
          authenticate: false,
          success: false,
          error: action.payload,
        };
      case LOGOUT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGOUT_SUCCESS: {
        return {
          ...initialState,
        };
      }
      case LOGOUT_FAIL: {
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      }
      default:
        return state;
    }
  };
  