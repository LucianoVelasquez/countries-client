import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBard from "../../components/Search/SearchBar";
import Paginado from '../../components/Paginado/paginado'
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getActivities, getCountrie, getCountries,filterCountries,orderCountries,filterActivities } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const paises = useSelector((state) => state.dataPaises);
  // eslint-disable-next-line no-unused-vars
  const [order,setOrder] = useState('');

  ////Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const indexOfLastCountrie = currentPage * countriesPerPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
  let currentCountries = paises.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  ////
  
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities());
    setTimeout(()=>{
      dispatch(filterActivities());
    },200)
  }, []);

  const hanldeClickOrder = (e) => {
    const typeOrder = e.target.id;//Ejemplo des, asc, popu

    dispatch(orderCountries(typeOrder));  
    setCurrentPage(1)
    setOrder(`Ordenado: ${typeOrder}`); //Sirve para que se renderize el componente y muestre correctamente el orden de las cartas.
  };

  const handleSearchid = (name) => {
    console.log(name);
    dispatch(getCountrie(name)); //Ejemplo ARG, BRA, SWE
    setCurrentPage(1)
  };

  const handleFilter = (e) =>{ 
    const byContinentOrActi = e.target.id; //Ejemplo, con.ALL, con.Europe,etc.

    dispatch(filterCountries(byContinentOrActi))
    setCurrentPage(1)
  }  

  return (
    <>
      <SearchBard hanldeClickOrder={hanldeClickOrder} handleSearchid={handleSearchid} handleFilter={handleFilter}/>

      <Paginado setCurrentPage={setCurrentPage} countriesPerPage={countriesPerPage} paises={paises.length} paginado={paginado} currentPage={currentPage}/>

      <CardsContainer currentCountries={currentCountries} />

      <Paginado setCurrentPage={setCurrentPage} countriesPerPage={countriesPerPage} paises={paises.length} paginado={paginado} currentPage={currentPage}/>
    </>
  );
}
