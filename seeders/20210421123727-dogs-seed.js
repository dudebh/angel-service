'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../data/serviceDogs.json')

    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Dogs', data)

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dogs', null)
  }
};
