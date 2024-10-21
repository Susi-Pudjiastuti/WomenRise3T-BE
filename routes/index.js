const express = require("express");
const route = express.Router();

const mentorRoute = require("./mentor-route");

route.get("/", (req, res) => {
  res.json({
    message: "test backend womenrise3t",
  });
});

route.use("/mentors", mentorRoute);

module.exports = route;
