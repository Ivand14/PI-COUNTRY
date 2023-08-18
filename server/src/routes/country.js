const getById = require('../controllers/getById')
const getCountries = require('../controllers/getCountries')
const getByName = require('../controllers/getByName')
const {Router} = require('express')

const router = Router()

router.get('/',getCountries)

router.get('/name',getByName)

router.get('/:idPais',getById)





module.exports = router



