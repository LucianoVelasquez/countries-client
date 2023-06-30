/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import style from './paises.module.css';

class InputPaises extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hanldeOptions,allPaises,error,data } = this.props;
    return (
      <>
        <label className={style.lavels}>Paises</label>

        <select className={style.option} value={data.idPais.length < 1? ' ' : undefined}  onChange={(e) => hanldeOptions(e)}>
          <option value="id1">Selecionar</option>
          {allPaises?.map((e) => {
            return (
              <option key={e.id} title={e.id} value={`p.${e.id}.${e.name}`}>
                {e.name}
              </option>
            );
          })}

        </select>
        
        <span className={style.spanError}>{error.idPais}</span>
      </>
    );
  }
}

export default InputPaises;
