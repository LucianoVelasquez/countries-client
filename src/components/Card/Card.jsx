/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({bandera,name,continente,id}) {
  return (
    <div className={style.card}>

      <div className={style.cardInner}>
        <Link className={style.link} to={`/detail/${id}`}>
          <div>
            <img className={style.cardImg} src={bandera} alt="bandera de un pais."></img>
          </div>
          <h2 className={style.h2}>{name}</h2>
          <h2 className={style.h2}>{continente}</h2>
        </Link>
      </div>
      
    </div>
  );
}

