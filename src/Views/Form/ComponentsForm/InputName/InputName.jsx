/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import style from "./name.module.css";

class InputName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, handleData, error } = this.props;

    return (
      <>
        <label className={style.lavels}>Nombre de actividad</label>
        <input
          name="nombre"
          className={data.name == "" ? style.inputError : style.input}
          value={data.name}
          type="text"
          onChange={(e) => handleData(e)}
        ></input>
        <span className={style.spanError}>{error.name}</span>
      </>
    );
  }
}

export default InputName;
