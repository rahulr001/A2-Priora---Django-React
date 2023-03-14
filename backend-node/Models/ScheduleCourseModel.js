const { Sequelize, Datatypes } = require("sequlize");
const ScheduleCourse = Sequelize.define("ScheduleCourse", {
  select_course: {},
  run: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  PDU: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  CET: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  start_date: {
    type: Datatypes.DATE,
    allowNull: false,
  },
  time: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  day_period: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: Datatypes.DATE,
    allowNull: false,
  },
  max_seats: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  fee: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  confirmation_email: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  certificate_email: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  visibility: {
    type: Datatypes.STRING,
    allowNull: false,
  },
});

Sequelize.sync()
  .then(() => {
    console.log("Schedule Course table created successfully");
  })
  .catch((err) => {
    console.log("Something went wrong :", err);
  });
module.export=ScheduleCourse