const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  namaPendaftar: {
    type: String,
    required: true,
  },
  emailPendaftar: {
    type: String,
    required: true,
  },
  noHp: {
    type: String,
    required: true,
  },
  alasanMendaftar: {
    type: String,
    required: true,
  },
  mentorship: {
    type: mongoose.ObjectId,
    ref: 'Mentorship'
  },
  user: {
    type: mongoose.ObjectId,
    ref: 'User'
  }
  
});

const Booking = mongoose.model("Booking", bookingSchema)


module.exports = Booking
