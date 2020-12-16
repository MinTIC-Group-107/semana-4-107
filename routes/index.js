const routerx = require('express-promise-router');
const router = require('express').Router()
const categoriaRouter = require('./categoria');





//router.use('/articulo', articuloRouter);

// api/categoria
router.use('/categoria', categoriaRouter)

module.exports = router;