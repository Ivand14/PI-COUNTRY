const ApiToDb = require('./src/handlers/ApiToDb') //* Llamo a la funcion que pasa la API a mi BD
const server = require("./src/server");
const { conn } = require('./src/db.js');
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, '../api', '.env') });
const {PORT} = process.env;

conn.sync({ force: false })
.then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port`,PORT);
  ApiToDb()
})
})
.catch(error => console.error(error))
