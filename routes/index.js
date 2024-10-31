const express = require("express");
const route = express.Router();

const authRoute = require("./auth-route")
const mentorRoute = require("./mentor-route");
const userRoute = require("./user-route");
const bookingRoute = require("./booking-route")
const { validateToken } = require("../middleware/auth");

route.get("/", (req, res) => {
  res.json({
    message: "test backend womenrise3t",
  });
});

route.use("/auth", authRoute);
route.use("/user", validateToken, userRoute)
route.use("/mentors", mentorRoute);
route.use("/bookings", validateToken, bookingRoute)

module.exports = route;
