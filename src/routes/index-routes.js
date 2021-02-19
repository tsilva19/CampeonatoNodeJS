const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        nome: 'Gremio',
        estadio: 'Arena do Gremio',
        sigla: 'GRE',
        uf: 'RS'
    })
})


module.exports = router;