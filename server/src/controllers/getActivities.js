const {Activity} = require('../db')

const getActivities = async(req,res)=>{
    try {
        const allActivities= await Activity.findAll()
        if(!allActivities) return res.status(400).json({error:'Activity not found'})
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = getActivities