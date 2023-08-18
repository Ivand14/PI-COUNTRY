import React from 'react'
import style from './FilterOrder.module.css'

function FilterByOrder({orderFilter,handleFilterOrder}) {
  return (
    <div>
        <div className={style.orders}>
            <h2 className={style.title}>Order By</h2>
            <select onChange={orderFilter}>
                <option value="AscName">A-Z</option>
                <option value="DescName">Z-A</option>
                <option value="DescPopulation">Min Poblacion</option>
                <option value="AscPopulation">Max Poblacion</option>
            </select>
            <button onClick={handleFilterOrder} className={style.button}>
            Ordenar
            </button>
        </div>
    </div>
  )
}

export default FilterByOrder