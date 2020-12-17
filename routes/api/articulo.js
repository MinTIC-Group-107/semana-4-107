/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/articulo/list
router.get('/list', articuloController.list);

// api/articulo/list
router.post('/add', articuloController.add)

// api/articulo/update
router.put('/update', articuloController.update)

// api/articulo/activate
router.put('/activate', articuloController.activate)

// api/articulo/deactivate
router.put('/deactivate', articuloController.deactivate)


module.exports = router;
