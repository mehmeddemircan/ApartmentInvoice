import { GET_ACTIVITY_DETAILS_FAIL, GET_ACTIVITY_DETAILS_REQUEST, GET_ACTIVITY_DETAILS_SUCCESS, GET_ALL_ACTIVITY_FAIL, GET_ALL_ACTIVITY_REQUEST, GET_ALL_ACTIVITY_SUCCESS } from "../constants/ActivityConstants";
import axios from 'axios'


export const AllActivity = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_ACTIVITY_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7173/api/Activities/GetAllActivity`
      );
  
      dispatch({
        type: GET_ALL_ACTIVITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_ACTIVITY_FAIL,
        error: error.response,
      });
    }
  };

  export const GetSingleActivity = (id) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ACTIVITY_DETAILS_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7173/api/Activities/GetActivityById/${id}`
      );
  
      dispatch({
        type: GET_ACTIVITY_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ACTIVITY_DETAILS_FAIL,
        error: error.response,
      });
    }
  };