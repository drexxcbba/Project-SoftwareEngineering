const pool = require('./database');

const getCalificacion= async function(req, res, next) {
    await pool.query('SELECT IDLugarTuristico, avg(Calificación) as promedio FROM calificación group by IDLugarTuristico', (err, rows, fields) => {
        if(!err){
            res.status(200).json(rows);
        }else{
            console.log(err);
        }
    });
  }

const getCalificacionByid = async function(req, res, next) {
   let sql = 'SELECT count(*) as cont , sum(Calificación) as suma FROM calificación where IDLugarTuristico = ' + [req.params.id];
    await pool.query(sql, (err, rows, fields) => {
       if(!err){
         res.status(200).json(rows);
        }else{
          console.log(err);
      }
    });
  }

const createCalificacion = async function(req, res, next) {
    const { tipoasiento_idtipoasiento, nombreevento, fecha} = req.body;
    await pool.query('INSERT INTO calificación (tipoasiento_idtipoasiento, nombreevento, fecha) VALUES ($1, $2, $3)'
         , [tipoasiento_idtipoasiento, nombreevento, fecha]);
    res.json({
        message: "correctly added",
        body: {
            entrada: {tipoasiento_idtipoasiento, nombreevento, fecha}
        }
    });
  }

const deleteCalificacion = async function(req, res, next) {
    const response = await pool.query('DELETE FROM entrada where identrada = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

module.exports = {
    getCalificacion, deleteCalificacion, createCalificacion, getCalificacionByid
}