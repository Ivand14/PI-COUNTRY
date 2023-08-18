import { Link } from 'react-router-dom'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'

function Nav({onSearch}) {
  return (
    <div className={style.Container}>
      <div className={style.links}>
        <Link to='/'>
          <h2 className={style.link}>INICIO</h2>
        </Link>

        <Link to='/home'>
          <h2 className={style.link}>HOME</h2>
        </Link>

        <Link to='/create'>
          <h2 className={style.link}>ACTIVIDADES</h2>
        </Link>
      </div>

      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  )
}

export default Nav