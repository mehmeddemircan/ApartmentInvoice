
import axios from 'axios'
import { GET_ALL_COMPLAIN_FAIL, GET_ALL_COMPLAIN_REQUEST, GET_ALL_COMPLAIN_SUCCESS, GET_COMPLAIN_WITH_PAGE_FAIL, GET_COMPLAIN_WITH_PAGE_REQUEST, GET_COMPLAIN_WITH_PAGE_SUCCESS } from '../constants/ComplainConstants';
 //announcements by page and limit  
 export const AllComplain = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_COMPLAIN_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Messages/GetAllMessage`);
  
      dispatch({
        type: GET_ALL_COMPLAIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_COMPLAIN_FAIL,
        error: error.response,
      });
    }
  };

  export const AllComplainWithPagination = (pageNumber,pageSize) => async (dispatch) => {
    try {
      dispatch({
        type: GET_COMPLAIN_WITH_PAGE_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Messages/GetMessageByWithPagination?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  
      dispatch({
        type: GET_COMPLAIN_WITH_PAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_COMPLAIN_WITH_PAGE_FAIL,
        error: error.response,
      });
    }
  };