import axios from "axios";
import {
  ADD_FLAT_FAIL,
  ADD_FLAT_REQUEST,
  ADD_FLAT_SUCCESS,
  GET_ALL_FLAT_FAIL,
  GET_ALL_FLAT_REQUEST,
  GET_ALL_FLAT_SUCCESS,
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
