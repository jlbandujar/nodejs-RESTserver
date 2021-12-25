const express = require('express');
//^me lo traigo de la app

class Server {
    constructor() {
        this.app=express();
        //middelware: funcion que se va a ejecutar
        // cuando se ejecute nuestro servidor
        this.middlewares();
        //rutas
        this.rutas();  
    }
    middlewares() { //los middleware utilizan el use
       //directorio público
       //this.app.use( cors());
       //lectura y parseo del body
       this.app.use(express.json());
       this.app.use( express.static('public'));
    }
    rutas(){
        this.app.use('/api/usuarios',require('../routes/usuarios'));
    }
    listen(){
        this.app.listen(process.env.PORT, function () {
            console.log('Escuchando en el puerto', process.env.PORT);
        })
    }
}
module.exports = Server;