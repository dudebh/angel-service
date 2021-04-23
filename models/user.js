'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {    
    static associate(models) {
      // define association here
      User.belongsToMany(models.Dog, {through:models.Transaction})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate :{
        notEmpty:{msg: 'Name tidak boleh kosong'}
      }
    },
    email: {
      type: DataTypes.STRING,
      validate :{
        notEmpty:{msg: 'Email tidak boleh kosong'},
        isEmail: {msg: 'Format email harus sesuai'}
      }
    },
    username: {
      type: DataTypes.STRING,
      validate :{
        notEmpty:{msg: 'Username tidak boleh kosong'}
      }
    },
    password: {
      type: DataTypes.STRING,
      validate :{
        notEmpty:{msg: 'Password tidak boleh kosong'}
      }
    },
    role: DataTypes.STRING,
    activated: DataTypes.BOOLEAN
  }, {
    hooks:{
      beforeCreate: (instance, options)=>{     
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};