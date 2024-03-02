


import axios from "axios";
import { ADD_SUBSCRIPTION_FAIL, ADD_SUBSCRIPTION_REQUEST, ADD_SUBSCRIPTION_SUCCESS, DELETE_SUBSCRIPTION_FAIL, DELETE_SUBSCRIPTION_REQUEST, DELETE_SUBSCRIPTION_SUCCESS, GET_ALL_SUBSCRIPTION_FAIL, GET_ALL_SUBSCRIPTION_REQUEST, GET_ALL_SUBSCRIPTION_SUCCESS, UPDATE_SUBSCRIPTION_FAIL, UPDATE_SUBSCRIPTION_REQUEST, UPDATE_SUBSCRIPTION_SUCCESS } from "../constants/SubscriptionConstants";

// anketleri sayfalama şeklinde getir
export const AllSubscription = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_SUBSCRIPTION_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Subscriptions/GetAllSubscription`);
  
      dispatch({
        type: GET_ALL_SUBSCRIPTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SUBSCRIPTION_FAIL,
        error: error.response,
      });
    }
  };
// anket oluştur
  export const CreateSubscription = (subscription) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_SUBSCRIPTION_REQUEST,
      });
  
      const { data } = await axios.post(`https://localhost:7173/api/Subscriptions/AddNewSubscription`,subscription);
  
      dispatch({
        type: ADD_SUBSCRIPTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_SUBSCRIPTION_FAIL,
        error: error.response,
      });
    }
  };

// anket sil 
  export const DeleteSubscription = (subscriptionId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_SUBSCRIPTION_REQUEST,
      });
  
      const { data } = await axios.delete(`https://localhost:7173/api/Subscriptions/DeleteSubscription/${subscriptionId}`);
  
      dispatch({
        type: DELETE_SUBSCRIPTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SUBSCRIPTION_FAIL,
        error: error.response,
      });
    }
  };

  export const UpdateSubscription = (subscription) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_SUBSCRIPTION_REQUEST,
      });
  
      const { data } = await axios.put(`https://localhost:7173/api/Subscriptions/UpdateSubscription`,subscription);
  
      dispatch({
        type: UPDATE_SUBSCRIPTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SUBSCRIPTION_FAIL,
        error: error.response,
      });
    }
  };
