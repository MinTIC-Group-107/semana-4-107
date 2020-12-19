/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const router = require('express').Router()
const articuloController = require('../controllers/ArticuloController');
const middleware = require('../middlewares/auth')

router.get('/list', middleware.verifyAdminAlm, articuloController.list)
router.post('/add', middleware.verifyAdminAlm, articuloController.add)
router.put('/update', middleware.verifyAdminAlm, articuloController.update)
router.put('/activate', middleware.verifyAdminAlm, articuloController.activate)
router.put('/deactivate', middleware.verifyAdminAlm, articuloController.deactivate)

module.exports = router
