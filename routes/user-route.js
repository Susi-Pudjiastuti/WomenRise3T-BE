const express = require("express")
const { getUser, updateEmail, resetPassword } = require("../controllers/user-controller")


const route = express.Router()

//route untuk mengambil data user berdasarkan id
route.get("/", getUser)

//mengupdate email
route.put("/update/email", updateEmail)
route.put("/update/password", resetPassword)

module.exports = route