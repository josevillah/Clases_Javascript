let con = require('./conect'); // Aqui ingreso la conección con la base de datos

// Configurar con express el servidor
let express = require('express');

cony = con.openConnection();

const app = express();
app.set('port', 3000);
app.listen(3000);


con.closeConnection(cony);