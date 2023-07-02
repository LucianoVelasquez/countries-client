/* eslint-disable no-case-declarations */
import { GET_COUNTRIES,GET_COUNTRIE, GET_ACTIVITIES,FILTER_COUNTRIES,ORDER_COUNTRIES, FILTER_ACTIVITIES,DELETE_ACTIVITIE, PRE_UPDATE_ACTIVITIE,CLEAR,UPDATE_ACTIVITIE,GET_COUNTRY_BY_ID } from './Constants/index';
import { functionOrderCountries,funcrionFilterCountries,functionFilterRepeadActivites } from './Functions/index'
import axios from 'axios';
const url = 'https://countries-server-gnxp.onrender.com';
const initialState = {
  dataPaises: [],
  allPaises: [],
  actividades: [],
  showActivitiesFilter:[],
  actiEditing: {
      id: '',
      name:'',
      dificultad: 0,
      duracion: '',
      temporada: '',
      paises: [],
      idPais: [],
      access: ''
    },
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_COUNTRIES:
        return{
            ...state,
            dataPaises: action.payload,
            allPaises: action.payload
        }

    case GET_COUNTRIE:
    
        return{
          ...state,
          dataPaises: action.payload,
        } 
    case GET_COUNTRY_BY_ID:{
      return{
        ...state,
        dataPaises: action.payload
      }
    }
    case GET_ACTIVITIES:
      return{
        ...state,
        actividades: action.payload
      }

    case FILTER_COUNTRIES:
      let countryFilter = funcrionFilterCountries(action.payload,state.allPaises);
      return{
        ...state,
        dataPaises: countryFilter,
      }

    case ORDER_COUNTRIES:
      let order = functionOrderCountries(action.payload,state.dataPaises);
      return{
        ...state,
        dataPaises: order,
      }   

    case FILTER_ACTIVITIES:
      let newFilter = functionFilterRepeadActivites(state.actividades);
    return{
      ...state,
      showActivitiesFilter: newFilter
    }
    case DELETE_ACTIVITIE:
      axios.delete(`${url}/activities/${action.payload}`)
      .then(action.payload !== 'deletAll'? alert('Eliminado correctamente.') : '' )
      .catch(error=> alert(error.message))
    
    return{
      ...state,
    }
    case PRE_UPDATE_ACTIVITIE:
      let findActi = state.actividades.find(acti=> parseInt(action.payload) === acti.id);
      return{
        ...state,
        actiEditing:{
          ...state.actiEditing,
          id: action.payload,
          name: findActi.name,
          dificultad: findActi.dificultad,
          duracion: findActi.duracion,
          temporada: findActi.temporada,
          paises: findActi.Countries.map(pais=> `p.${pais.id}.${pais.name}`),
          idPais: findActi.Countries.map(pais=> pais.id),
          access: true,
        }
      }
    case CLEAR:
      return{
        ...state,
        actiEditing:{
          id: '',
          name:'',
          dificultad: 0,
          duracion: '',
          temporada: '',
          paises: [],
          idPais: [],
          access: '',
        }

      }  
    case UPDATE_ACTIVITIE:
      let updateActi = {
        id: action.payload.id,
        name: action.payload.name,
        dificultad: action.payload.dificultad,
        duracion: action.payload.duracion,
        temporada: action.payload.temporada,
        countri: action.payload.countri
      }

      axios.put(`${url}/activities`,updateActi)
      .then(alert('Actualizacion realizada'))
      .catch(error=> console.log(error.message));

      return{
        ...state
      }  
    default:
      return { ...state};
  }
}
