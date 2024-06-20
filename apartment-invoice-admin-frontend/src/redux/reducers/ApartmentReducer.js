import { combineReducers } from "redux";
import { ADD_APARTMENT_FAIL, ADD_APARTMENT_REQUEST, ADD_APARTMENT_RESET, ADD_APARTMENT_SUCCESS, DELETE_APARTMENT_FAIL, DELETE_APARTMENT_REQUEST, DELETE_APARTMENT_RESET, DELETE_APARTMENT_SUCCESS, GET_ALL_APARTMENT_FAIL, GET_ALL_APARTMENT_REQUEST, GET_ALL_APARTMENT_SUCCESS, GET_APARTMENT_BY_CITY_FAIL, GET_APARTMENT_BY_CITY_REQUEST, GET_APARTMENT_BY_CITY_SUCCESS, GET_SINGLE_APARTMENT_FAIL, GET_SINGLE_APARTMENT_REQUEST, GET_SINGLE_APARTMENT_SUCCESS, UPDATE_APARTMENT_FAIL, UPDATE_APARTMENT_REQUEST, UPDATE_APARTMENT_RESET, UPDATE_APARTMENT_SUCCESS } from "../constants/ApartmentConstants";



  export const getAllApartmentReducer = (
    state = {apartments : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_APARTMENT_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_APARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          apartments: action.payload,
        };
  
      case GET_ALL_APARTMENT_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  export const getApartmentDetailsReducer = (
    state = {apartment : {}, success : false },
    action
  ) => {
    switch (action.type) {
      case GET_SINGLE_APARTMENT_REQUEST:
        return { ...state, loading: true };
  
      case GET_SINGLE_APARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          apartment: action.payload,
        };
  
      case GET_SINGLE_APARTMENT_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getApartmentByCityReducer = (
    state = {filterApartments : [], success : false },
    action
  ) => {
    switch (action.type) {
      case GET_APARTMENT_BY_CITY_REQUEST:
        return { ...state, loading: true };
  
      case GET_APARTMENT_BY_CITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          filterApartments: action.payload,
        };
  
      case GET_APARTMENT_BY_CITY_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const addApartmentReducer = (state = { message: null ,success : false , isAdded  : false}, action) => {
    switch (action.type) {
      case ADD_APARTMENT_REQUEST:
        return { ...state, loading: true };
  
      case ADD_APARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isAdded : true ,
          message : action.payload.message
        };
  
      case ADD_APARTMENT_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_APARTMENT_RESET:
         return { ...state, success: false , isAdded : false };
      default:
        return state;
    }
  };

  export const deleteUpdateApartmentReducer = (
    state = { message : null,
        isDeleted : false ,
        isUpdated : false ,},
    action
  ) => {
    switch (action.type) {
      case DELETE_APARTMENT_REQUEST:
      case UPDATE_APARTMENT_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_APARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
      case UPDATE_APARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_APARTMENT_FAIL:
      case UPDATE_APARTMENT_FAIL:
        return { ...state, error: action.payload.error };
  
      case DELETE_APARTMENT_RESET:
        return {
          ...state , isDeleted : false
        };
      case UPDATE_APARTMENT_RESET:
        return {
          ...state,isUpdated : false
        };
      default:
        return state;
    }
  };
  const apartmentReducer = combineReducers({
   getAllApartment : getAllApartmentReducer,
   addApartment : addApartmentReducer,
   deleteUpdateApartment : deleteUpdateApartmentReducer,
   getApartmentByCity : getApartmentByCityReducer,
   getApartmentDetails : getApartmentDetailsReducer

})

export default apartmentReducer