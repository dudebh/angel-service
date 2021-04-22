'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.STRING
      },
      birthYear: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      speciality: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.BOOLEAN
      },
      imagePath: {
        type: Sequelize.STRING
      },
      biodata: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dogs');
  }
};