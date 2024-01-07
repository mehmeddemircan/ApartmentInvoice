import axios from 'axios'
import { GET_ALL_ANNOUNCEMENT_FAIL, GET_ALL_ANNOUNCEMENT_REQUEST, GET_ALL_ANNOUNCEMENT_SUCCESS } from '../constants/AnnouncementConstants';

export const AllAnnouncement = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_ANNOUNCEMENT_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7173/api/Doorman/Announcements/GetAnnouncementByDateposted`
      );
  
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