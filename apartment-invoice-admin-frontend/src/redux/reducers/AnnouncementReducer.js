
import { combineReducers } from "redux";
import { ADD_ANNOUNCEMENT_FAIL, ADD_ANNOUNCEMENT_REQUEST, ADD_ANNOUNCEMENT_RESET, ADD_ANNOUNCEMENT_SUCCESS, DELETE_ANNOUNCEMENT_FAIL, DELETE_ANNOUNCEMENT_REQUEST, DELETE_ANNOUNCEMENT_RESET, DELETE_ANNOUNCEMENT_SUCCESS, GET_ALL_ANNOUNCEMENT_FAIL, GET_ALL_ANNOUNCEMENT_REQUEST, GET_ALL_ANNOUNCEMENT_SUCCESS, GET_ALL_ANNOUNCEMENT_WITH_PAGE_FAIL, GET_ALL_ANNOUNCEMENT_WITH_PAGE_REQUEST, GET_ALL_ANNOUNCEMENT_WITH_PAGE_SUCCESS, UPDATE_ANNOUNCEMENT_FAIL, UPDATE_ANNOUNCEMENT_REQUEST, UPDATE_ANNOUNCEMENT_RESET, UPDATE_ANNOUNCEMENT_SUCCESS } from "../constants/AnnouncementConstants";
export const getAllAnnouncementReducer = (
    state = { announcements : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_ANNOUNCEMENT_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_ANNOUNCEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          announcements: action.payload,
        };
  
      case GET_ALL_ANNOUNCEMENT_FAIL:
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

  export const getAllAnnouncementWithPageReducer = (
    state = { announcements : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_ANNOUNCEMENT_WITH_PAGE_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_ANNOUNCEMENT_WITH_PAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          announcements: action.payload,
        };
  
      case GET_ALL_ANNOUNCEMENT_WITH_PAGE_FAIL:
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

  export const addAnnouncementReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_ANNOUNCEMENT_REQUEST:
        return { ...state, loading: true };
  
      case ADD_ANNOUNCEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_ANNOUNCEMENT_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_ANNOUNCEMENT_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

  export const deleteUpdateAnnouncementReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_ANNOUNCEMENT_REQUEST:
      case UPDATE_ANNOUNCEMENT_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_ANNOUNCEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_ANNOUNCEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_ANNOUNCEMENT_FAIL:
      case UPDATE_ANNOUNCEMENT_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_ANNOUNCEMENT_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_ANNOUNCEMENT_RESET:
        return {
          ...state,isUpdated : false
        };
      default:
        return state;
    }
  };
  const announcementReducer = combineReducers({
    getAllAnnouncement : getAllAnnouncementReducer,
    addAnnouncement : addAnnouncementReducer,
    deleteUpdateAnnouncement : deleteUpdateAnnouncementReducer,
    getAllAnnouncementWithPage : getAllAnnouncementWithPageReducer
 })
 
 export default announcementReducer