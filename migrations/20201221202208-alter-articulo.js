'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     */
    await queryInterface.addColumn('Articulos', 'imagen',
    { type: Sequelize.INTEGER });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     */
    await queryInterface.removeColumn('Articulos', 'imagen');
  }
};
