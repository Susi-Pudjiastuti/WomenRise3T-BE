const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
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
  kartuIdentitas: String,
  asalDaerah: {
    type: String,
    required: true,
  },
  universitas: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  totalSessions: {
    type: Number,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  prestasi: {
    type: [String],
    required: true,
  },
  studi: {
    type: String,
    enum: ["Studi Dalam Negeri", "Studi Luar Negeri"],
    required: true,
  },
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
