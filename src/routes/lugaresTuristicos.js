var express = require('express');
var router = express.Router();

const { getLugaresTuristicos } = require('../controllers/lugaresTuristicosController');
router.get('/', getLugaresTuristicos);

module.exports = router;