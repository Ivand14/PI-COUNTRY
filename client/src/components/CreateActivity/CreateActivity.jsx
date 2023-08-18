import React, { useEffect, useState } from 'react'
import { allCountries, createActivity, getActivity } from '../../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'

import style from './CreateActivity.module.css'
import validate from './validate'

function CreateActivity() {
    const reload = () =>{
        window.location.reload(false)
    }
    const dispatch = useDispatch()
    const countries = useSelector(state=> state.Countries)
    const countriesOrder = countries.sort((a,b)=> a.name.localeCompare(b.name))
    const activities = useSelector(state=> state.Activity)


    useEffect(()=>{
        dispatch(allCountries())
    },[dispatch])

    useEffect(()=>{
        dispatch(getActivity())
    },[dispatch])

    const [form,setForm] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countryId:[]
    })

    const[errors,setErrors] = useState({})

    const handleChange = (event) =>{
        const property = event.target.name
        const value = event.target.value
        setForm({
            ...form,
            [property]:value
        })
    }

    const handleCountry = (event) =>{
        const selectedCountryIds = Array.from(event.target.selectedOptions, option => option.value);
        setForm({
            ...form,
            countryId:selectedCountryIds
        })
    }

    const onHandleSubmit = (event) =>{
        event.preventDefault()
        const validateError = validate(form,activities)
        setErrors(validateError)

        if(Object.keys(validateError).length === 0){
            dispatch(createActivity(form))
            setForm({
                name:'',
                difficulty:'',
                duration:'',
                season:'',
                countryId:[]
            })
            alert('Actividad creada ✅')
            reload()
        }else{
            alert('Error en la validacion.Por favor , revisar los campos resaltados ❌')
        }
        
    }
    
    const isNotComplete =
    !form.name ||
    !form.difficulty ||
    !form.duration ||
    !form.season ||
    form.countryId.length === 0;


    console.log(errors)
    
    return (
        <div className={style.Container}>
            <form className={style.Form} onSubmit={onHandleSubmit}>
                <div className={style.input}>
                    <label>Nombre de la actividad:</label>
                    <input name="name" type="text" onChange={handleChange} />
                    {errors.name && <p className={style.errors}>{errors.name}</p>}
                </div>

                <div className={style.input}>
                    <label>Dificultad:</label>
                    <select name="difficulty" onChange={handleChange} >
                        <option>Seleccionar Dificultad</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    {errors.difficulty && <p className={style.errors}>{errors.difficulty}</p>}
                </div>

                <div className={style.input}>
                    <label>Duracion de la actividad</label>
                    <select name="duration" onChange={handleChange}>
                        <option>Seleccionar Duracion</option>
                        <option value='1'>1 hs</option>
                        <option value='2'>2 hs</option>
                        <option value='3'>3 hs</option>
                        <option value='4'>4 hs</option>
                        <option value='5'>5 hs</option>
                        <option value='6'>6 hs</option>
                        <option value='7'>7 hs</option>
                        <option value='8'>8 hs</option>
                        <option value='9'>9 hs</option>
                        <option value='10'>10 hs</option>
                        <option value='11'>11 hs</option>
                        <option value='12'>12 hs</option>
                        <option value='13'>13 hs</option>
                        <option value='14'>14 hs</option>
                        <option value='15'>15 hs</option>
                        <option value='16'>16 hs</option>
                        <option value='17'>17 hs</option>
                        <option value='18'>18 hs</option>
                        <option value='19'>19 hs</option>
                        <option value='20'>20 hs</option>
                        <option value='21'>21 hs</option>
                        <option value='22'>22 hs</option>
                        <option value='23'>23 hs</option>
                        <option value='24'>24 hs</option>
                    </select>
                    {errors.duration && <p className={style.errors}>{errors.duration}</p>}
                </div>

                <div className={style.input}>
                    <label>Temporada</label>
                    <select name="season" onChange={handleChange} >
                        <option>Seleccionar Temporada</option>
                        <option value='Verano'>Verano</option>
                        <option value='Otoño'>Otoño</option>
                        <option value='Invierno'>Invierno</option>
                        <option value='Primavera'>Primavera</option>
                    </select>
                    {errors.season && <p className={style.errors}>{errors.season}</p>}
                </div>

                <div className={style.input}>
                    <label disabled>Seleccionar País</label>
                    <select name="countryId" multiple onChange={handleCountry}>
                        <option>Seleccionar País</option>
                        {countriesOrder.map(ct=>(
                            <option key={ct.id} value={ct.id}>{ct.name}</option>
                        ))}
                    </select>
                    {errors.countryId && <p className={style.errors}>{errors.countryId}</p>}
                </div>
                
                <button type="submit" disabled={isNotComplete} className={isNotComplete ? style.disabled : null}>CREAR</button>
        </form> 
        </div>
    )
}

export default CreateActivity


