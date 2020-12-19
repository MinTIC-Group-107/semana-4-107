const router = require('express').Router()
const categoriaController = require('../controllers/CategoriaController')
const middleware = require('../middlewares/auth')

router.get('/list', middleware.verifyAdminAlm, categoriaController.list)
router.post('/add', middleware.verifyAdminAlm, categoriaController.add)
router.put('/update', middleware.verifyAdminAlm, categoriaController.update)
router.put('/activate', middleware.verifyAdminAlm, categoriaController.activate)
router.put('/deactivate', middleware.verifyAdminAlm, categoriaController.deactivate)

module.exports = router