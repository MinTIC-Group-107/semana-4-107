'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categoria.hasMany(models.Articulo, {
        foreignKey: 'categoriaId',
        as: 'categoria'
      })
    }
  };
  Categoria.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: DataTypes.STRING,
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
        validate: {
          isValid(value) {
            if (value !== 0 && value !== 1) {
              throw new Error('El estado debe ser 1 o 0')
            }
          }
        }
    }
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};
