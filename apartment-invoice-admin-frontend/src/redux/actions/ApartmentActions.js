import axios from "axios";
import { ADD_APARTMENT_FAIL, ADD_APARTMENT_REQUEST, ADD_APARTMENT_SUCCESS, DELETE_APARTMENT_FAIL, DELETE_APARTMENT_REQUEST, DELETE_APARTMENT_SUCCESS, GET_ALL_APARTMENT_FAIL, GET_ALL_APARTMENT_REQUEST, GET_ALL_APARTMENT_SUCCESS, GET_APARTMENT_BY_CITY_FAIL, GET_APARTMENT_BY_CITY_REQUEST, GET_APARTMENT_BY_CITY_SUCCESS, GET_SINGLE_APARTMENT_FAIL, GET_SINGLE_APARTMENT_REQUEST, GET_SINGLE_APARTMENT_SUCCESS, UPDATE_APARTMENT_FAIL, UPDATE_APARTMENT_REQUEST, UPDATE_APARTMENT_SUCCESS } from "../constants/ApartmentConstants";

// anketleri sayfalama şeklinde getir
export const AllApartment = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_APARTMENT_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:7173/api/Apartments/GetAllApartment`);
  
      dispatch({
        type: GET_ALL_APARTMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_APARTMENT_FAIL,
        error: error.response,
      });
    }
  };

  // anketleri sayfalama şeklinde getir
export const GetApartmentDetails = (apartmentId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_APARTMENT_REQUEST,
    });

    const { data } = await axios.get(`https://localhost:7173/api/Apartments/GetApartmentById/${apartmentId}`);

    dispatch({
      type: GET_SINGLE_APARTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_APARTMENT_FAIL,
      error: error.response,
    });
  }
};
// anket oluştur
  export const CreateApartment = (apartment) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_APARTMENT_REQUEST,
      });
  
      const { data } = await axios.post(`https://localhost:7173/api/Apartments/AddNewAparment`,apartment);
  
      dispatch({
        type: ADD_APARTMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_APARTMENT_FAIL,
        error: error.response,
      });
    }
  };

// anket sil 
  export const DeleteApartment = (apartmentId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_APARTMENT_REQUEST,
      });
  
      const { data } = await axios.delete(`https://localhost:7173/api/Apartments/DeleteApartment/${apartmentId}`);
  
      dispatch({
        type: DELETE_APARTMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_APARTMENT_FAIL,
        error: error.response,
      });
    }
  };

  export const UpdateApartment = (apartment) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_APARTMENT_REQUEST,
      });
  
      const { data } = await axios.put(`https://localhost:7173/api/Apartments/UpdateApartment`,apartment);
  
      dispatch({
        type: UPDATE_APARTMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_APARTMENT_FAIL,
        error: error.response,
      });
    }
  };


  // anketleri sayfalama şeklinde getir
export const GetApartmentByCity = (cityId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_APARTMENT_BY_CITY_REQUEST,
    });

    const { data } = await axios.get(`https://localhost:7173/api/Apartments/GetApartmentByCity?cityId=${cityId}`);

    dispatch({
      type: GET_APARTMENT_BY_CITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APARTMENT_BY_CITY_FAIL,
      error: error.response,
    });
  }
};


