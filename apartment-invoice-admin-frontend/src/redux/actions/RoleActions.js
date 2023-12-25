
import axios from 'axios'
import { ADD_ROLE_FAIL, ADD_ROLE_REQUEST, ADD_ROLE_SUCCESS, DELETE_ROLE_FAIL, DELETE_ROLE_REQUEST, DELETE_ROLE_SUCCESS, GET_ALL_ROLE_FAIL, GET_ALL_ROLE_REQUEST, GET_ALL_ROLE_SUCCESS, UPDATE_ROLE_FAIL, UPDATE_ROLE_REQUEST, UPDATE_ROLE_SUCCESS } from '../constants/RoleConstants';
export const CreateRole = (role) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_ROLE_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7173/api/OperationClaim/AddNewOperationClaim`,
        role
      );
  
      dispatch({
        type: ADD_ROLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ROLE_FAIL,
        error: error.response,
      });
    }
  };
  
  //blockId ye göre daireleri getirme 
  export const AllRole = () => async (dispatch) => {
      try {
        dispatch({
          type: GET_ALL_ROLE_REQUEST,
        });
    
        const { data } = await axios.get(`https://localhost:7173/api/OperationClaim/GetAllOperationClaim`);
    
        dispatch({
          type: GET_ALL_ROLE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: GET_ALL_ROLE_FAIL,
          error: error.response,
        });
      }
    };
  
    export const UpdateRole = (role) => async (dispatch) => {
        try {
          dispatch({
            type: UPDATE_ROLE_REQUEST,
          });
      
          const { data } = await axios.put(`https://localhost:7173/api/OperationClaim/UpdateOperationClaim`,role);
      
          dispatch({
            type: UPDATE_ROLE_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: UPDATE_ROLE_FAIL,
            error: error.response,
          });
        }
      };
  
  // anket sil 
    export const DeleteRole = (roleId) => async (dispatch) => {
      try {
        dispatch({
          type: DELETE_ROLE_REQUEST,
        });
    
        const { data } = await axios.delete(`https://localhost:7173/api/OperationClaim/DeleteOperationClaim/${roleId}`);
    
        dispatch({
          type: DELETE_ROLE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: DELETE_ROLE_FAIL,
          error: error.response,
        });
      }
    };


 
