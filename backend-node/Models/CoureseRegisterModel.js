const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Payment = require('./PaymentModel')
const Course = require('./CourseModel')

const CourseRegister = sequelize.define("CourseRegister", {
  register_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  selected_course: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Course",
      key: "course_id",
    },
  },
  sponsership_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  applicant_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alternative_email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  FIN_NRIC_Passport_no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  membership_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  membership_no: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  payment: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Payment",
      key: "payment_id",
    },
  },
});

CourseRegister.belongsTo(Payment, {
    foreignKey: 'payment_id',
    allowNull: false
  });

CourseRegister.belongsTo(Course, {
    foreignKey: 'course_id',
    allowNull: false
  });
  

sequelize
  .sync()
  .then(() => {
    console.log("Course table created successfully");
  })
  .catch((err) => {
    console.error("Unable to create CourseRegister table:", err);
  });

module.exports = CourseRegister;;
