import React, { useState } from "react";

import Cards from "../Cards/Cards";
import Paginacion from '../Paginacion/Paginacion'
import styles from "./Search.module.css";
import { useSelector } from "react-redux";

function ResultsSearch() {
  const countriesResult = useSelector((state) => state.resultSearch);
  
  const [pages,setPages] = useState(1)
  const [forPage,setForPage] = useState(10)
  
  const max = Math.ceil(countriesResult.length / forPage)
  
  if (!Array.isArray(countriesResult)) {
    // Si no es un array, mostramos un mensaje de error o retorno de componente vacío
    return(
      <div className={styles.ContainerResult}>
        <h2 className={styles.text}>DEBES INGRESAR UN PAIS </h2>
      </div>
    );
  }
  
  return (
    <div className={styles.ContainerResult}>
      <h2 className={styles.text}>RESULTADOS DE LA BÚSQUEDA:</h2>
      <div className={styles.ContainerCountry}>
        {countriesResult.length === 0 ? (
        <h2 className={styles.text}>NO SE ENCONTRARON PAISES</h2>
        ) : (
          countriesResult.slice((pages - 1) * forPage, (pages - 1) * forPage + forPage).map((count) => (
            <Cards
              className={styles.cards}
              key={count.id}
              id={count.id}
              name={count.name}
              continent={count.continent}
              image={count.image}
            />
          ))
        )}
      </div>
      <Paginacion pages={pages} max={max} setPages={setPages} country={countriesResult}  />
    </div>
  );
}

export default ResultsSearch;
