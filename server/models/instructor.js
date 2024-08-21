const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const instructor = sequelize.define('instructor', {
  instructorId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = instructor;