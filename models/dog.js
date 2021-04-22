'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    
    static associate(models) {
      Dog.belongsToMany( models.User, { through: models.Transaction})
    }
  };
  Dog.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthYear: {
      type: DataTypes.INTEGER,
      validate: {
        mustBeMoreThanOneYearOld () {
          if ((this.birthYear + 1 ) == new Date().getFullYear()) {
            throw new Error(`Not mature enough for the profesional cannine world`)
          }
        }
      }
    },
    gender: DataTypes.STRING,
    speciality: DataTypes.STRING,
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