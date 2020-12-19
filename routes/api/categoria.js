const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/categoria/list
router.get('/list', auth.verifyUsuario, categoriaController.list); //Need middleware
// router.get('/list', categoriaController.list);

// api/categoria/add
router.post('/add', auth.verifyUsuario, categoriaController.add) //Need middleware
// router.post('/add', categoriaController.add)

// api/categoria/update
router.put('/update', auth.verifyUsuario, categoriaController.update) //Need middleware
// router.put('/update', categoriaController.update)

// api/categoria/activate
router.put('/activate', auth.verifyUsuario, categoriaController.activate) //Need middleware
// router.put('/activate', categoriaController.activate)

// api/categoria/deactivate
router.put('/deactivate', auth.verifyUsuario, categoriaController.deactivate) //Need middleware

module.exports = router;
