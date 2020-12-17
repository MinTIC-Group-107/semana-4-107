'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articulos', [
      {
        codigo: "ADX123",
        nombre: "Google API",
        descripcion: "Soluciones tecnológicas basadas en APIs de google",
        estado: 1,
        categoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: "AOW456",
        nombre: "Python solutions",
        descripcion: "Soluciones basadas en el lenguaje de programación Python",
        estado: 1,
        categoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articulos', null, {});
  }
};
