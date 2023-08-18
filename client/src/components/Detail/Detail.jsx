import React, { useEffect } from "react";
import { deleteActivity, getCountryDetail } from "../../redux/action/action";
import {useDispatch, useSelector} from 'react-redux'

import style from './Detail.module.css'
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const idDetail = useSelector(state => state.CountryDetail)
    const reload = () =>{
        window.location.reload(false)
    }

    
    useEffect(()=>{
        dispatch(getCountryDetail(id))
        return ()=>{
            dispatch(getCountryDetail())
        }
    },[dispatch,id])


    const handleDelete = (name) =>{
        dispatch(deleteActivity(name))
        reload()
    }

    console.log(idDetail)

    return <div className={style.container}>
        <div className={style.containerInfo}>
            <div className={style.containerImage}>
                <img src={idDetail.image} alt={idDetail.name} className={style.image}/>
            </div>
            <div className={style.nameCountry}>
                <h2>{idDetail.name}</h2>
                <h2>({idDetail.id})</h2>
            </div>  

            <div className={style.info}>
                <h2>Continente: {idDetail.continent}</h2>
                <h2>Capital: {idDetail.capital}</h2>
                {idDetail.subregion==='undefined' ? null: <h2>Subregion: {idDetail.subregion}</h2>}
                {idDetail.area==='undefined' ?  null:<h2>Area: {idDetail.area} m² </h2>}
                <h2>Poblacion: {idDetail.population} Personas</h2>
            </div> 
        </div>
        <div className={style.infoActivity}>
                {idDetail.Activities && idDetail.Activities.length === 0 ? (
                    <h2 className={style.title}>SIN ACTIVIDADES</h2>
                    ) : (
                    <h2 className={style.title}>ACTIVIDADES</h2>
                )}
                <div className={style.ContainerActs}>
                        {idDetail.Activities && idDetail.Activities.length > 0 && idDetail.Activities.map((activity, index) => (
                            <div className={style.activityCard} key={index}>
                                    <p className={style.name}>{activity.name}</p>
                                    <p className={style.p}>Dificultad: {activity.difficulty}☆</p>
                                    <p className={style.p}>Duración: {activity.duration} hs</p>
                                    <p className={style.p}>Temporada: {activity.season}</p>
                                    <button onClick={()=>handleDelete(activity.name)}>ELIMINAR</button>
                            </div>
                        ))}
                        
                </div>
        </div>
    </div>;
}

export default Detail;