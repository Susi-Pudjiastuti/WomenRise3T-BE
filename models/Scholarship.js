const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  namaUniversitas: {
    type: String,
    required: true,
  },
  gambar: {
    type: String,
    required: true,
  },
  linkBeasiswa: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  daerahKhusus: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

scholarshipSchema.pre("save", function (next) {
  this.status = this.tanggal >= new Date();
  next();
});

scholarshipSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  const query = this.getQuery();
  if (update.tanggal) {
    update.status = new Date(update.tanggal) >= new Date();
  } else {
    const doc = await this.model.findOne(query);
    if (doc) {
      update.status = doc.tanggal >= new Date();
    }
  }
  next();
});

const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
module.exports = Scholarship;
