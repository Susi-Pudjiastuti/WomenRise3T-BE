const express = require("express");
const route = express.Router();

const authRoute = require("./auth-route")
const mentorRoute = require("./mentor-route");
const userRoute = require("./user-route")

route.get("/", (req, res) => {
  res.json({
    message: "test backend womenrise3t",
  });
});

route.use("/auth", authRoute);
route.use("/user", userRoute)
route.use("/mentors", mentorRoute);

module.exports = route;
