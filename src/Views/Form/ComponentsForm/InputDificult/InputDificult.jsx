/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import style from './dificult.module.css'

class InputDificult extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { data,handleData,error } = this.props;
    return (
      <>
        <label className={style.lavels}>
          Dificultad {` "${data.dificultad}" `}
        </label>

        <input
          name="dificultad"
          type="range"
          min="0"
          max="5"
          step="1"
          value={data.dificultad}
          onChange={(e) => handleData(e)}
        ></input>

        <span className={style.spanError}>{error.dificultad}</span>
      </>
    );
  }
}
export default InputDificult;