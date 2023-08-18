import { Link } from 'react-router-dom'
import React from 'react'
import style from './Landing.module.css'

function LandingPage() {
  return (
    <div className={style.Container}>
        <div className={style.ContainerText}>
            <h1 className={style.title}>BIENVENIDO A AVENTURAS SIN FRONTERAS</h1>
            <Link to="/home">
                <button className={style.button}>INGRESAR</button>
            </Link>
        </div>
    </div>
  )
}

export default LandingPage;