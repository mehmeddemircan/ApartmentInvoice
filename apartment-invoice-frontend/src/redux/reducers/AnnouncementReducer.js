import { combineReducers } from "redux";
import { GET_ALL_ANNOUNCEMENT_FAIL, GET_ALL_ANNOUNCEMENT_REQUEST, GET_ALL_ANNOUNCEMENT_SUCCESS } from "../constants/AnnouncementConstants";

export const getAllAnnouncementReducer = (state = { announcements : []  }, action) => {
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
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const announcementReducer = combineReducers({
    getAllAnnouncement : getAllAnnouncementReducer
  });
  
  export default announcementReducer;