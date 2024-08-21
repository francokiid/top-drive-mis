const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const branch = sequelize.define('branch', {
    branchID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    branchName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = branch;
