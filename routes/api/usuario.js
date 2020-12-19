/* un Ejemplo  de como se veria la ruta listar - modelo usuario*/
const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UsuarioController');
const auth = require('../../middlewares/auth');
const middleware = require('../../middlewares/auth')

const router = routerx();

// api/usuario
router.get('/', middleware.verifyAdmin, usuarioController.list);

// api/usuario/login
router.post('/login', usuarioController.login)

// api/usuario/register
router.post('/register', usuarioController.register)

// api/usuario/update
router.put('/update', middleware.verifyAdmin, usuarioController.update)

// api/usuario/activate
router.put('/activate', middleware.verifyAdmin, usuarioController.activate)

// api/usuario/deactivate
router.put('/deactivate', middleware.verifyAdmin, usuarioController.deactivate)


module.exports = router;
