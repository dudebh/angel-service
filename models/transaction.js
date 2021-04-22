'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      
    }
  };
  Transaction.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    DogId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};