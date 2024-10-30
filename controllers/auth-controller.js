require('dotenv').config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

module.exports = {
    regis: async(req,res) => {
        try {
            const data = req.body;

            //cek jika user sudah ada
            const existingUser = await User.findOne({ email: data.email }).exec();
            if (existingUser) {
                return res.status(400).json({
                    message: "E-mail sudah terdaftar sebelumnya"
                });
            }

            //hash pass
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(data.password, salt);
            data.password = hash;

            //upload ke db
            const newUser = new User(data);
            await newUser.save();

            res.status(201).json({
                message: "Registration successful",
            });
        } catch (error) {
            // Log the error for debugging
            console.error("Error ketika registrasi", error);

            // Send server error response
            res.status(500).json({
                message: "Server error ketika registrasi",
                error: error.message
            });
        }
    },
    login: async(req,res) => {
        try{
            const data = req.body

            const user = await User.findOne({email: data.email}).exec() //cari data dlm databaase
            //jika tidak ada data tersebut dlm db
                if (!user) {
                    return  res.status(401).json({message: "E-mail atau password anda salah"})
                }

            const checkPassword = bcrypt.compareSync(data.password, user.password)
            //jika password false
            if (!checkPassword) {
                    return  res.status(401).json({message:"E-mail atau password anda salah"});
            }
                
                //buat token
                const token = jwt.sign({email: user.email}, process.env.PRIVATE_KEY,{ expiresIn: "1h" })
        
                res.status(200).json({
                    message: "berhasil login",
                    token,
                })
        } catch(error){
            console.error("Error ketika login", error);

            res.status(500).json({
                message: "Server error ketika login",
                error: error.message
            });
        }
        
    }
}
