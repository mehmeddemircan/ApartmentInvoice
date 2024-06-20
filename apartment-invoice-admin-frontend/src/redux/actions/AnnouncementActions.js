import axios from 'axios'
import { ADD_ANNOUNCEMENT_FAIL, ADD_ANNOUNCEMENT_REQUEST, ADD_ANNOUNCEMENT_SUCCESS, DELETE_ANNOUNCEMENT_FAIL, DELETE_ANNOUNCEMENT_REQUEST, DELETE_ANNOUNCEMENT_SUCCESS, GET_ALL_ANNOUNCEMENT_FAIL, GET_ALL_ANNOUNCEMENT_REQUEST, GET_ALL_ANNOUNCEMENT_SUCCESS, GET_ALL_ANNOUNCEMENT_WITH_PAGE_FAIL, GET_ALL_ANNOUNCEMENT_WITH_PAGE_REQUEST, GET_ALL_ANNOUNCEMENT_WITH_PAGE_SUCCESS, UPDATE_ANNOUNCEMENT_FAIL, UPDATE_ANNOUNCEMENT_REQUEST, UPDATE_ANNOUNCEMENT_SUCCESS } from '../constants/AnnouncementConstants';

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
  

    export const AllAnnouncementsWithPage = (pageNumber,pageSize) => async (dispatch) => {
      try {
        dispatch({
          type: GET_ALL_ANNOUNCEMENT_WITH_PAGE_REQUEST
        });
    
        const { data } = await axios.get(`https://localhost:7173/api/Doorman/Announcements/GetAnnouncementsWithPage?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    
        dispatch({
          type: GET_ALL_ANNOUNCEMENT_WITH_PAGE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: GET_ALL_ANNOUNCEMENT_WITH_PAGE_FAIL,
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

    export const UpdateAnnouncement = (announcement) => async (dispatch) => {
      try {
        dispatch({
          type: UPDATE_ANNOUNCEMENT_REQUEST,
        });
    
        const { data } = await axios.put(`https://localhost:7173/api/Doorman/Announcements/UpdateAnnouncement`,announcement);
    
        dispatch({
          type: UPDATE_ANNOUNCEMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: UPDATE_ANNOUNCEMENT_FAIL,
          error: error.response,
        });
      }
    };
  