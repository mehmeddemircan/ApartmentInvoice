import { DELETE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, GET_ALL_POST_FAIL, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_ALL_POST_WITH_PAGE_FAIL, GET_ALL_POST_WITH_PAGE_REQUEST, GET_ALL_POST_WITH_PAGE_SUCCESS, SEND_POST_FAIL, SEND_POST_REQUEST, SEND_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "../constants/PostConstants";
import axios from 'axios'
export const SendPost = (post) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_POST_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7173/api/Posts/AddNewPost`,post
      );
  
      dispatch({
        type: SEND_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_POST_FAIL,
        error: error.response,
      });
    }
  };


  export const AllPost = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_POST_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7173/api/Posts/GetAllPost`
      );
  
      dispatch({
        type: GET_ALL_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_POST_FAIL,
        error: error.response,
      });
    }
  };
  export const AllPostWithPage = (pageNumber,pageSize) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_POST_WITH_PAGE_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7173/api/Posts/GetPostswithPage?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
  
      dispatch({
        type: GET_ALL_POST_WITH_PAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_POST_WITH_PAGE_FAIL,
        error: error.response,
      });
    }
  };
  

  export const DeletePost = (postId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_POST_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://localhost:7173/api/Posts/DeletePost/${postId}`
      );
  
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_POST_FAIL,
        payload: error.message,
      });
    }
  };

  
  export const UpdatePost = (post) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_POST_REQUEST,
      });
  
      const { data } = await axios.put(
        "https://localhost:7173/api/Posts/UpdatePost",post
      );
  
      dispatch({
        type: UPDATE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_POST_FAIL,
        payload: error.message,
      });
    }
  };
  