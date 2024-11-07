const express = require("express");
const {
  addScholarship,
  getAllScholarship,
  getScholarshipById,
  editScholarshipById,
  deleteScholarshipById,
  addBulkScholarship,
} = require("../controllers/scholarship-controller");
const route = express.Router();

//  Membuat Scholarship baru
route.post("/", addScholarship);

// Membuat bulk data Scholarship
route.post("/seeder", addBulkScholarship);

// Melihat semua Scholarship
route.get("/", getAllScholarship);

// Melihat detail Scholarship
route.get("/:id", getScholarshipById);

// Mengubah Scholarship
route.put("/:id", editScholarshipById);

// Menghapus Scholarship
route.delete("/:id", deleteScholarshipById);

module.exports = route;
