const jwt = require('jsonwebtoken');
const models = require('../models');

const checkToken = async (token) => {
  let localID = null
  try {
    const { id } = token.decode(token)
    localID = id
  } catch (error) {
    console.log('Error: ' + error)
  }

  const user = await models.Usuario.findOne({
    where: {
      id: localID,
      estado: 1
    }
  })
  if(user) {
    const token = encode(user)
    return {
      token,
      rol: user.rol
    }
  } else {
    return null
  }
}

module.exports = {

  //generar el token
  encode: (user) => {
    const token = jwt.sign({
      id: user.id,
      rol: user.rol,
      nombre: user.nombre,
      email: user.email,
      estado: user.estado
    }, process.env.SECRET_KEY, {
      expiresIn: 86400
    })

    return token
  },
  //permite decodificar el token
  decode: async(token) => {
    try {
      const { id } = await jwt.verify(token, process.env.SECRET_KEY)
      const user = await models.Usuario.findOne({
        where: {
          id: id,
          estado: 1
        }
      })
      if(user) {
        return user
      } else {
        return null
      }
    } catch (e) {
      const newToken = await checkToken(token)
      return newToken
    }
  }
}
