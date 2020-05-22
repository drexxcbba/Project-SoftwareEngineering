const pool = require('./database');

const getLugaresTuristicos = async function(req, res, next) {
    await pool.query('SELECT lt.*, avg(Calificación) as promedio FROM calificación c, lugaresturisticos lt WHERE c.IDCalificación = lt.IDLugarTuristico group by IDLugarTuristico order by Calificación DESC', (err, rows, fields) => {
        if(!err){
            res.status(200).json(rows);
        }else{
            console.log(err);
        }
    });
  }
module.exports = {
    getLugaresTuristicos
}