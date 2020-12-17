const models = require('../models')

exports.list = async (req, res, next) => {
  try { //TODO:  Filtrar datos a enviar
    const registros = await models.Articulo.findAll()
    if(registros) {
      res.status(200).json(registros)
    } else {
      res.status(404).json({
        registros,
        message: 'No hay artículos registrados'
      })
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error: -> ' + error
    })
    next(error)
  }
}

exports.add = async (req, res, next) => {
  try { //TODO: Verificar que nombre no esté repetido
    const registro = await models.Articulo.create(req.body)
    res.status(200).json(registro)
  } catch (error) {
    res.status(500).send({
      message: 'Error: ' + error
    })
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const registro = await models.Articulo.update({
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion
    }, {
      where: {
        id: req.body.id
      }
    })
    res.status(200).json(registro)
  } catch (error) {
    res.status(500).send({
      message: 'Error -> ' + error
    })
    next()
  }
}

exports.activate = async (req, res, next) => {
  try {
    const registro = await models.Articulo.update({
      estado: 1
    }, {
      where: {
        id: req.body.id
      }
    })
    res.status(200).json(registro)
  } catch (error) {
    res.status(500).send({
      message: 'Error -> ' + error
    })
    next()
  }
}

exports.deactivate = async (req, res, next) => {
  try {
    const registro = await models.Articulo.update({
      estado: 0
    }, {
      where: {
        id: req.body.id
      }
    })
    res.status(200).json(registro)
  } catch (error) {
    res.status(500).send({
      message: 'Error -> ' + error
    })
    next()
  }
}
