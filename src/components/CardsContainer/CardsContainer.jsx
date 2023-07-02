/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import style from "./cardContainer.module.css";

export default function CardsContainer({currentCountries}) {

  let idKey = 0;
  console.log(currentCountries);
  return (
    <div className={style.divMain}>

      <div className={style.divSec}>
        {currentCountries.length < 1? <h1>Cargando contenido..</h1> :
        currentCountries.map((pais) => {
          return (
            <Card
              bandera={pais.flags}
              name={pais.name}
              continente={pais.continents}
              id={pais.id}
              key={idKey++}
            />
          );
        })}
      </div>
      
    </div>
  );
}
