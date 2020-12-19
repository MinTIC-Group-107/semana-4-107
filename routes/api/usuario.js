/* un Ejemplo  de como se veria la ruta listar - modelo usuario*/
const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UsuarioController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/usuario/login
router.post('/login', usuarioController.login)

// api/usuario/list
// router.get('/list', auth.verifyUsuario, usuarioController.list);
router.get('/list', auth.verifyUsuario, usuarioController.list);

// api/usuario/add
router.post('/add', auth.verifyUsuario, usuarioController.add)

// api/usuario/update
router.put('/update', auth.verifyUsuario, usuarioController.update)

// api/usuario/activate
router.put('/activate', auth.verifyUsuario, usuarioController.activate)

// api/usuario/deactivate
router.put('/deactivate', auth.verifyUsuario, usuarioController.deactivate)


module.exports = router;
