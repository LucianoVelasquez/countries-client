/* eslint-disable react/prop-types */
import style from "./paginado.module.css";

export default function Paginado({countriesPerPage,paises,paginado,currentPage,setCurrentPage}) {
  const pageNumbers = [];

  const handlePage = (e)=>{
    const idInput = e.target.id;
    idInput === 'next'? setCurrentPage(currentPage-1): setCurrentPage(currentPage+1);
  }

  for (let i = 0; i < Math.ceil(paises / countriesPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className={style.divMain}>
      
      <nav>
        <ul className={style.divul}>
          
          {
            currentPage !== 1 ?
            <li className={style.li} id='next' onClick={handlePage}>{`<<`}</li> : ''
          }

          {pageNumbers &&
            pageNumbers.map((num) => (
              <a  onClick={() => {paginado(num + 1);}}  key={num}>
                <li
                  className={currentPage - 1 === num ? style.current : style.li}
                >
                  {num+1}
                </li>
              </a>
            ))}

            {
              currentPage < pageNumbers.length ? <li id='prev' className={style.li} onClick={handlePage}>{`>>`}</li> : ''
            }
          
        </ul>
      </nav>
    </div>
  );
}
