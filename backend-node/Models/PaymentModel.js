const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
// const Course= require('./CourseModel')

const Payments = sequelize.define("Payments", {
  payment_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  payment_mode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_receipt: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});



sequelize
  .sync()
  .then(() => {
    console.log("Course table created successfully");
  })
  .catch((err) => {
    console.error("Unable to create user table:", err);
  });

module.exports = Payments;
