import axios from "axios";
import {
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GET_ALL_ORDER_FAIL,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "../constants/OrderConstants";

export const GetAllOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_ORDER_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7173/api/Orders/GetAllOrder`
    );

    dispatch({
      type: GET_ALL_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ORDER_FAIL,
      error: error.response,
    });
  }
};

export const DeleteOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ORDER_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:7173/api/Orders/DeleteOrder/${orderId}`
    );

    dispatch({
      type: DELETE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.message,
    });
  }
};

export const UpdateOrderStatus = (orderId,orderStatus) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ORDER_STATUS_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:7173/api/Orders/UpdateOrderStatus?orderId=${orderId}&orderStatus=${orderStatus}`,
    
    );

    dispatch({
      type: UPDATE_ORDER_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_STATUS_FAIL,
      payload: error.message,
    });
  }
};
