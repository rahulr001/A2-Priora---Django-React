const express = require("express");
const router = express.Router();
const CourseSchema = require("../Models/CourseModel");

router.post("/coursedata", (req, res) => {
  CourseSchema.create(req.body)
    .then((course) => {
      res
        .status(201)
        .json({ message: "Course created successfully", data: course });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.get("/", (req, res) => {
  CourseSchema.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.put("/update-course/:id", (req, res) => {
  CourseSchema.update(req.body, {
    where: { course_id: req.params.id },
  })
    .then(() => {
      res.status(200).json({ message: "User updated successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.route("/edit-course/:id").get((req, res) => {
  CourseSchema.findByPK(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.delete("/delete-course/:id", (req, res) => {
  CourseSchema.destroy({
    where: { course_id: req.params.id },
  })
    .then(() => {
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});
module.exports = router;
