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
  addBulkMentorship: async (req, res) => {
    try {
      const data = req.body;
      const Mentorships = Mentorship.insertMany(data);

      res.status(201).json({
        message: "data Bulk Mentorship berhasil dibuat",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Bulk Mentorship, pastikan data sudah benar",
      });
    }
  },
  getAllMentorship: async (req, res) => {
    try {
      const { mentorId } = req.query;

      const query = mentorId ? { mentor: mentorId } : {};

      const mentorships = await Mentorship.find(query).populate("mentor");

      res.status(200).json({
        message: "Berhasil mendapatkan data Kelas Mentorship",
        data: mentorships,
      });
    } catch (error) {
      console.error("Error:", error.message, error);
      res.status(500).json({
        message: "Terjadi Error, Gagal mendapatkan semua data kelas mentorship",
      });
    }
  },
  getMentorshipById: async (req, res) => {
    try {
      const data = await Mentorship.findById(req.params.id).exec();

      if (!data) {
        return res
          .status(404)
          .json({
            message: `Kelas Mentorship ${req.params.id} tidak ditemukan`,
          });
      }

      res.status(200).json({
        message: `Berhasil mendapatkan data Kelas Mentorship ${req.params.id} `,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mendapatkan data Kelas Mentorship ${req.params.id} `,
      });
    }
  },

  editMentorshipById: async (req, res) => {
    try {
      const data = await Mentorship.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      if (!data) {
        return res
          .status(404)
          .json({
            message: `Kelas Mentorship ${req.params.id} tidak ditemukan`,
          });
      }

      res.status(200).json({
        message: `Berhasil mengedit data Kelas Mentorship ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mengedit data kelas Mentorship ${req.params.id} `,
      });
    }
  },

  deleteMentorshipById: async (req, res) => {
    try {
      const data = await Mentorship.findByIdAndDelete(req.params.id);

      if (!data) {
        return res
          .status(404)
          .json({
            message: `kelas Mentorship ${req.params.id} tidak ditemukan`,
          });
      }

      res.status(200).json({
        message: `Berhasil menghapus data Kelas Mentorship ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Terjadi Error, gagal menghapus data Kelas Mentorship ${req.params.id} `,
      });
    }
  },
};
