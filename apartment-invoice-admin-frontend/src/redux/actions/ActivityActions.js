import { ADD_ACTIVITY_FAIL, ADD_ACTIVITY_REQUEST, ADD_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_SUCCESS, GET_ALL_ACTIVITY_FAIL, GET_ALL_ACTIVITY_REQUEST, GET_ALL_ACTIVITY_SUCCESS, UPDATE_ACTIVITY_FAIL, UPDATE_ACTIVITY_REQUEST, UPDATE_ACTIVITY_SUCCESS } from "../constants/ActivityConstants";
import axios from 'axios'
export const AddActivity = (activity) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_ACTIVITY_REQUEST,
      });
  
      const { data } = await axios.post(`https://localhost:7173/api/Activities/AddNewActivity`,activity);
  
      dispatch({
        type: ADD_ACTIVITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ACTIVITY_FAIL,
        error: error.response,
      });
    }
  };


  export const AllActivity = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_ACTIVITY_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Activities/GetAllActivity`);
  
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


  export const DeleteActivity = (activityId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_ACTIVITY_REQUEST,
      });
  
      const { data } = await axios.delete(`https://localhost:7173/api/Activities/DeleteActivity/${activityId}`);
  
      dispatch({
        type: DELETE_ACTIVITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ACTIVITY_FAIL,
        error: error.response,
      });
    }
  };

  export const UpdateActivity = (activity) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_ACTIVITY_REQUEST,
      });
  
      const { data } = await axios.put(`https://localhost:7173/api/Activities/UpdateActivity`,activity);
  
      dispatch({
        type: UPDATE_ACTIVITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ACTIVITY_FAIL,
        error: error.response,
      });
    }
  };