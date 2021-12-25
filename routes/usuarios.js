const { Router } = require('express');
//desectructuramos la función Router
const { usuariosGet } = require('../controllers/usuarios');
const router = Router();
router.get('/', usuariosGet);
router.put('/', function (req, res) {
    const { nombre='Sin nombre', pagina=1, apikey } = req.query;
    res.json({
        ok: true,
        msg: 'put API2',
        nombre,
        pagina,
        apikey
    })
})
router.post('/', function (req, res) {
    const body = req.body;
    res.json({
        ok: true,
        msg: 'post API2',
        body: body
    })
})
router.delete('/', function (req, res) {
    res.json({
        ok: true,
        msg: 'delete API'
    })
})
module.exports = router;


