import { GET_MY_POSTS_FAIL, GET_MY_POSTS_REQUEST, GET_MY_POSTS_SUCCESS } from "../constants/UserConstants";
import axios from 'axios'
export const GetMyPosts = (pageNumber,pageSize,userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_MY_POSTS_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7173/api/Users/GetUsersPosts?pageNumber=${pageNumber}&pageSize=${pageSize}&userId=${userId}`
      );
  
      dispatch({
        type: GET_MY_POSTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_MY_POSTS_FAIL,
        error: error.response,
      });
    }
  };