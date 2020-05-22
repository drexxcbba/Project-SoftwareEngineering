const express = require('express');
const cors = require('cors');
const app = express();
let cal = require('./routes/calificacion');
let lt = require('./routes/lugaresTuristicos');

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 8585);

app.use('/api/calificacion', cal);
app.use('/api/lugaresturisticos', lt);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });