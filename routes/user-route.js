const express = require("express")
const { getUser, updateEmail } = require("../controllers/user-controller")


const route = express.Router()

//route untuk mengambil data user berdasarkan id
route.get("/", getUser)

//mengupdate email
route.put("/", updateEmail)

module.exports = route