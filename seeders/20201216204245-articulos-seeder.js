'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articulos', [
      {
        codigo: "ADX123",
        nombre: "Google API",
        descripcion: "Soluciones tecnológicas basadas en APIs de google",
        imagen: "https://hipertextual.com/files/2020/06/hipertextual-nueva-tecnologia-google-hara-mas-facil-crear-y-disfrutar-experiencias-realidad-aumentada-2020036452-740x490.jpg",
        estado: 1,
        categoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: "AOW456",
        nombre: "Python solutions",
        descripcion: "Soluciones basadas en el lenguaje de programación Python",
        imagen: "https://www.robotechnics.es/wp-content/uploads/augreality_1-460x230.png",
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
