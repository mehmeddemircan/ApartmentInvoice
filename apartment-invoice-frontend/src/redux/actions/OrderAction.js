import axios from "axios";
import {
  ADD_ORDER_FAIL,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GET_MY_ORDERS_FAIL,
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
} from "../constants/OrderConstants";

export const AddOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_ORDER_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7173/api/Orders/AddNewOrder`,
      order
    );

    dispatch({
      type: ADD_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ORDER_FAIL,
      error: error.response,
    });
  }
};

export const GetMyOrders = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_MY_ORDERS_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7173/api/Orders/GetOrdersByUserId/${userId}`
    );

    dispatch({
      type: GET_MY_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MY_ORDERS_FAIL,
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

export const UpdateOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ORDER_REQUEST,
    });

    const { data } = await axios.put(
      "https://localhost:7173/api/Orders/UpdateOrder",
      order
    );

    dispatch({
      type: UPDATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.message,
    });
  }
};
