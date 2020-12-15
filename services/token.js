var jwt = require('jsonwebtoken');
const models = require('../models');


module.exports = {

    //generar el token
    encode: async(id, rol) => {

    },
    //permite decodificar el token
    decode: async(token) => {
        try {
            console.log('env keyy', process.env.SECRET_KEY)
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            return decoded
        } catch (e) {
            console.log(e)
            return e
        }

    }
}