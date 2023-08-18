const getInfo = require('../handlers/getInfo')

const  getByName = async(req,res)=>{
    const {name} = req.query
    const DB = await getInfo()
    try{
        if(!name) return  res.status(404).json({error:'Name not found or invalid'}) 
        const findName = await DB?.filter(country => country.name.toLowerCase().startsWith(name.toLowerCase()))
        if(findName.lenght === 0) return  res.status(404).json({error:'Name filtered not found or invalid'}) 
        return  res.status(200).json(findName) 
    }catch(error){
        return  res.status(500).json({error:error.message}) 
    }
}

module.exports = getByName