/* eslint-disable react/prop-types */
import React, { Component } from "react";
import style from './duracion.module.css';


class InputDuracion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data,handleData,error} = this.props;

    return (
      <>
        <label className={style.lavels}>Cantidad de horas</label>
        <input
          name="duracion"
          type="text"
          value={data.duracion}
          onChange={(e) => handleData(e)}
          className={style.input}
        ></input>
        
        <span className={style.spanError}>{error.duracion}</span>
      </>
    );
  }
}

export default InputDuracion;
