const mongoose = require("mongoose");

const mentorshipSchema = new mongoose.Schema({
  tema: {
    type: String,
    required: true,
    enum: [
      "Menyusun CV dan Resume yang Stand Out",
      "Rahasia Esai Sukses: Buka Peluang Beasiswa",
      "Persiapan Wawancara untuk Sukses Beasiswa",
    ],
  },
  tanggal: {
    type: Date,
    required: true,
  },
  jam: {
    type: String,
    required: true,
  },
  slot: {
    type: Number,
    required: true,
    min: 1,
  },
  status: {
    type: Boolean,
    default: true,
  },
  mentor: {
    type: mongoose.ObjectId,
    ref: "Mentor",
  },
});

mentorshipSchema.pre("save", function (next) {
  this.status = this.tanggal >= new Date();
  next();
});

mentorshipSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update.tanggal) {
    update.status = new Date(update.tanggal) >= new Date(); // Update status based on new date
  }
  next();
});

const Mentorship = mongoose.model("Mentorship", mentorshipSchema);

module.exports = Mentorship;
