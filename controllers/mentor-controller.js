const Mentor = require("../models/Mentor");

module.exports = {
  addMentor: async (req, res) => {
    try {
      const newMentor = new Mentor(req.body);
      await newMentor.save();

      res.status(201).json({
        message: "data Mentor berhasil dibuat",
        data: newMentor,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Gagal membuat data Mentor, pastikan data mentor sudah benar",
      });
    }
  },

  addBulkMentor: async (req, res) => {
    try {
      const data = req.body;
      const Mentors = Mentor.insertMany(data);

      res.status(201).json({
        message: "data Bulk Mentor berhasil dibuat",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Bulk Mentor, pastikan data name dan age sudah benar",
      });
    }
  },

  getAllMentor: async (req, res) => {
    try {
      let mentors = await Mentor.find({});

      res.status(200).json({
        message: "Berhasil mendapatkan semua data Mentor",
        data: mentors,
      });
    } catch (error) {
      console.error("Error:", error.message, error);
      res.status(500).json({
        message: "Terjadi Error, Gagal mendapatkan semua data Mentor",
      });
    }
  },

  getMentorById: async (req, res) => {
    try {
      const data = await Mentor.findById(req.params.id).exec();

      if (!data) {
        return res
          .status(404)
          .json({ message: `Mentor ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mendapatkan data Mentor ${req.params.id} `,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mendapatkan data Mentor ${req.params.id} `,
      });
    }
  },

  editMentorById: async (req, res) => {
    try {
      const data = await Mentor.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      if (!data) {
        return res
          .status(404)
          .json({ message: `Mentor ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mengedit data Mentor ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mengedit data Mentor ${req.params.id} `,
      });
    }
  },

  deleteMentorById: async (req, res) => {
    try {
      const data = await Mentor.findByIdAndDelete(req.params.id);

      if (!data) {
        return res
          .status(404)
          .json({ message: `Mentor ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil menghapus data Mentor ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Terjadi Error, gagal menghapus data Mentor ${req.params.id} `,
      });
    }
  },
};
