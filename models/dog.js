'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dog.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    specialist: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    imagePath: DataTypes.STRING,
    biodata: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Dog',
  });

  Dog.beforeCreate((el, option) => {
    let today = new Date().getFullYear()

    if ((today - el.birthYear) > 7) {
      el.availability = false
    }
    else {
      el.availability = true
    }
  })
  return Dog;
};