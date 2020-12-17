const models = require('../models')
const bcrypt = require('bcryptjs')
const tokenServices = require('../services/token')

exports.list = async (req, res, next) => {
  try {
    const users = await models.Usuario.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send({
      message: 'Error: -> ' + error
    })
    next(error)
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = await models.Usuario.findOne({
      where: {email: req.body.email}
    })
    if (user) {
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
      if (passwordIsValid) {
        const token = await tokenServices.encode(user)
        res.status(200).send({
          tokenReturn: token,
        })
      } else {
        res.status(401).json({
          auth: false,
          tokenReturn: null,
          message: 'Tus credenciales no coinciden con nuestros registros'
        })
      }
    } else {
      res.status(404).json({
        auth: false,
        tokenReturn: null,
        message: 'Tus credenciales no coinciden con nuestros registros'
      })
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error: ' + error
    })
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    const user = await models.Usuario.findOne({
      where: {email: req.body.email}
    })
    if(user) {
      return res.status(400).json({
        message: 'El usuario ya existe'
      })
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, 10)
      const newUser = await models.Usuario.create(req.body)
      console.log('newUser: ', newUser)
      if (newUser.dataValues.email) {
        return res.status(201).json({
          user: newUser,
          message: 'Registro Exitoso'
        })
      } else {
        return res.status(500).json({
          message: 'Algo salió mal'
        })
      }
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error: ' + error
    })
    next(error)
  }
}
