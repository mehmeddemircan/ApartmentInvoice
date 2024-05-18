import axios from 'axios'
import { GET_ALL_CITY_FAIL, GET_ALL_CITY_REQUEST, GET_ALL_CITY_SUCCESS } from '../constants/CityConstants';
// anketleri sayfalama şeklinde getir
export const AllCity = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CITY_REQUEST,
      });
  
      const { data } = await axios.get(`https://turkiyeapi.herokuapp.com/api/v1/provinces`);
  
      dispatch({
        type: GET_ALL_CITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CITY_FAIL,
        error: error.response,
      });
    }
  };