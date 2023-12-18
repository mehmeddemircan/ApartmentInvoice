import axios from "axios";
import { SEND_COMPLAIN_FAIL, SEND_COMPLAIN_REQUEST, SEND_COMPLAIN_SUCCESS } from "../constants/ComplainConstants";
export const SendComplain = (message) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_COMPLAIN_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7173/api/Messages/AddNewMessage`,message
      );
  
      dispatch({
        type: SEND_COMPLAIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_COMPLAIN_FAIL,
        error: error.response,
      });
    }
  };