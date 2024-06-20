
import axios from 'axios'
import { GET_ALL_SUBSCRIPTION_FAIL, GET_ALL_SUBSCRIPTION_REQUEST, GET_ALL_SUBSCRIPTION_SUCCESS, GET_SINGLE_SUBSCRIPTION_FAIL, GET_SINGLE_SUBSCRIPTION_REQUEST, GET_SINGLE_SUBSCRIPTION_SUCCESS } from '../constants/SubscriptionConstants';
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


  export const GetSingleSubscription = (subscriptionId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_SINGLE_SUBSCRIPTION_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Subscriptions/GetSubscriptionById/${subscriptionId}`);
  
      dispatch({
        type: GET_SINGLE_SUBSCRIPTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_SUBSCRIPTION_FAIL,
        error: error.response,
      });
    }
  };