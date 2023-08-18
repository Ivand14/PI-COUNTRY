const path = require('path');
require("dotenv").config({ path: path.join(__dirname, '../api', '.env') });
const { Sequelize } = require("sequelize");

//*LLamo a los modelos

const CountryModel = require('./models/Country')
const ActivityModel = require('./models/Activity')

const fs = require('fs');

//*Llamo al archivo .env y destructuro la informacion 
const {DB_USER, DB_PASSWORD, DB_HOST,DB_NAME} = process.env;

//* Utilizo la url de postreSQl para llamar a mi BD
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {logging: false, native: false},
  );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//* Llamo a los modelos y le paso sequelize por parametro
CountryModel(sequelize);
ActivityModel(sequelize);

const { Country,Activity } = sequelize.models;

//* Establezo la relación

Country.belongsToMany(Activity,{through:'actividad_pais'})
Activity.belongsToMany(Country,{through:'actividad_pais'})

module.exports = {
  Country,
  Activity,
  conn: sequelize,     
};