const Booking = require("../models/Booking");

module.exports = {
    getAllBooking: async(req,res) => {
        try{
            const userId = req.payload.id; 
            //mengambil query parameter status mentorship
            const mentorshipStatus = req.query.mentorshipStatus;
            // console.log(mentorshipStatus)

            const query = {user: userId}

            //mencari data berdasar
            const data = await Booking.find(query).populate('mentorship').populate('user');

        // filter data berdasarkan status mentorship
        const filteredData = data.filter(booking => 
            booking.mentorship && 
            booking.mentorship.status === (mentorshipStatus === 'true')
        );
            
            res.json({
                message: "berhasil mendapatkan semua data booking",
                data: filteredData,
            });
            
            // const data = await Booking.find({ user: userId }).populate("mentorship").populate("user");
            // res.json({
            //   message: "berhasil mendapatkan semua data booking",
            //   data,
            // });
        }catch(error){
            console.error("Error:", error.message, error);
            res.status(500).json({
              message: "Terjadi Error, Gagal mendapatkan semua data Booking",
            });
        }
    },
    addBooking: async(req,res) => {
        try{
            userId = req.payload.id; 
            console.log(userId)
            const data = req.body; // input data

            //cari mentorship
            const kelasSama = await Booking.findOne({
                user: userId,
                mentorship: data.mentorship
            }).populate({
                path: 'mentorship'
            });
            console.log(data.mentorship)
            console.log(await Booking.findOne({user: userId}))
            console.log("Found booking:", kelasSama);
            if (kelasSama) {
                return res.status(404).json({
                    message: "Anda sudah mendaftarkan kelas ini",
                });
            }

            data.user = req.payload.id; //memasukkan user berdasarkan id dari payload, ke dalam data input booking
            
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
        try{
            const userId = req.payload.id; 
            const idBooking = req.query.idBooking

            //delete by id of booking
            const result = await Booking.findOneAndDelete({ user: userId, _id: idBooking })

            if (!result) {
                return res.status(404).json({
                    message: "Booking tidak ditemukan atau Anda tidak memiliki izin untuk menghapus",
                });
            }

            res.status(200).json({
                message: "Booking berhasil dihapus",
            });
        }catch(error){
            console.error("Error:", error.message, error);
            res.status(500).json({
              message: "Terjadi Error, Gagal menghapus booking",
            });
        }
    }
}