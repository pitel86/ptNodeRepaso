const express = require('express');
const {getAlumnos, postAlumnos, putAlumnos, deleteAlumnos} = require('../controllers/alumno.controller');
const router = express.Router();

router.get("/", getAlumnos)
router.post("/", postAlumnos)
router.put("/:id", putAlumnos)
router.delete("/:id", deleteAlumnos)

module.exports = router;