const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumnoSchema = new Schema(
    {
        nombre: {type: String, required: true},
        apellido: {type: String, required: false},
        edad: {type: Number, required: false},
        aprobado: {type: Boolean, required: false},
        notas: [{type: Number, required: false}]
    },{
        timestamps: true
    }
)

const Alumno = mongoose.model('alumno', alumnoSchema);
module.exports = Alumno;
