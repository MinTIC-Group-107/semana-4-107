const routerx = require('express-promise-router');
const router = require('express').Router()
const categoriaRouter = require('./categoria');
const articuloRouter = require('./articulo');


// api/articulo
router.use('/articulo', articuloRouter);
// api/categoria
router.use('/categoria', categoriaRouter)

module.exports = router;