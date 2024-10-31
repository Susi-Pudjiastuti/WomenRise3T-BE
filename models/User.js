const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  namaLengkap: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  kartuIdentitas: {
    type: String,
    required: true,
  },
  asalDaerah: {
    type: String,
    required: true,
  },
  testimoni: String
  
});

const User = mongoose.model("User", userSchema)

module.exports = User
