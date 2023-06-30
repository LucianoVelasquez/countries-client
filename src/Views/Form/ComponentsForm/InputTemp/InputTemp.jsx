/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import style from './temporada.module.css';


class InputTemp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleData,error,data } = this.props;

    return (
      <>
        <label className={style.lavels}>Temporada</label>
        
        <select
          className={style.option}
          name="temporada"
          onChange={(e) => handleData(e)}
          defaultValue={data.temporada}
          value={data.temporada == '' ? ' ': undefined} //Resetea el valor cuando se hace un submit.
        >
          <option>Seleccionar</option>
          <option value={"Verano"}>Verano</option>
          <option value={"Otoño"}>Otoño</option>
          <option value={"Invierno"}>Invierno</option>
          <option value={"Primavera"}>Primavera</option>
        </select>

        <span className={style.spanError}>{error.temporada}</span>
      </>
    );
  }
}

export default InputTemp;
