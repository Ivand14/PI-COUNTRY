const { Router } = require("express");
const country = require('./country')
const activity = require ('./activities')


const routerCountries = Router();

routerCountries.use('/countries',country)
routerCountries.use('/activities',activity)

module.exports = routerCountries

