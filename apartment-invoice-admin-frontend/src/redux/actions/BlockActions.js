import axios from "axios";
import { ADD_BLOCK_FAIL, ADD_BLOCK_REQUEST, ADD_BLOCK_SUCCESS, DELETE_BLOCK_FAIL, DELETE_BLOCK_REQUEST, DELETE_BLOCK_SUCCESS, GET_ALL_BLOCK_FAIL, GET_ALL_BLOCK_REQUEST, GET_ALL_BLOCK_SUCCESS, UPDATE_BLOCK_FAIL, UPDATE_BLOCK_REQUEST, UPDATE_BLOCK_SUCCESS } from "../constants/BlockConstants";

// anketleri sayfalama şeklinde getir
export const AllBlock = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_BLOCK_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Blocks/GetAllBlock`);
  
      dispatch({
        type: GET_ALL_BLOCK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_BLOCK_FAIL,
        error: error.response,
      });
    }
  };
// anket oluştur
  export const CreateBlock = (block) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_BLOCK_REQUEST,
      });
  
      const { data } = await axios.post(`https://localhost:7173/api/Blocks/AddNewBlock`,block);
  
      dispatch({
        type: ADD_BLOCK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_BLOCK_FAIL,
        error: error.response,
      });
    }
  };

// anket sil 
  export const DeleteBlock = (blockId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_BLOCK_REQUEST,
      });
  
      const { data } = await axios.delete(`https://localhost:7173/api/Blocks/DeleteBlock/${blockId}`);
  
      dispatch({
        type: DELETE_BLOCK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BLOCK_FAIL,
        error: error.response,
      });
    }
  };

  export const UpdateBlock = (block) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_BLOCK_REQUEST,
      });
  
      const { data } = await axios.put(`https://localhost:7173/api/Blocks/UpdateBlock`,block);
  
      dispatch({
        type: UPDATE_BLOCK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_BLOCK_FAIL,
        error: error.response,
      });
    }
  };


// tek bir anket getir 
//   export const GetSingleSurvey = (surveyId) => async (dispatch) => {
//     try {
//       dispatch({
//         type: GET_SINGLE_SURVEY_REQUEST,
//       });
  
//       const { data } = await axios.get(
//         `https://akinsoftanketapi.onrender.com/api/surveys/${surveyId}/details`
//       );
  
//       dispatch({
//         type: GET_SINGLE_SURVEY_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_SINGLE_SURVEY_FAIL,
//         error: error.response,
//       });
//     }
//   };


  

 