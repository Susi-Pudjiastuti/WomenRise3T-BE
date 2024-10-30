const User = require("../models/User")

module.exports = {
    getUser: async(req,res) => {
        try{
            //ambil email dari token payload
            const email = req.payload.email;
            // cari user berdasarkan nama email
            const user = await User.findOne({ email }).exec();

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({
                message: "User berhasil dicari",
                user
            });
        }catch(error){
            console.log("Gagal mengambil data user:",error)

            res.status(500).json({
                message: "Server error ketika mengambil data user",
                error: error.message,
            });
        }
        
    },
    updateEmail: async(req,res) => {
        
    }
}