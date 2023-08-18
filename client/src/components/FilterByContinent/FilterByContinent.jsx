import React from 'react'
import style from './FilterContinent.module.css'

function FilterByContinent({onHandleActivity,onHandleFilter,activities,handleFilter}) {
    
  return (
    <div>
        <div className={style.allFilter}>
            <div className={style.Filters}>
            <h2 className={style.title}>Filter By</h2>
            <div className={style.selectContainer}>
                <select onChange={onHandleFilter}>
                    <option value="All">Continentes</option>
                    <option value="Antarctica">Antartida</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                </select>

                <select onChange={onHandleActivity}>
                    <option value="All">Actividades</option>
                    {activities.length > 0 && activities.map(act=>(
                        <option key={act.id} value={act.name}>{act.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleFilter} className={style.button}>
            Aplicar
            </button>
            </div>
        </div>
    </div>
  )
}

export default FilterByContinent