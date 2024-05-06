const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
        type: DataTypes.INTEGER, 
        allowsNull: false, 
        primaryKey: true, 
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,  
        allowsNull: false, 
    }, 
    workout_minutes: {
        type: DataTypes.INTEGER, 
        allowsNull: false,
    },
    workout_type: {
        type: DataTypes.STRING, 
        allowsNull: false, 
    }
  },
  {
    sequelize
  }
);

module.exports = Workout;