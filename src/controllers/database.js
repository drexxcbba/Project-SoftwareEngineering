const mysql = require('mysql');

const conexcion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'turismo-umss'
})

conexcion.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log("db is conected");
    }
})

module.exports = conexcion;