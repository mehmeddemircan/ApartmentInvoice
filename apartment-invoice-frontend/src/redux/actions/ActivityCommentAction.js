import {
  ADD_ACTIVITY_COMMENT_FAIL,
  ADD_ACTIVITY_COMMENT_REQUEST,
  ADD_ACTIVITY_COMMENT_SUCCESS,
  DELETE_ACTIVITY_COMMENT_FAIL,
  DELETE_ACTIVITY_COMMENT_REQUEST,
  DELETE_ACTIVITY_COMMENT_SUCCESS,
  GET_ACTIVITY_COMMENTS_BY_USER_FAIL,
  GET_ACTIVITY_COMMENTS_BY_USER_REQUEST,
  GET_ACTIVITY_COMMENTS_BY_USER_SUCCESS,
  GET_ACTIVITY_COMMENTS_FAIL,
  GET_ACTIVITY_COMMENTS_REQUEST,
  GET_ACTIVITY_COMMENTS_SUCCESS,
  UPDATE_ACTIVITY_COMMENT_FAIL,
  UPDATE_ACTIVITY_COMMENT_REQUEST,
  UPDATE_ACTIVITY_COMMENT_SUCCESS,
} from "../constants/ActivityCommentConstants";

import axios from "axios";
export const SendActivityComment = (activityComment) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_ACTIVITY_COMMENT_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7173/api/ActivityComments/AddNewActivityComment`,
      activityComment
    );

    dispatch({
      type: ADD_ACTIVITY_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ACTIVITY_COMMENT_FAIL,
      error: error.response,
    });
  }
};

export const GetActivityComments = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ACTIVITY_COMMENTS_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7173/api/ActivityComments/GetActivityCommentsByActivityId/${id}`
    );

    dispatch({
      type: GET_ACTIVITY_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ACTIVITY_COMMENTS_FAIL,
      error: error.response,
    });
  }
};


export const GetActivityCommentsByUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ACTIVITY_COMMENTS_BY_USER_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7173/api/ActivityComments/GetActivityCommentsByUserId/${userId}`

    );

    dispatch({
      type: GET_ACTIVITY_COMMENTS_BY_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ACTIVITY_COMMENTS_BY_USER_FAIL,
      error: error.response,
    });
  }
};


export const DeleteActivityComment =
  (activityCommentId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_ACTIVITY_COMMENT_REQUEST,
      });

      const { data } = await axios.delete(
        `https://localhost:7173/api/ActivityComments/DeleteActivityComment/${activityCommentId}`
      );

      dispatch({
        type: DELETE_ACTIVITY_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ACTIVITY_COMMENT_FAIL,
        payload: error.message,
      });
    }
  };

export const UpdateActivityComment = (activityComment) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ACTIVITY_COMMENT_REQUEST,
    });

    const { data } = await axios.put(
      "https://localhost:7173/api/ActivityComments/UpdateActivityComment",
      activityComment
    );

    dispatch({
      type: UPDATE_ACTIVITY_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ACTIVITY_COMMENT_FAIL,
      payload: error.message,
    });
  }
};
