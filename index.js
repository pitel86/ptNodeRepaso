const express = require('express');
const dotenv = require('dotenv');
const routerAlumno = require('./src/api/routes/alumno.routes');
const routerClase = require('./src/api/routes/clase.routes');
dotenv.config();
const {connect}  = require('./src/utils/db');

const app = express();
const PORT = process.env.PORT || 5000;
connect();
app.use(express.json());

app.use("/alumnos", routerAlumno);
app.use("/clase", routerClase);

app.listen(PORT, () => console.log('server listening on port', PORT));