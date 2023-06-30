export function setValidation(tipo, data, error, setError) {

  switch (tipo) {

    case "nombre":
      if(!/^[A-Z]/.test(data.name)){
        setError({
          ...error,
          name: "La primer letra debe estar en mayuscula."
        });
      }else if (!/^[^0-9]+$/.test(data.name) && data.name !== "") {
        setError({
          ...error,
          name: "No puede contener numeros."
        });
      } else if (data.name.length > 15) {
        setError({
          ...error,
          name: "Debe tener menos de 15 caracteres."
        });
      }else if(!/^[a-zA-Z0-9\s]*$/.test(data.name)){
        setError({...error,name:"La cadena no debe tener símbolos, puntos o comas."})
      }else {
        setError({ ...error, name: ""});
      }
      break;

    case "duracion":
      if (parseInt(data.duracion) > 6) {
        setError({ ...error, duracion: "No puede superar las 6 horas."});
      }else if(!/^[^a-zA-Z]+$/.test(data.duracion) && data.duracion!== ''){
        setError({ ...error, duracion: "No puede contener letras."})
      }else if(!/^[a-zA-Z0-9\s]*$/.test(data.duracion)){
        setError({...error,duracion:"La cadena no debe tener símbolos, puntos o comas."})
      }else if(!/^\S*$/.test(data.duracion)){
        setError({...error,duracion:"No debe tener espacios en blanco."})
      }
      else {
        setError({ ...error, duracion: ""});
      }
      break;

    case "temporada":
      if(data.temporada == 'Seleccionar'){
        setError({...error,temporada: 'Debes elegir una opcion.'});
      }else{
        setError({...error,temporada: ''})
      }
      break;

    case "pais":
      if(data.idPais == 'Seleccionar'){
        setError({...error,idPais: 'Debes elegir una opcion.'});
      } if(data.idPais.length < 1){
        setError({...error,idPais: 'Selecciona nuevamente un pais.'});
      }
      else{
        setError({...error,idPais: ''})
      }
      break;  
    case "dificultad":
      if(parseInt(data.dificultad) < 1){
        setError({...error,dificultad: 'Debes elegir una dificultad.'});
      }else{
        setError({...error,dificultad: ''})
      }
      break;  
  }

  return;
}
export function accesSubmit(error){
  if(error.name !== "" || error.dificultad !== "" || error.temporada !== "" || error.idPais !== "" || error.duracion !== ""){
    return false;
  }else{
    return true;
  }
}
