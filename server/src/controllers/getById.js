const getInfo = require('../handlers/getInfo')


const getById = async(req,res)=>{
    const {idPais} = req.params
    const DB = await getInfo()
    try{
        if(idPais.length === 0 || idPais.length < 3) return  res.status(404).json({error:'ID not found or invalid'})
        const filterCountry = await DB?.find((country) => country.id === idPais)
        if(!filterCountry) return  res.status(400).json({error:'Country not found'})
        return res.status(200).json(filterCountry)
    }catch{
        res.status(500).json({error:error.message})
    }
}

module.exports = getById