const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const schedule = sequelize.define('schedule', {
    scheduleID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    courseID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructorID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    branchID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classroomID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
});

module.exports = schedule;