const HandleDeleteActivity = require('../handlers/HandleDeleteActivity')

const deleteActivity = async(req,res) =>{
    const {name} = req.query

    try {
        if(!name) return res.status(404).json({error: 'Activity not found'})
        await HandleDeleteActivity(name)
        return res.status(200).json('Activity deleted')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = deleteActivity