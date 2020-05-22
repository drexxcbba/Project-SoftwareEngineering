var express = require('express');
var router = express.Router();

const { getCalificacion, getCalificacionByid } = require('../controllers/calificacionController'); 
router.get('/', getCalificacion);
//router.post('/',);
router.get('/:id', getCalificacionByid);
//router.delete('/:id', );
//router.put('/:id', );
module.exports = router;