/* un Ejemplo  de como se veria la ruta listar - modelo usuario*/
const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UsuarioController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/usuario
router.get('/', auth.verifyUsuario, usuarioController.list);

// api/usuario/login
router.post('/login', usuarioController.login)

// api/usuario/register
router.post('/register', usuarioController.register)


module.exports = router;
