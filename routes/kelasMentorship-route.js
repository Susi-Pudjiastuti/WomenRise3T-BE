const express = require("express");
const {
  addMentorship,
  getAllMentorship,
} = require("../controllers/kelasMentorship-controller");
const route = express.Router();

route.post("/", addMentorship);
route.get("/", getAllMentorship);

module.exports = route;
