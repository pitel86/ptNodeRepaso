const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Alumno = require('../api/models/alumno.model');
dotenv.config();

const arrayAlumnos = [
    {
        "nombre": "Pepe",
        "apellido": "Perez",
        "edad": 25,
        "aprobado": true,
        "notas": [6, 8, 20 ]
    },{
        "nombre": "Luis",
        "apellido": "Lopez",
        "edad": 25,
        "aprobado": true,
        "notas": [6, 8, 20 ]
    },{
        "nombre": "Juan",
        "apellido": "Ramirez",
        "edad": 25,
        "aprobado": true,
        "notas": [6, 8, 20 ]
    },{
        "nombre": "Lucas",
        "apellido": "Martinez",
        "edad": 25,
        "aprobado": true,
        "notas": [6, 8, 20 ]
    }
];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allAlumnos = await Alumno.find();
    if(allAlumnos.length > 0){
        await Alumno.collection.drop()
        console.log("alumnos borrados")
    }
})
.catch((error) => console.log(`error borrando alumnos: ${error}`))
.then(async() => {
    const alumnosMap = arrayAlumnos.map(alumno => new Alumno(alumno));
    await Alumno.insertMany(alumnosMap);
    console.log("alumnos insertados")
})
.catch((error) => console.log(`error insertando alumnos: ${error}`))
.finally(()=>mongoose.disconnect());