const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "test backend womenrise3t",
  });
});

module.exports = route;
