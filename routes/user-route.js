const express = require("express")
const { getUser, updateEmail, resetPassword, getUserTestimonies } = require("../controllers/user-controller")
const { validateToken } = require("../middleware/auth");

const route = express.Router()

//route untuk mengambil data user berdasarkan id
route.get("/", getUserTestimonies)
route.get("/user", validateToken, getUser)

//mengupdate email
route.put("/update/email", validateToken, updateEmail)
route.put("/update/password", validateToken, resetPassword)

module.exports = route