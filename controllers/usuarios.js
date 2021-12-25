//creamos funciones y las exportamos
//const { response } = require('express');
//sólo se hace para tener un objeto response y tener sus métodos
const usuariosGet =  ( req, res )=> {
    res.json = {
        msg: 'get API - desde el controlador'
    };
}
module.exports = { usuariosGet} ;