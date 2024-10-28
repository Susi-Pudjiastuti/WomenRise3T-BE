const express = require("express");
const route = express.Router();

const mentorRoute = require("./mentor-route");
const mentorshipRoute = require("./kelasMentorship-route");

route.get("/", (req, res) => {
  res.json({
    message: "test backend womenrise3t",
  });
});

route.use("/mentors", mentorRoute);
route.use("/mentorships", mentorshipRoute);

module.exports = route;
