const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
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
                message: "Server error ketika mengambil data user.",
                error: error.message,
            });
        }
        
    },
    updateEmail: async(req,res) => {
        try{
            const data  = req.body.email;

            const userId = req.payload.id; 
            // Cek apabila email sudah ada di db
            const email = await User.findOne({email: data}).exec();

            if (email) {
                return res.status(400).json({ message: "Email already in use" });
            }

            // update email berdasarkan id
            const user = await User.findByIdAndUpdate(userId, {email: data} ,{ new: true }).exec();
            
            // buat token baru dengan email yg baru
            const newToken = jwt.sign({ email: user.email, id: user._id }, process.env.PRIVATE_KEY,{ expiresIn: "1h" });
            
            res.status(200).json({
                message: "E-mail user berhasil diperbarui.",
                newToken
            });
        } catch(error){
            console.error("Gagal memperbarui e-mail:", error);
            res.status(500).json({
                message: "Server error ketika memperbarui e-mail",
                error: error.message,
            });
        }
    },
    resetPassword: async(req,res) => {
        try{
            const data = req.body;
            const userId = req.payload.id; 

            //hash pass
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(data.password, salt);
            data.password = hash;

            // update passord berdasarkan id
            const user = await User.findByIdAndUpdate(userId, {password: data.password} ,{ new: true }).exec();

            if (!user) {
                return res.status(404).json({
                    message: "User tidak ditemukan"
                });
            }
            res.status(200).json({
                message: "Password berhasil diperbarui.",
                
            });
            
        } catch(error){
            console.log("Gagal reset password:",error)

            res.status(500).json({
                message: "Server error ketika reset password",
                error: error.message,
            });
        }
    },
    getUserTestimonies: async(req,res) => {
        try{
            const dataTestimonies = await User.find({testimoni: { $exists: true, $ne: null, $ne: "" }}, "namaLengkap asalDaerah avatar testimoni").exec()
            // console.log(dataTestimonies)
            res.status(200).json({
                message: "Berhasil mengambil semua testimoni user",
                dataTestimonies
            });
        }catch(error){
            console.log("Gagal:",error)

            res.status(500).json({
                message: "Server error ketika mengambil testimoni user",
                error: error.message,
            });
        }
    }
}