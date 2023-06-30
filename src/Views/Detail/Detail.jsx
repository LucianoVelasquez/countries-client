import { Link, useParams } from 'react-router-dom'
import style from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCountrieById } from '../../redux/actions';
import { useEffect } from 'react';

export default function Detail(){
  const {id} = useParams();

  const dispatch = useDispatch();
  const { dataPaises } = useSelector((state)=>state);

  useEffect(()=>{
    dispatch(getCountrieById(id));
  },[id])

    return(
      <div className={style.card}>
      <div className={style.cardInner}>
          <Link className={style.link} to={'/home'}><button className={style.button}>Volver</button></Link>
          <h1>{dataPaises[0].id}</h1>
          <div>
            <img className={style.cardImg} src={dataPaises[0].flags} alt="bandera de un pais."></img>
          </div>
          <div className={style.seccion}>
            <span className={style.span}>Nombre:  {dataPaises[0].name}</span>
            <span className={style.span}>Continente:  {dataPaises[0].continents}</span>
            <span className={style.span}>Capital:  {dataPaises[0].capital}</span>
            {dataPaises[0].subregion? <span className={style.span}>Subregión:  {dataPaises[0].subregion}</span>: ''}
            {dataPaises[0].area ? <span className={style.span}>Área:  {dataPaises[0].area}</span> : ''}
            <span className={style.span}>Población:  {dataPaises[0].population}</span>
          </div>
      </div>
    </div>
    )
}