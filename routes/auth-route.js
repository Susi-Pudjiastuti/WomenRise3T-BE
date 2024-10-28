const express = require("express")
const { regis, login, getUser } = require("../controllers/auth-controller")

const route = express.Router()

//route untuk registrasi dan login
route.post("/regis", regis)
route.post("/login", login)
//route untuk mengambil data user
route.get("/user/:id", getUser)

module.exports = route

