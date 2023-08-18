const {Activity} = require('../db.js')

const postActivity = async(name,difficulty,duration,season,CountryId) =>{
    try{
        const[activities,created] = await Activity.findOrCreate({ //* Crea una entrada en la tabla al menos que haya una que cumpla con lo requerido
            where:{name,difficulty,duration,season}
        })
        console.log(created)
        await activities.setCountries(CountryId) //*  establece una relación entre la actividad y los países asociados
        await activities.save()
        return activities
    }catch(error){
        console.log('Activity not found or invalid',error)
    }
}

module.exports = postActivity