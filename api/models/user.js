'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userMail: DataTypes.STRING,
    userPhone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};