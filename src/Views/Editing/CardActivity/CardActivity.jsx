/* eslint-disable react/prop-types */
import style from './cardActi.module.css';
import { Link } from "react-router-dom";



export default function CardActivity({name,dificultad,duracion,temporada,bandera,id,handleRemove,hanldeEditing}) {
  let keyId = 0;
  
  return (
    <div className={style.card}>
      <div className={style.cardInner}>
        
          <div>
            <div className={style.divImg}>
            {
              bandera?.map(e=>{
                return(
                <Link to={`/detail/${e.id}`} key={keyId++}>
                  <img className={style.itemImg} src={e.flags} key={keyId++}></img>
                </Link>
                ) 
              })
            }
            </div>
            <h2 className={style.h2}>{name}</h2>
          </div>

          <label className={style.label}>Difucultad: {dificultad} </label>
          <label className={style.label}>Duracion: {duracion} horas</label>
          <label className={style.label}>Temporada: {temporada}</label>

          <div className={style.divButt}>
            <button className={style.itemBut} id={id} onClick={handleRemove}>Eliminar</button>
            <Link to={'/create'}><button className={style.itemBut} id={id} onClick={hanldeEditing}>Modificar</button></Link>
          </div>

      </div>  
    </div>
  );
}