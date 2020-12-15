const categorias = require('../models/categoria.js')

class CategoriaController {
    async list(req, res) {
        

        res.status(200).send('List works')
    }
    async add(req, res) {
        res.status(200).send('add works')
    }
    async update(req, res) {
        res.status(200).send('update works')
    }
    async activate(req, res) {
        res.status(200).send('activate works')
    }
    async deactivate(req, res) {
        res.status(200).send('deactivate works')
    }
}

categoriaController = new CategoriaController()
module.exports = categoriaController