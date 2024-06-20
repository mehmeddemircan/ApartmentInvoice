import axios from "axios";
import {
  ADD_FLAT_FAIL,
  ADD_FLAT_REQUEST,
  ADD_FLAT_SUCCESS,
  ADD_USER_TO_FLAT_FAIL,
  ADD_USER_TO_FLAT_REQUEST,
  ADD_USER_TO_FLAT_SUCCESS,
  DELETE_FLAT_FAIL,
  DELETE_FLAT_REQUEST,
  DELETE_FLAT_SUCCESS,
  GET_ALL_FLAT_FAIL,
  GET_ALL_FLAT_REQUEST,
  GET_ALL_FLAT_SUCCESS,
  UPDATE_FLAT_FAIL,
  UPDATE_FLAT_REQUEST,
  UPDATE_FLAT_SUCCESS,
} from "../constants/FlatConstants";

export const CreateFlat = (flat) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_FLAT_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7173/api/Flats/AddNewFlat`,
      flat
    );

    dispatch({
      type: ADD_FLAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_FLAT_FAIL,
      error: error.response,
    });
  }
};

//blockId ye göre daireleri getirme 
export const AllFlatByBlock = (blockId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_FLAT_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Flats/GetFlatByBlock/${blockId}`);
  
      dispatch({
        type: GET_ALL_FLAT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_FLAT_FAIL,
        error: error.response,
      });
    }
  };



// anket sil 
  export const DeleteFlat = (flatId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_FLAT_REQUEST,
      });
  
      const { data } = await axios.delete(`https://localhost:7173/api/Flats/DeleteFlat/${flatId}`);
  
      dispatch({
        type: DELETE_FLAT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_FLAT_FAIL,
        error: error.response,
      });
    }
  };
//update flat 

export const UpdateFlat = (flat) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_FLAT_REQUEST,
    });

    const { data } = await axios.put(`https://localhost:7173/api/Flats/UpdateFlat`,flat);

    dispatch({
      type: UPDATE_FLAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_FLAT_FAIL,
      error: error.response,
    });
  }
};

export const AddUserToFlat = (flat) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_USER_TO_FLAT_REQUEST,
    });

    const { data } = await axios.put(`https://localhost:7173/api/Flats/AddUserToFlat`,flat);

    dispatch({
      type: ADD_USER_TO_FLAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_USER_TO_FLAT_FAIL,
      error: error.response,
    });
  }
};

