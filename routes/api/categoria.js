const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/categoria/list
router.get('/list', categoriaController.list);

// api/categoria/list
router.post('/add', auth.verifyUsuario, categoriaController.add)

// api/categoria/update
router.put('/update', categoriaController.update)

// api/categoria/activate
router.put('/activate', categoriaController.activate)

// api/categoria/deactivate
router.put('/deactivate', categoriaController.deactivate)

module.exports = router;
