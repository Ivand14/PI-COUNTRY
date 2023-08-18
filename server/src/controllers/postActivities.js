const createActivity = require('../handlers/postActivites')

const postActivites = async(req,res)=>{
    const {name,difficulty,duration,season,countryId} = req.body
    try{
        if(!name || !difficulty || !duration || !season || !countryId){
            return res.status(404).json({error:'Missing Data'})
        }
        const newActivity = await createActivity(name,difficulty,duration,season,countryId)
        if(!newActivity) return res.status(404).json({error:'Missing Data'})
        return res.status(200).json(newActivity)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

module.exports = postActivites