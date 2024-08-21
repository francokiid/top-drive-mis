const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const vehicle = sequelize.define('vehicle', {
  vehicleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wheels: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  registrationNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = vehicle;