const routerx = require('express-promise-router');

const usuarioRouter = require('./api/usuario')
const categoriaRouter = require('./api/categoria');
const articuloRouter = require('./api/articulo');

const router = routerx();

router.use('/usuario', usuarioRouter);
router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
// api/categoria
router.use('/categoria', categoriaRouter)

module.exports = router;
