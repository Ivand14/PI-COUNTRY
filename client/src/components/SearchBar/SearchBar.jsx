import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { search } from '../../redux/action/action'
import styles from './Search.module.css'
import {useDispatch} from 'react-redux'

function SearchBar() {
    const dispatch = useDispatch()
    const [name,setName] = useState('')


    const handleChange = (event) =>{
        setName(event.target.value)
    }

    const onHandleSearch = () =>{
        dispatch(search(name))
        setName('')
    }

    
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerInput}>
                <input type='search' value={name} onChange={handleChange}  className={styles.input} placeholder='Buscar País...'/>
                <Link to='/result'>
                    <button onClick={onHandleSearch} className={styles.button}>BUSCAR</button>
                </Link>
            </div>
        </div>
    )
}

export default SearchBar