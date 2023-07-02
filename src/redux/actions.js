import axios from "axios";
import {GET_COUNTRIES,GET_COUNTRIE,GET_ACTIVITIES,FILTER_COUNTRIES,ORDER_COUNTRIES, DELETE_ACTIVITIE, FILTER_ACTIVITIES,PRE_UPDATE_ACTIVITIE,CLEAR,UPDATE_ACTIVITIE,GET_COUNTRY_BY_ID } from './Constants/index'
const url = 'https://countries-server-gnxp.onrender.com';

export const getCountries = () => {
  return async function (dispatch) {
    try{
      const data = await axios.get(`${url}/countries`);
    const countries = data.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
    }catch(error){
      alert(error.message+ ' getCountries');
    }
  };
};


export const getCountrie = (name) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${url}/countries?name=${name}`);
      const pais = data.data;
      dispatch({ type: GET_COUNTRIE, payload: pais });
    } catch (error) {
      alert('Datos incorrectos');
    }
  };
};

export const getCountrieById = (id) =>{
  return async function (dispatch) {
    try {
      const data = await axios.get(`${url}/countries/${id}`);
      const pais = data.data;
      dispatch({ type: GET_COUNTRY_BY_ID, payload: pais });
    } catch (error) {
      alert('Datos incorrectos');
    }
  };
}

export const getActivities = () =>{
  return async function(dispatch){
    try {
      const data = await axios.get(`${url}/activities`);
      const activities = data.data;
      dispatch({type: GET_ACTIVITIES, payload: activities});
    } catch (error) {
      alert(error.message+' getActivities');
    }
    
  }
}

export const filterCountries = (value) =>{
  return {
    type: FILTER_COUNTRIES,
    payload: value
  }
}

export const orderCountries = (value) =>{
  return {
    type: ORDER_COUNTRIES,
    payload: value,
  }
}

export const filterActivities = () =>{
  return{
    type: FILTER_ACTIVITIES,
    payload: ''
  }
}

export const removeActivity = (id) =>{
  return { type: DELETE_ACTIVITIE, payload: id };
}

export const preUpdateActivity = (id) =>{
  return {type: PRE_UPDATE_ACTIVITIE, payload: id};
}

export const updateActivity = (value) =>{
  return{ type:UPDATE_ACTIVITIE , payload: value}
}

export const clearAfterUpdate = () =>{
  return {type: CLEAR}
} 