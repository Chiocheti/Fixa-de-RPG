const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING }
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