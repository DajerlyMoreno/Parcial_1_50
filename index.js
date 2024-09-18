const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const objetoController = require('./controller/objetoController');
const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('PORT', process.env.PORT || 3000);

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', objetoController.getInicio);
app.post('/agregar', objetoController.agregarObjeto);
app.get('/municipios/:departamentoCode', objetoController.getMunicipios);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
