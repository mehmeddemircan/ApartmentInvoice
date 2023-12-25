import axios from 'axios'
import { ADD_ANNOUNCEMENT_FAIL, ADD_ANNOUNCEMENT_REQUEST, ADD_ANNOUNCEMENT_SUCCESS, DELETE_ANNOUNCEMENT_FAIL, DELETE_ANNOUNCEMENT_REQUEST, DELETE_ANNOUNCEMENT_SUCCESS, GET_ALL_ANNOUNCEMENT_FAIL, GET_ALL_ANNOUNCEMENT_REQUEST, GET_ALL_ANNOUNCEMENT_SUCCESS } from '../constants/AnnouncementConstants';

export const AddAnnouncement = (announcement) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_ANNOUNCEMENT_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7173/api/Doorman/Announcements/AddNewAnnouncement`,
        announcement
      );
  
      dispatch({
        type: ADD_ANNOUNCEMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ANNOUNCEMENT_FAIL,
        error: error.response,
      });
    }
  };
  
  //announcements by page and limit  
  export const AllAnnouncements = () => async (dispatch) => {
      try {
        dispatch({
          type: GET_ALL_ANNOUNCEMENT_REQUEST,
        });
    
        const { data } = await axios.get(`https://localhost:7173/api/Doorman/Announcements/GetAllAnnouncement`);
    
        dispatch({
          type: GET_ALL_ANNOUNCEMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: GET_ALL_ANNOUNCEMENT_FAIL,
          error: error.response,
        });
      }
    };
  
  
  
  // anket sil 
    export const DeleteAnnouncement = (announcementId) => async (dispatch) => {
      try {
        dispatch({
          type: DELETE_ANNOUNCEMENT_REQUEST,
        });
    
        const { data } = await axios.delete(`https://localhost:7173/api/Doorman/Announcements/DeleteAnnouncement/${announcementId}`);
    
        dispatch({
          type: DELETE_ANNOUNCEMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: DELETE_ANNOUNCEMENT_FAIL,
          error: error.response,
        });
      }
    };