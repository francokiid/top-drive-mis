const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const user = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'staff', 'instructor', 'student'),
        allowNull: false,
    },
});

module.exports = user;
