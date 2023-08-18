const validate = (form,activities) =>{
    let errors = {}

    if(activities.find(act=>act.name==form.name)) errors.name = 'La actividad ya fue creada'
    
    if(!(form.name.length <= 10) || !/^[a-zA-Z]+$/.test(form.name)) errors.name = 'Debe menos de 10 caracteres y no debe estar vacio'
    
    if(!form.difficulty) errors.difficulty = 'Dificultad Requerida'
    
    if(!form.duration) errors.duration = 'Duracion Requerida'
    
    if(!form.season) errors.season = 'Temporada Requerida'
    
    if(form.countryId.length == 0) errors.countryId = 'Debes seleccionar al menos un país'

    return errors
}

export default validate