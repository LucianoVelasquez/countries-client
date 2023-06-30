/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {setValidation,accesSubmit} from "./validaciones/validaciones";
import style from "./Form.module.css";
import axios from 'axios';
import {InputName,InputDuracion,InputPaises,InputTemp,InputDificult,ShowPaises} from './ComponentsForm/indexFormComponents.js';
import { clearAfterUpdate,updateActivity } from "../../redux/actions";



export default function FormC() {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  let { allPaises,actiEditing } = useSelector((state)=>state);
  const [data,setData] = useState({
    id: actiEditing.id !== ''? actiEditing.id : '',
    name: actiEditing.name !== '' ? actiEditing.name : '',
    dificultad: actiEditing.dificultad !== 0 ? actiEditing.dificultad : 0,
    duracion: actiEditing.duracion !== '' ? actiEditing.duracion : '',
    temporada: actiEditing.temporada !== '' ? actiEditing.temporada :'',
    paises: actiEditing.idPais.length >= 1?  actiEditing.paises : [],
    idPais: actiEditing.idPais.length >= 1?  actiEditing.idPais : [],
    editing: actiEditing.access !== '' ? true : false
  })
  const [error,setError] = useState({
    name: '',
    dificultad: "Debes elegir una dificultad",
    duracion: "",
    temporada: 'Debes elegir una opcion',
    idPais: "Debes elegir una opcion",
    sumbit: false,
    tipo: ''
  })
  //Ordenamiento
    allPaises = allPaises.sort((a,b)=>{
    if (a.name < b.name) {
      return -1;
    }
    if (a.name  > b.name) {
      return 1;
    }
    return 0;
  }); 
  ///

  useEffect(()=>{
    setValidation(error.tipo,data,error,setError);
    return () =>{
      dispatch(clearAfterUpdate());
    }
  },[data])

  const setClear = () =>{
    setData({...data,name: '',duracion: '',temporada: '',dificultad: 0,paises: [],idPais:[]})
    setError({
      name: '',
      dificultad: "Debes elegir una dificultad",
      duracion: "",
      temporada: 'Debes elegir una opcion',
      idPais: "Debes elegir una opcion",
      sumbit: false,
      tipo: ''
    })
  }
  const hanldeOptions = (e) => {
    const nameCountry = e.target.value;
    const idCountry = nameCountry.split('.')[1];
   
    setError({...error,tipo: 'pais'});
    e.preventDefault()
    if(!data.paises.find(country=> country === nameCountry) && nameCountry !== 'id1'){
      setData({...data,
        paises: [...data.paises,nameCountry],
        idPais: [...data.idPais,idCountry]}) 
    } 

  };
  const handleData = (e) =>{
    const tipoInput = e.target.name;
    const value = e.target.value;
    
    switch(tipoInput){
      case 'nombre':
        return(
          setData({
            ...data,
            name:value,
          }),
          setError({...error,tipo: tipoInput})
        ) 
      case 'duracion':
        return(
          setData({
            ...data,
            duracion: value,
          }),
          setError({...error,tipo: tipoInput})
        ) 
      case 'temporada':
        return (
          setData({
            ...data,
            temporada: value !== 'Seleccionar'? value : 'Seleccionar',
          }),
          setError({...error,tipo: tipoInput})
        ) 
      case 'dificultad':
        return setData({
          ...data,
          dificultad: value,
        },
        setError({...error,tipo: tipoInput})) 
      default:
        return;
    }

  }
  const handleClickRemove = (e) =>{
    e.preventDefault();
    const paisId = e.target.id.split('.')[1];

    setData({...data,
      paises: data.paises.filter(pais=> pais !== e.target.id),
      idPais: data.idPais.filter(id=> id !== paisId)
    })

    setError({...error,tipo:"pais"});
  }
  const handleSubmit = async (e) =>{
    try {
      e.preventDefault();

      const typeAction = e.target[5].value; //Id del botton

      if(typeAction === 'create'){
        const endpoint = 'http://localhost:3001/activities';
        const newActiviti = {
        name: data.name,
        dificultad: data.dificultad,
        duracion: data.duracion,
        temporada: data.temporada,
        countri: data.idPais
        } 
      
        if(accesSubmit(error)){
          const response = await axios.post(endpoint,newActiviti);
          const message = response.data.message;
          alert(message);
          setClear();
          return
        }else{
          alert('Completa correctamente los campos.')
          return
        }

      }else{
        const dataUpdate = {
          id: data.id,
          name: data.name,
          dificultad: data.dificultad,
          duracion: data.duracion,
          temporada: data.temporada,
          countri: data.idPais
        }
        if(accesSubmit(error)){
          dispatch(updateActivity(dataUpdate)); 

          setTimeout(()=>{
            navigation('/home');
          },500)

          return 
        } else{
          alert('Completa correctamente los campos.');

          return
        }
        
      }

    } catch (error) {
      alert(error.response.data);
    }
   
  }

  return (
   
    <div className={`${style.divPri}`}>

      <div className={style.divSec}>
        {
          data.editing? <h1>Edita una actividad Turistica</h1> : <h1>Crea una actividad Turistica</h1> 
        }
        
        <form className={`${style.styleForm} max-sm:w-auto`} onSubmit={handleSubmit}>

          <div className={`${style.divOptions} max-sm:ml-2`}>

            <InputName data={data} handleData={handleData} error={error}/>

            <InputDuracion data={data} handleData={handleData} error={error}/>
            
            <InputPaises allPaises={allPaises} hanldeOptions={hanldeOptions} error={error} data={data}/>

            <InputTemp handleData={handleData} error={error} data={data}/>

            <InputDificult data={data} handleData={handleData} error={error}/>
      
          
            <button className={style.button} value={data.editing? 'editing': 'create'}>{data.editing? 'Editar actividad' : 'Crear actividad'}</button>

          </div>

          <ShowPaises data={data} handleClickRemove={handleClickRemove}/>

        </form>
      </div>
      
    </div>  
  );
}
