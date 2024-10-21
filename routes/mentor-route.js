const express = require("express");
const {
  addMentor,
  getAllMentor,
  getMentorById,
  editMentorById,
  deleteMentorById,
  addBulkMentor,
} = require("../controllers/mentor-controller");
const route = express.Router();

//  Membuat Mentor baru
route.post("/", addMentor);

// Membuat bulk data Mentor
route.post("/seeder", addBulkMentor);

// Melihat semua Mentor
route.get("/", getAllMentor);

// Melihat detail Mentor
route.get("/:id", getMentorById);

// Mengubah Mentor
route.put("/:id", editMentorById);

// Menghapus Mentor
route.delete("/:id", deleteMentorById);

module.exports = route;
