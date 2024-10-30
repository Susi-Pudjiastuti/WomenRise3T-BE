const express = require("express");
const {
  addMentorship,
  getAllMentorship,
  addBulkMentorship,
  deleteMentorshipById,
  editMentorshipById,
  getMentorshipById,
} = require("../controllers/kelasMentorship-controller");
const route = express.Router();

route.post("/", addMentorship);
route.post("/seeder", addBulkMentorship);
route.get("/", getAllMentorship);
route.get("/:id", getMentorshipById);
route.put("/:id", editMentorshipById);
route.delete("/:id", deleteMentorshipById);

module.exports = route;
