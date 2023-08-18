const express = require("express");
const routerApi = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

//* Establezco las CORS que permiten solicitudes de cualquier origen

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


const Options = { origin: "*" }; //* Habilito las CORS en la aplicacion

server.use(morgan("dev"));
server.use(express.json());
server.use(cors(Options));

server.use("/", routerApi);

module.exports = server;
