/* un Ejemplo  de como se veria la ruta listar - modelo usuario*/
const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UsuarioController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/usuario/list
// router.get('/list', auth.verifyUsuario, usuarioController.list);
router.get('/list', usuarioController.list);

// api/usuario/login
router.post('/login', usuarioController.login)

// api/usuario/add
router.post('/add', usuarioController.add)

// api/usuario/update
router.post('/update', usuarioController.update)

// api/usuario/activate
router.post('/activate', usuarioController.activate)

// api/usuario/deactivate
router.post('/deactivate', usuarioController.deactivate)


module.exports = router;
