const express = require('express');
const app = express();
const bodyParser = require('bosy-parser');
require('./config/config');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hola Mundo');
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }else{
        res.json({
            persona: body
        });
    }
})

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto', 3000);
});