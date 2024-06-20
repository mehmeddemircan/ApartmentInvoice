import { CHECK_USER_JOINED_FAIL, CHECK_USER_JOINED_REQUEST, CHECK_USER_JOINED_SUCCESS, GET_ACTIVITY_DETAILS_FAIL, GET_ACTIVITY_DETAILS_REQUEST, GET_ACTIVITY_DETAILS_SUCCESS, GET_ACTIVITY_USERS_FAIL, GET_ACTIVITY_USERS_REQUEST, GET_ACTIVITY_USERS_SUCCESS, GET_ALL_ACTIVITY_FAIL, GET_ALL_ACTIVITY_REQUEST, GET_ALL_ACTIVITY_SUCCESS, JOIN_ACTIVITY_FAIL, JOIN_ACTIVITY_REQUEST, JOIN_ACTIVITY_SUCCESS, LEAVE_ACTIVITY_FAIL, LEAVE_ACTIVITY_REQUEST, LEAVE_ACTIVITY_SUCCESS } from "../constants/ActivityConstants";
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


  export const JoinActivity = (userActivity) => async (dispatch) => {
    try {
      dispatch({
        type: JOIN_ACTIVITY_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7173/api/UserActivities/JoinActivity`,
        userActivity
      );
  
      dispatch({
        type: JOIN_ACTIVITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: JOIN_ACTIVITY_FAIL,
        error: error.response,
      });
    }
  };
  
  export const GetUserActivities = (id) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ACTIVITY_USERS_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7173/api/UserActivities/GetAllActivityParticipants/${id}`
      );
  
      dispatch({
        type: GET_ACTIVITY_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ACTIVITY_USERS_FAIL,
        error: error.response,
      });
    }
  };

  export const LeaveActivity = (userActivityId) => async (dispatch) => {
   
      try {
        dispatch({
          type: LEAVE_ACTIVITY_REQUEST,
        });
  
        const { data } = await axios.delete(
          `https://localhost:7173/api/UserActivities/LeaveActivity/${userActivityId}`
        );
  
        dispatch({
          type: LEAVE_ACTIVITY_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: LEAVE_ACTIVITY_FAIL,
          payload: error.message,
        });
      }
    };

    export const CheckUserActivity = (activityId,userId) => async (dispatch) => {
   
      try {
        dispatch({
          type: CHECK_USER_JOINED_REQUEST,
        });
  
        const { data } = await axios.get(
          `https://localhost:7173/api/UserActivities/GetUserActivityById/${activityId}/${userId}`
        );
  
        dispatch({
          type: CHECK_USER_JOINED_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CHECK_USER_JOINED_FAIL,
          payload: error.message,
        });
      }
    };