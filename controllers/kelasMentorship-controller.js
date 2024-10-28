const Mentorship = require("../models/Mentorship");

module.exports = {
  addMentorship: async (req, res) => {
    try {
      if (req.body.tanggal) {
        req.body.tanggal = new Date(req.body.tanggal);
      }

      const newMentorship = new Mentorship(req.body);
      await newMentorship.save();

      res.status(201).json({
        message: "data Kelas Mentorship berhasil dibuat",
        data: newMentorship,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Kelas Mentorship, pastikan data kelas mentorship sudah benar",
      });
    }
  },
  getAllMentorship: async (req, res) => {
    try {
      let mentorships = await Mentorship.find({}).populate("mentor");

      res.status(200).json({
        message: "Berhasil mendapatkan semua data Kelas Mentorship",
        data: mentorships,
      });
    } catch (error) {
      console.error("Error:", error.message, error);
      res.status(500).json({
        message: "Terjadi Error, Gagal mendapatkan semua data kelas mentorship",
      });
    }
  },
};
