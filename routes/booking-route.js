const express = require("express")
const { getAllBooking, addBooking, deleteBooking } = require("../controllers/booking-controller")
const route = express.Router()

//untuk di tampilkan di profile, aktifitas
route.get("/", getAllBooking)

//booking kelas
route.post("/", addBooking)

//delete booking berdasarkan id
route.delete("/:id", deleteBooking)


module.exports = route

