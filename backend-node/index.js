const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const sequelize = require("./sequelize");
require("dotenv").config();
const config = require("./Config");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been connected successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const corsOrigin = {
  origin: ["http://localhost:3000"],
  credentials: true,
  crossorigin: true,
  optionSuccessStatus: 200,
};

const courseSchema = require("./Routes/CourseRoute");
const CourseRegisterSchema = require("./Routes/CourseRegisterRoute");

app.use(express.json());

app.use(cors(corsOrigin));

app.use("/course", courseSchema);
app.use("/courseRegister", CourseRegisterSchema);

app.listen(5000, () => {
  console.log(`Server listening on port ${PORT}`);
});
