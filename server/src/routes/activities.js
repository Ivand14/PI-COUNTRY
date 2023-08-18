const {Router} = require('express')
const getActivities = require('../controllers/getActivities')
const postActivities = require('../controllers/postActivities')
const deleteActivity = require('../controllers/deleteActivity')

const router = Router()

router.post('/',postActivities)

router.get('/',getActivities)

router.delete('/',deleteActivity)

module.exports = router