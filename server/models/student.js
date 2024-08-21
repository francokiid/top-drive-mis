const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const student = sequelize.define('student', {
  studentID: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = student;