const models = require('../models')

class CategoriaController {
    async list(req, res) {
        try {
            const categorias = await models.Categoria.findAll()
            res.status(200).send(categorias)
        } catch (err) {
            res.status(500).send({
                error: 'Problemas de conexión con la base de datos',
                mensaje: err
            })
        }
    }
    async add(req, res) {
        try {
            const newCategory = await models.Categoria.create(req.body)
            res.status(200).send(newCategory)
        } catch (err) {
            res.status(500).send({
                error: 'Problemas para crear la categoría',
                mensaje: err.errors[0].message
            })
        }
    }
    async update(req, res) {
        try {
            const wasUpdated = await models.Categoria.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            if (wasUpdated[0] === 1) {
                res.status(200).send({
                    Resultado: 'exitoso'
                })
            } else {
                res.status(404).send({
                    error: 'Categoría a actualizar no fue encontrada.'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'Problemas para modificar la categoría',
                mensaje: err
            })
        }
    }
    async activate(req, res) {
        try {
            const wasUpdated = await models.Categoria.update({estado: 1}, {
                where: {
                    id: req.body.id
                }
            })
            if (wasUpdated[0] === 1) {
                res.status(200).send({
                    Resultado: 'exitoso'
                })
            } else {
                res.status(404).send({
                    error: 'Categoría a actualizar no fue encontrada.'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'Problemas para modificar la categoría',
                mensaje: err
            })
        }
    }
    async deactivate(req, res) {
        try {
            const wasUpdated = await models.Categoria.update({estado: 0}, {
                where: {
                    id: req.body.id
                }
            })
            if (wasUpdated[0] === 1) {
                res.status(200).send({
                    Resultado: 'exitoso'
                })
            } else {
                res.status(404).send({
                    error: 'Categoría a actualizar no fue encontrada.'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'Problemas para modificar la categoría',
                mensaje: err
            })
        }
    }
}

categoriaController = new CategoriaController()
module.exports = categoriaController
