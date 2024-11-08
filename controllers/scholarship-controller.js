const Scholarship = require("../models/Scholarship");

module.exports = {
  addScholarship: async (req, res) => {
    try {
      if (req.body.tanggal) {
        req.body.tanggal = new Date(req.body.tanggal);
      }

      const newScholarship = new Scholarship(req.body);
      await newScholarship.save();

      res.status(201).json({
        message: "data Scholarship berhasil dibuat",
        data: newScholarship,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Scholarship, pastikan data  scholarship sudah benar",
      });
    }
  },
  addBulkScholarship: async (req, res) => {
    try {
      const data = req.body;
      const Scholarships = Scholarship.insertMany(data);

      res.status(201).json({
        message: "data Bulk Scholarship berhasil dibuat",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Bulk Scholarship, pastikan data sudah benar",
      });
    }
  },
  getAllScholarship: async (req, res) => {
    try {
      const scholarships = await Scholarship.find({});

      res.status(200).json({
        message: "Berhasil mendapatkan data Scholarship",
        data: scholarships,
      });
    } catch (error) {
      console.error("Error:", error.message, error);
      res.status(500).json({
        message: "Terjadi Error, Gagal mendapatkan semua data  scholarship",
      });
    }
  },
  getScholarshipById: async (req, res) => {
    try {
      const data = await Scholarship.findById(req.params.id).exec();

      if (!data) {
        return res.status(404).json({
          message: ` Scholarship ${req.params.id} tidak ditemukan`,
        });
      }

      res.status(200).json({
        message: `Berhasil mendapatkan data  Scholarship ${req.params.id} `,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mendapatkan data  Scholarship ${req.params.id} `,
      });
    }
  },

  editScholarshipById: async (req, res) => {
    try {
      const data = await Scholarship.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      if (!data) {
        return res.status(404).json({
          message: ` Scholarship ${req.params.id} tidak ditemukan`,
        });
      }

      res.status(200).json({
        message: `Berhasil mengedit data  Scholarship ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mengedit data  Scholarship ${req.params.id} `,
      });
    }
  },

  deleteScholarshipById: async (req, res) => {
    try {
      const data = await Scholarship.findByIdAndDelete(req.params.id);

      if (!data) {
        return res.status(404).json({
          message: ` Scholarship ${req.params.id} tidak ditemukan`,
        });
      }

      res.status(200).json({
        message: `Berhasil menghapus data  Scholarship ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Terjadi Error, gagal menghapus data  Scholarship ${req.params.id} `,
      });
    }
  },
};
