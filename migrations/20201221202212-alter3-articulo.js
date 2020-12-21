'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     */
    await queryInterface.changeColumn('Articulos', 'imagen',
    { type: Sequelize.STRING });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     */
    await queryInterface.removeColumn('Articulos', 'imagen');
  }
};
