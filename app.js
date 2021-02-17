'use strict'
var express = require('express');


var app = express();

//middleware
app.use(express.urlencoded( {extended:true} ));
app.use(express.json());

// rutas
app.get('/', (req,res)=>{
    res.status(200).send(
        "<h1>Pagina de inicio</h1>"
    );
});

app.post('/test/:id', (req,res)=>{
    console.log(req.body.nombre);
    console.log(req.query.edad);
    console.log(req.params.id);
    
    res.status(200).send({
        message: "Hola mundo desde mi API de NodeJS"
    });
});



//exportar
module.exports = app;