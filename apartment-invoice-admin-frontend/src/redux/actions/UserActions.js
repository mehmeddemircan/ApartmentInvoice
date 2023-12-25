import { ADD_ROLE_TO_USER_FAIL, ADD_ROLE_TO_USER_REQUEST, ADD_ROLE_TO_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS } from "../constants/UserConstants";
import axios from 'axios'


export const AllUser = (pageNumber,pageSize) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_USER_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Users/GetUserswithPage?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  
      dispatch({
        type: GET_ALL_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USER_FAIL,
        error: error.response,
      });
    }
  };



// anket sil 
  export const DeleteUser = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_USER_REQUEST,
      });
  
      const { data } = await axios.delete(`https://localhost:7173/api/Users/DeleteUser?userId=${userId}`);
  
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        error: error.response,
      });
    }
  };

  export const AddRoleToUser = (userRole) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_ROLE_TO_USER_REQUEST,
      });
  
      const { data } = await axios.post(`https://localhost:7173/api/UserOperationClaims/AddRoleToUser`,userRole);
  
      dispatch({
        type: ADD_ROLE_TO_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ROLE_TO_USER_FAIL,
        error: error.response,
      });
    }
  };