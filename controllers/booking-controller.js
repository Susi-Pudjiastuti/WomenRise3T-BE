const Booking = require("../models/Booking");

module.exports = {
    getAllBooking: async(req,res) => {
        try{
            const userId = req.payload.id; 

            const data = await Booking.find({ user: userId }).populate('mentorship', 'user');
            res.json({
              message: "berhasil mendapatkan semua data booking",
              data,
            });
        }catch(error){
            console.error("Error:", error.message, error);
            res.status(500).json({
              message: "Terjadi Error, Gagal mendapatkan semua data Booking",
            });
        }
    },
    addBooking: async(req,res) => {
        try{
            const data = req.body; // input data
            data.user = req.payload.id;

            const newBooking = new Booking(data);
            await newBooking.save(); // save to database

            res.status(201).json({
                message: "Booking berhasil dibuat",
            });
        }catch(error){
            console.error("Error:", error.message, error);
            res.status(500).json({
              message: "Terjadi Error, Gagal menambahkan booking",
            });
        }
    },
    deleteBooking: async(req,res) => {

    }
}