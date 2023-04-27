const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: { type: DataTypes.STRING },
    userPassword: { type: DataTypes.STRING },
    userMail: { type: DataTypes.STRING },
    userPhone: { type: DataTypes.STRING }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    hooks: {
      beforeCreate: (user) => {
        user.id = uuidv4();
      },
    },
  });

  return User;
};