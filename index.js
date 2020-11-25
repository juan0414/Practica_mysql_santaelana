const express = require('express');
const app = express();
const comerciante = require('./routes/Comerciante');
const negocio = require('./routes/Negocio');
const turista = require('./routes/Turista');
const cors = require("cors");


//ajustes puerto
app.set('port', 3306);

app.use(express.json());

//rutas
app.use('/api', comerciante);
app.use('/api', negocio);
app.use('/api', turista);
app.use(cors({origin: '*'}));



app.listen(app.get('port'), ()=>{
  console.log(`Servidor corriendo en el puerto ${app.get('port')} `);
});