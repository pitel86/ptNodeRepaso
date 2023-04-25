const Alumno = require('../models/alumno.model');


const getAlumnos = async(req, res) => {
   try {
        const allAlumnos = await Alumno.find()
        return res.status(200).json(allAlumnos)
   } catch (error) {
        return res.status(500).json(error) 
   }
}

const postAlumnos = async(req, res) => {
    try {
        const newAlumno = new Alumno(req.body);
        const createdAlumno = await newAlumno.save();
        return res.status(201).json(createdAlumno);
    } catch (error) {
       return res.status(500).json(error) 
    }
}

const putAlumnos = async(req, res) => {
    try {
        const {id} = req.params;
        const putAlumno = new Alumno(req.body);
        putAlumno._id = id;

        const updatedAlumno = await Alumno.findByIdAndUpdate(id, putAlumno, {new: true});
        if(!updatedAlumno){
            return res.status(404).json({message: "alumno no encontrado"})
        }
        return res.status(200).json(updatedAlumno);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteAlumnos = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedAlumno = await Alumno.findByIdAndDelete(id);
        if(!deletedAlumno){
            return res.status(404).json({message: "alumno no encontrado"})
        }
        return res.status(200).json(deletedAlumno);
    }catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAlumnos, postAlumnos, putAlumnos, deleteAlumnos}