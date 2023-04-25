const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {res.send("este es el get de clase")});

module.exports = router;